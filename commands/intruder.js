const Discord = require("discord.js");

module.exports.run = async (dead, message, args) => {
    const intruder = [
        'small gang',
        'medium gang',
        'large gang',
    ];
    message.channel.send(`${intruder[~~(Math.random() * intruder.length)]}`);
}