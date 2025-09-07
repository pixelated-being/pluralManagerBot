const { SlashCommandBuilder, MessageFlags, Collection } = require('discord.js');

// make bot not shift channels based on user's messages
// TODO: integrate Pluralkit/Myriad API later on to also ignore proxied messages

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ignoreuser')
		.setDescription("Don't acknowledge activity from my account"),
	async execute(interaction) {
		
		await interaction.reply({content:"Messages from your account won't be checked!", flags: MessageFlags.Ephemeral });
		console.log("user " + interaction.user + " is being ignored now!");
	},
};