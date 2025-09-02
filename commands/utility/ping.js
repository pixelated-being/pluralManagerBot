const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('replies with "Pong!" and the ping time.'),
	async execute(interaction) {
		// pulled from stackoverflow: https://stackoverflow.com/a/72844026
		const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
		await interaction.editReply(`:ping_pong: Pong!\n:stopwatch: Uptime: ${Math.round(interaction.client.uptime / 60000)} minutes\n:sparkling_heart: Websocket heartbeat: ${interaction.client.ws.ping}ms.\n:round_pushpin: Rountrip Latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
	},
};