const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_00_12_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICA5NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTcsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxNixcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDU0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzksXG4gICAgICAgIDc2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDcwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDkxLFxuICAgICAgICAxODMsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNSxcbiAgICAgICAgODIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMixcbiAgICAgICAgNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTEwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA5NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA0NixcbiAgICAgICAgNDEsXG4gICAgICAgIDc2LFxuICAgICAgICA3MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzMsXG4gICAgICAgIDMyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjAyLFxuICAgICAgICA0NCxcbiAgICAgICAgNDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDUzLFxuICAgICAgICA5NixcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExLFxuICAgICAgICA0MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDk3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzLFxuICAgICAgICA4NixcbiAgICAgICAgOTMsXG4gICAgICAgIDQwLFxuICAgICAgICAxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExMixcbiAgICAgICAgNTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDk4LFxuICAgICAgICA1MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTIzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTkzLFxuICAgICAgICA2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAyLFxuICAgICAgICA2MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzksXG4gICAgICAgIDUwLFxuICAgICAgICA0NixcbiAgICAgICAgMTEwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJqRUVOVWtSU2ErY3gwK2NHY1M5VVozSmZUcG9kbHhkUyt3UTkwK1JwMWVVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQNkxTQXNwa1NBNkFUY2RPRVpNSVFRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg5MDhmOTgxLWY5MGYtNDIyNy1iZjE4LTZhZDU1YWRkNjhhYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTQsXG4gICAgICA0OCxcbiAgICAgIDk1LFxuICAgICAgNDEsXG4gICAgICAxNzQsXG4gICAgICA1NyxcbiAgICAgIDEzMyxcbiAgICAgIDEzMSxcbiAgICAgIDI5LFxuICAgICAgMTQ4LFxuICAgICAgMjI4LFxuICAgICAgMTEyLFxuICAgICAgMTU2LFxuICAgICAgNTEsXG4gICAgICAxMDIsXG4gICAgICA0OCxcbiAgICAgIDE4NCxcbiAgICAgIDgyLFxuICAgICAgNzAsXG4gICAgICAxOTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODQsXG4gICAgICAxOTIsXG4gICAgICAyMCxcbiAgICAgIDkyLFxuICAgICAgMTc3LFxuICAgICAgMjEyLFxuICAgICAgNTQsXG4gICAgICA0NyxcbiAgICAgIDIxMSxcbiAgICAgIDEzNSxcbiAgICAgIDEyNixcbiAgICAgIDI0LFxuICAgICAgMjQ3LFxuICAgICAgMTQxLFxuICAgICAgMjM2LFxuICAgICAgMjI3LFxuICAgICAgMTUxLFxuICAgICAgMTQ3LFxuICAgICAgMTAsXG4gICAgICA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkMxSzFEMjlGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0NzUwNTYwNzc6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1NTUyNTE4Njk3MzgwMToxNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPaWkwSklIRUxUdXRib0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkVPUStXZmRiZ1VkV04xQjZadis3Ni91MFZraW5WSkFYVEora1dGd1hTaTQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMjVjSFRvU3BTcFlZWG5wSXB3SzRESWlwaUJEb1ExbnZrR003bThvaHJWQ3JMTmdML3NtcGRuQU1mZjZlM2lNZGFFdlA2VldCcWZwdno2OWpNMW1nQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiU01SWUFWSEMwMkpyVnNrNElmSGlXSzBXK1hqVERFNE9aZHYyMEI2NU96L2hDaUl2bGMrZzRMU0xibHd2V1JiVVdwanZLY1RNTmtXYkpFSUx5SmJsaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDc1MDU2MDc3OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzMTMwMDQwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUENvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQQ28uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJQbDlnNnc1Rjh4NlhEZW5ZQ1p0WWgwcXRwYnBLdm56bHE5YkEyalNoUlVjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MTgxMTIwOTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjg0ODY2ODQ2MDdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
