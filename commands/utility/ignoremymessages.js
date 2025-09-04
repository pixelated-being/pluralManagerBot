const { SlashCommandBuilder } = require('discord.js');

// make bot not shift channels based on user's messages
// TODO: integrate Pluralkit/Myriad API later on to also ignore proxied messages

module.exports = {
	data: new SlashCommandBuilder()
		.setName('Disable activity check')
		.setDescription("Don't acknowledge activity from my account"),
	async execute(interaction) {
		// add user ID and guild ID to collection client.ignoreUsers
		await interaction.reply({content:"Messages from your account won't be checked!", flags: MessageFlags.Ephemeral });
	},
};