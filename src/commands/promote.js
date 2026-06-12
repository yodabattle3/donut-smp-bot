import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';
import { GuildConfig } from '../models/GuildConfig.js';
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
  .setName('promote')
  .setDescription('Promote a member to a new role')
  .addUserOption(option => option.setName('user').setDescription('User to promote').setRequired(true))
  .addRoleOption(option => option.setName('role').setDescription('Role to give').setRequired(true))
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
        role: role.name,
      },
      { upsert: true, new: true }
    );

    await member.roles.add(role);

    const embed = new EmbedBuilder()
      .setColor('#00FF00')
      .setTitle('⬆️ Member Promoted')
      .addFields(
        { name: 'User', value: `${user.tag}`, inline: true },
        { name: 'New Role', value: `${role.name}`, inline: true },
        { name: 'Server', value: interaction.guild.name, inline: true }
      )
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  } catch (error) {
    console.error('Error:', error);
    await interaction.reply({ content: '❌ Could not promote member!', ephemeral: true });
  }
}
