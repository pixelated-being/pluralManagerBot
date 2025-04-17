const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('teehee'),
	async execute(interaction) {
		await interaction.reply('tickle :3');
	},
};