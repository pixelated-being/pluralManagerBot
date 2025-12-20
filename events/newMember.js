const { Events, PermissionsBitField } = require('discord.js');

const defaultAdds = [
    "466378653216014359", // PluralKit
    "1341869009989271632", // Plural DM Manager
]

// add a channel for any new member
module.exports = {
    name: Events.GuildMemberAdd,
    async execute(member) {
        console.log("WOAH A NEW PERSON!");
        if(true) {
            // true will eventually refer to the setting of whether the bot should make a new chat for added users. also going to make sure the added person isnt a bot... eventually.
            console.log("let's make a channel");
            member.guild.channels.create ({
                name: member.user.username,
                reason: "new friend!",
                permissionOverwrites: [
                    {
                        id: member.guild.id,
                        deny: [ PermissionsBitField.Flags.ViewChannel ]
                    },
                    { 
                        id: member.user.id,
                        allow: [ PermissionsBitField.Flags.ViewChannel ]
                    },
                    ...defaultAdds.map(id => ({
                        id: id, // Jess added this, everyone thank Jess for saving the day
                        allow: [ PermissionsBitField.Flags.ViewChannel ]
                    }))
                ]
            });
            return;
        }
    },
}