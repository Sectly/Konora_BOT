require('dotenv').config();
exports.run = async (client, message, args) => {
    return message.channel.send({embed: {
        color: 7948427,
        description: `**Working On This Please Wait!**\n`
        + `\`WIP\` - WIP.\n`
        + `\`WIP\` - WIP.`,
        author: {
            name: message.author.tag,
            icon_url: message.author.displayAvatarURL()
        }
    }});
}