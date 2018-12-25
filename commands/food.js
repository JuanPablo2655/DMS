const Discord = require("discord.js");

module.exports.run = async (dead, message, args) => {
    let small = Math.floor(Math.random() * 100 + 50);
    let medium = Math.floor(Math.random() * 250 + 100);
    let large = Math.floor(Math.random() * 500 + 200);
    if (!args[0]) {
        message.channel.send("please choose one of these choices `small` `medium` `large`");
    } else if (args[0] === "small") {
        message.channel.send("Your small community has " + small + " food items");
    } else if (args[0] === "medium") {
        message.channel.send("Your medium community has " + medium + " food items");
    } else if (args[0] === "large") {
        message.channel.send("Your large community has " + large + " food items");
    }
}

exports.conf = {
    aliases: ['food']
}

exports.help = {
    name: "food",
    description: "determine food amount.",
    usage: "food [small|medium|large]"
}