const Discord = require("discord.js");

module.exports.run = async (dead, message, args) => {
    const horde = [
        'extra small',
        'small',
        'medium',
        'big',
        'extra big',
    ];
    message.channel.send(`${horde[~~(Math.random() * horde.length)]}`);
}

exports.conf = {
    aliases: []
}

exports.help = {
    name: "Horde",
    description: "determine horde size.",
    usage: "horde"
}