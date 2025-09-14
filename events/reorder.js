const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	async execute(newMessage) {
        let message = newMessage.content;
        
        const temp = true; // temp variable in place of an eventual "include commands" setting (per-channel?)
        
        const MessageChannel = newMessage.channel; // You forgot to define MessageChannel

        const conditions = ["pk;", "pk ;", "pk!", "pk !"];
        const isCommand = conditions.some(el => message.includes(el));
        
        console.log("channel position is: " + MessageChannel.position);
		if(newMessage.author.bot && !newMessage.webhookId) {
            console.log("ignoring bot message!");
            console.log("captain hook's number is: " + newMessage.webhookId);
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
        else if (isCommand && temp) {
            console.log("message not counted because it's a pluralkit command!"); // i dont think this works yet but idc right now
            return;
        }
        else {
            console.log("channel shifted!");
            newMessage.channel.setPosition(0);
        }
	},
};  