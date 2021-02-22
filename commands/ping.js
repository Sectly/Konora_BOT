require('dotenv').config();
exports.run = async (client, message, args) => {
    return message.channel.send({embed: {
        color: 7948427,
        description: `**Ping:**\n`
        + `\`${process.env.ping}\` - Bots Ping.\n`
        + `\`Pong!\` Hehe...`,
        author: {
            name: message.author.tag,
            icon_url: message.author.displayAvatarURL()
        }
    }});
}