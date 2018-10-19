const Discord = require("discord.js");

module.exports.run = async (dead, message, args) => {
    let small = Math.floor(Math.random() *150 +50);
        let medium = Math.floor(Math.random() *300 +100);
        let large = Math.floor(Math.random() *650 +200);
        if (!args[0]) {
            message.channel.send("please choose one of these choices `small` `medium` `large`");
        }
        if (args[0] === "small") {
            message.channel.send("Your small community has " + small + " supplies");
        }

        if (args[0] === "medium") {
            message.channel.send("Your medium community has " + medium + " supplies");
        }

        if (args[0] === "large") {
            message.channel.send("Your large community has " + large + " supplies");
        }
}