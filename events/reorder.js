const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	async execute(newMessage) {
        console.log("Test ")
	
        let message = newMessage.content;
        console.log(message);
        const temp = true; // temp variable in place of an eventual "include commands" setting (per-channel?)
        console.log("channel position is: " + MessageChannel.position());
		if (MessageChannel.position() == 0) {
			console.log("channel not moved because already at the top");
			return;
		}
        else if (message.includes("pk;" || "pk ;" || "pk!" || "pk !") && !temp) {
            console.log("message not counted because it's a pluralkit command!");
            return;
        }
        else {
            console.log("ill move the channel when i have the ability");
        }
	},
};