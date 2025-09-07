const { Events } = require('discord.js');

module.exports = {
	name: Events.messageCreate,
	async execute(newMessage) {
		if (newMessage.isChatInputCommand()) return;

        // this is just to process/use the command type
		// const command = interaction.client.commands.get(interaction.commandName);
        const message = newMessage.content;
        console.log(message);
        const temp = true; // temp variable in place of an eventual "include commands" setting (per-channel?)

		if (MessageChannel.position == 0) {
			console.log("channel not moved because already at the top");
			return;
		}
        else if (message.includes("pk;" || "pk ;" || "pk!" || "pk !") && !temp) {
            console.log("message not counted because it's a pluralkit command!");
            return;
        }
        else {
            console.log("ill move the channel later...");
        }
	},
};