const { Events } = require('discord.js');

// add a channel for any new member
module.exports = {
    name: Events.GuildMemberAdd,
    async execute(member) {
        console.log("WOAH A NEW PERSON!");
        if(true) {
            // true will eventually refer to the setting of whether the bot should make a new chat for added users. also going to make sure the added person isnt a bot... eventually.
            console.log("let's make a channel");
            guild.channels.create ({
                name: member.user.username,
                reason: "new friend!",
                type: ChannelType.GuildText,
                permissionOverwrites: [
                    {
                        id: guild.roles.everyone, 
                        deny: [ PermissionsBitField.Flags.ViewChannel ]
                    },
                    { 
                        id: member.user.id,
                        allow: [ PermissionsBitField.Flags.ViewChannel ]
                    }
                ]
            });
            return;
        }
    },
}