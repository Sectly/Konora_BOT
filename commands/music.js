require('dotenv').config();
exports.run = async (client, message, args) => {
    return message.channel.send({embed: {
        color: 7948427,
        description: `**Music**\n`
        + `\`Link 1:\` https://www.youtube.com/watch?v=p1et8ZrzYYQ&ab_channel=Weebl%27sStuff\n`
        + `\`Link 2:\` https://www.youtube.com/watch?v=COhERcPtYIQ&ab_channel=GoblinsFromMars\n`
        + `\`Link 3:\` Add Your Own! (DM: Sectly_playz#5452)\n`
        + `\`Link 4:\` Add Your Own! (DM: Sectly_playz#5452)\n`
        + `\`Read:\` Its just a link to some songs it won't play what you want.`,
        author: {
            name: message.author.tag,
            icon_url: message.author.displayAvatarURL()
        }
    }});
}