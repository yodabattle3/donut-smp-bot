import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';
import { Member } from '../models/Member.js';
import mongoose from 'mongoose';

const connectDB = async () => {
  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    } catch (error) {
      console.error('Database connection error:', error);
    }
  }
};

export const data = new SlashCommandBuilder()
  .setName('demote')
  .setDescription('Demote a member by removing a role')
  .addUserOption(option => option.setName('user').setDescription('User to demote').setRequired(true))
  .addRoleOption(option => option.setName('role').setDescription('Role to remove').setRequired(true))
  .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles);

export async function execute(interaction) {
  await connectDB();
  
  const user = interaction.options.getUser('user');
  const role = interaction.options.getRole('role');
  const member = await interaction.guild.members.fetch(user.id).catch(() => null);
  const guildId = interaction.guildId;

  if (!member) {
    return interaction.reply({ content: '❌ Member not found!', ephemeral: true });
  }

  try {
    // Update member in database
    await Member.findOneAndUpdate(
      { userId: user.id, guildId },
      { 
        userId: user.id,
        guildId,
        username: user.tag,
      },
      { upsert: true, new: true }
    );

    await member.roles.remove(role);

    const embed = new EmbedBuilder()
      .setColor('#FF6347')
      .setTitle('⬇️ Member Demoted')
      .addFields(
        { name: 'User', value: `${user.tag}`, inline: true },
        { name: 'Removed Role', value: `${role.name}`, inline: true },
        { name: 'Server', value: interaction.guild.name, inline: true }
      )
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  } catch (error) {
    console.error('Error:', error);
    await interaction.reply({ content: '❌ Could not demote member!', ephemeral: true });
  }
}
