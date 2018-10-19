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