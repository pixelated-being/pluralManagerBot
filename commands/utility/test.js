const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('make sure the bot is alive'),
	async execute(interaction) {
		await interaction.reply('test complete ✅');
	},
};