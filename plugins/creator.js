const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const OWNER = "it sends details of owner"

const GIT = "it sends links"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔😼POOCHA SER😼╗*\n           \n*⚜═POOCHA_SER═⚜*\n\n*owner ALINSHAN - http://Wa.me/+919383491460*\n* *\n🔰Youtube:- https://www.youtube.com/channel/UCIxhbCWYsvQn5W1KIjjl6dA*            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: ALINSHAN*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*\n💥═POOCHA SER OWNER ALINSHAN═💥*\n\n*💘 https://github.com/CYBER-DASHAMOOLAN/Poocha-Ser*\n*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

    

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'creator', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔😼POOCHA SER😼╗*\n           \n*⚜═POOCHA SER═⚜*\n\n*owner ALINSHAN - http://Wa.me/+919383491460*\n* *\n🔰Youtube: https://www.youtube.com/channel/UCIxhbCWYsvQn5W1KIjjl6dA*            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: ALINSHAN*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n💥═POOCHA SER Owner ALINSHAN═💥*\n\n*💘 https://github.com/CYBER-DASHAMOOLAN/Poocha-Ser*\n*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

