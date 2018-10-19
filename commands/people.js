const Discord = require("discord.js");

module.exports.run = async (dead, message, args) => {
    let small = Math.floor(Math.random() *50 +10);
        let medium = Math.floor(Math.random() *100 +20);
        let large = Math.floor(Math.random() *250+50);
        if (!args[0]) {
            message.channel.send("please choose one of these choices `small` `medium` `large`");
        }
        if (args[0] === "small") {
            message.channel.send("Your small community has " + small + " people");
        }

        if (args[0] === "medium") {
            message.channel.send("Your medium community has " + medium + " people");
        }

        if (args[0] === "large") {
            message.channel.send("Your large community has " + large + " people");
        }
}