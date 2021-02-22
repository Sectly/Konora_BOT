require('dotenv').config();
exports.run = async (client, message, args) => {
    return message.channel.send({embed: {
        color: 7948427,
        description: `**Bot's Info:**\n`
        + `\`Bot Version:\` 4.4.8.1.\n`
        + `\`Name:\` Konora_BOT.\n`
        + `\`Purpose:\` Group/Discord Ranking & Loging Rank Data.\n`
        + `\`Commands:\` Use ?help for a list of commands.\n`
        + `\`Prefix:\` ${process.env.prefix}.\n`
        + `\`Servers:\` ${client.guilds.cache.size}.\n`
        + `\`Channels:\` ${client.channels.cache.size}.\n`
        + `\`Host:\` Discord: Sectly_playz#5452, Roblox: 27st3.`,
        author: {
            name: message.author.tag,
            icon_url: message.author.displayAvatarURL()
        }
    }});
}