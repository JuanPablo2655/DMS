const Discord = require("discord.js");

module.exports.run = async (dead, message, args) => {
    const answers = [
        '1',
        '2',
        '3',
        '4',
        '5'
    ];

    message.channel.send(`${answers[~~(Math.random() * answers.length)]}`);
}

exports.conf = {
    aliases: ['choose', 'pick']
}

exports.help = {
    name: "Pick",
    description: "picks someone.",
    usage: "pick"
}