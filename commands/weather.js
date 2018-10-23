const Discord = require("discord.js");

module.exports.run = async (dead, message, args) => {
    const weather = [
        'rainy',
        'windy',
        'cloudy',
        'sunny',
    ];
    message.channel.send(`${weather[~~(Math.random() * weather.length)]}`);
}

exports.conf = {
    aliases: ['weather']
}

exports.help = {
    name: "Weather",
    description: "determine weather.",
    usage: "weather"
}