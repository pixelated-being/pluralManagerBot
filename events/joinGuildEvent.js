const { Events } = require('discord.js');

module.exports = {
    name: Events.guildCreate,
    async execute(newGuild) {
        let guildID = newGuild.guild;
        
    },
};