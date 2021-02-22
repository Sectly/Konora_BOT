require('dotenv').config();
exports.run = async (client, message, args) => {
    return message.channel.send({embed: {
        color: 7948427,
        description: `**Application:**\n`
        + `\`Application Link:\` ${process.env.applylink}\n`
        + `\`Application Info:\` HR+ Application, Remember to use grammar!`,
        author: {
            name: message.author.tag,
            icon_url: message.author.displayAvatarURL()
        }
    }});
}