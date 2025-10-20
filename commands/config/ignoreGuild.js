const { SlashCommandBuilder, MessageFlags, Collection } = require('discord.js');

// make bot not shift channels based on user's messages
// TODO: integrate Pluralkit/Myriad API later on to also ignore proxied messages

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ignoreguild')
		.setDescription("Don't reorder channels in this guild."),
	async execute(interaction) {
		await interaction.reply({content:"Channels won't be reordered in this server!"});
		console.log("ignore command run for guild " + interaction.guild);
	},
};