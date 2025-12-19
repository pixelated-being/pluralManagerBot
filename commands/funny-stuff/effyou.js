const { SlashCommandBuilder } = require('discord.js');

// just a silly thing

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fu')
		.setDescription('fuck you'),
	async execute(interaction) {
		await interaction.reply('....................../´¯/) \n....................,/¯../ \n.................../..../ \n.............\/´\¯\/\'...\'\/\´\¯\¯\`·¸ \n..........\/\'\/...\/....\/.......\/\¨\¯\\ \n........\(\'\(...\´...\´.... \¯\~\/\'...\') \n.........\\.................\'.....\/ \n..........\'\'...\\.......... _.·\´ \n............\..............\( \n..............\\.............\\...');
	},
};