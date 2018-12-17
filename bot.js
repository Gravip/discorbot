const Discord = require('discord.js');
const client = new Discord.Client();
const CC = require('./command_create.js');
const Command = CC.Command;




var Commandss = new CC.Commands();
var fs = require("fs");

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith("." + str);
}

function pluck(array) {
    return array.map(function(item) { return item["name"]; });
}

function hasRole(mem, role)
{
    if (pluck(mem.roles).includes(role))
    {
        return true;
    }
    else
    {
        return false;
    }
}


client.on('message', message => {
 if(message.channel.parent.name.includes("Media / News")) 
 {

         var ch = client.guilds.get("524167159128129537").channels.find("name", message.channel.name)
       
        client.guilds.get("524167159128129537").channels.get(ch.id).send(message.content) 
 }
 if(message.channel.parent.name.includes("Premium Bot")) 
 {
    var ch = client.guilds.get("524167159128129537").channels.find("name", message.channel.name)
       
        client.guilds.get("524167159128129537").channels.get(ch.id).send(message.content) 
 }
 if(message.channel.parent.name.includes("premium channels"))
 {
    var ch = client.guilds.get("524167159128129537").channels.find("name", message.channel.name)
       
    client.guilds.get("524167159128129537").channels.get(ch.id).send(message.content) 
 }
  });

client.login(process.env.BOT_TOKEN);



