const { Events } = require('discord.js');

client.on(Events.messageCreate, async message => {
        if(client.ignoreUsers.hasAll(interaction.user.id, interaction.guildId)) {
            return;
        }
        else {
            // placeholder for testing stuff, will update accordingly
            await interaction.reply('channel will be moved!');
        }
});