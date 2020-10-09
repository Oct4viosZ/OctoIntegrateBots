const Discord = require('discord.js');

const bot = new Discord.Client();

const token = 'NzU2NzQ3OTAzMTc0ODM2Mjg0.X2WWZw.6bmfAuHgSdAAdbobN30jSPoh1R0';

bot.login(token)
bot.on('ready', () => {
    console.log('Online')
})

bot.on('message', msg => {

    if (msg.content === 'o que') {
        msg.reply('ainda não pronto')
    }

})