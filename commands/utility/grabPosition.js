const { SlashCommandBuilder } = require('discord.js');

// debug command to print channel position

module.exports = {
	data: new SlashCommandBuilder()
		.setName("grabpos")
		.setDescription('debug: write number of channel position'),
	async execute(interaction) {
		await interaction.reply("the channel position is " + Guildchannel.position());
	},
};