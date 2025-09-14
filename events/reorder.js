const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	async execute(newMessage) {
        let message = newMessage.content;
        
        const temp = true; // temp variable in place of an eventual "include commands" setting (per-channel?)
        
        const MessageChannel = newMessage.channel; // You forgot to define MessageChannel
        
        console.log("channel position is: " + MessageChannel.position);
		if(newMessage.author.bot && !newMessage.webhookID) {
            console.log("ignoring bot message!");
            console.log("captain hook's number is: " + newMessage.webhookID);
            return;
        }
        else if (MessageChannel.position == 0) {
			console.log("channel not moved because already at the top");
			return;
		}
        else if (false) { // this is eventually gonna include the user ignore database thing... eventually...
            console.log("advancement made: how did we get here?");
            return;
        }
        else if (message.includes("pk;" || "pk ;" || "pk!" || "pk !") && temp) {
            console.log("message not counted because it's a pluralkit command!");
            return;
        }
        else {
            console.log("channel shifted!");
            newMessage.channel.setPosition(0);
        }
	},
};