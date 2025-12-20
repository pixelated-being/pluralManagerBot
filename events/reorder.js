const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	async execute(newMessage) {
        let message = newMessage.content;
        
        const temp = true; // temp variable in place of an eventual "include commands" setting (per-channel)
        
        const MessageChannel = newMessage.channel;

        const conditions = ["pk;", "pk!"];
        const isCommand = conditions.some(el => message.startsWith(el));
        
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
            console.log("message not counted because it's a pluralkit command!");
            return;
        } 
        else if(MessageChannel.type == 15 || MessageChannel.type == 11) {
            console.log("forums/threads cant be moved!")
            return;
        }
        else {
            console.log("channel shifted!");
            newMessage.channel.setPosition(0);
        }
	},
};  