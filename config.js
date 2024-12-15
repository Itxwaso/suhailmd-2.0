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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_25_12_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjIyLFxuICAgICAgICAzNixcbiAgICAgICAgNzksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTE1LFxuICAgICAgICA4MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDM3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNixcbiAgICAgICAgMTY5LFxuICAgICAgICA2NixcbiAgICAgICAgMTQyLFxuICAgICAgICA4NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI2LFxuICAgICAgICAyOCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTksXG4gICAgICAgIDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkyLFxuICAgICAgICAzMSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDUwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDgzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAzOSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgODQsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTc1LFxuICAgICAgICA0MixcbiAgICAgICAgOTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDk5LFxuICAgICAgICA1MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjcsXG4gICAgICAgIDkwLFxuICAgICAgICAxMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAzOCxcbiAgICAgICAgODcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDMxLFxuICAgICAgICA4MixcbiAgICAgICAgMTcwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjUwLFxuICAgICAgICA5MixcbiAgICAgICAgODcsXG4gICAgICAgIDYyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDYzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU0LFxuICAgICAgICA0NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM1LFxuICAgICAgICA2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA0MixcbiAgICAgICAgMTk5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI3LFxuICAgICAgICA4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDgsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTksXG4gICAgICAgIDk1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTUxLFxuICAgICAgICA3OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjksXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJxb3pTeHlPNW9NcFlZNTBtOE9mN2krRTZJVytqSDdPL052bHgzMzFLeFdRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJObzRSYmFQX1RXbVZiVVlHWF84T2VRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjJkNGUzOWE2LWJjYjUtNGExYi04MjgxLWJhYWIxYmUyZTlkMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMSxcbiAgICAgIDc5LFxuICAgICAgMjA3LFxuICAgICAgMTY1LFxuICAgICAgMjAxLFxuICAgICAgMTk4LFxuICAgICAgMTc3LFxuICAgICAgMjI3LFxuICAgICAgMjEsXG4gICAgICAyMDMsXG4gICAgICAxNCxcbiAgICAgIDE3MixcbiAgICAgIDI0MyxcbiAgICAgIDI1LFxuICAgICAgMTE1LFxuICAgICAgMTcsXG4gICAgICAzLFxuICAgICAgMTE2LFxuICAgICAgNjcsXG4gICAgICAxMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzEsXG4gICAgICAxODksXG4gICAgICAyLFxuICAgICAgOTAsXG4gICAgICAxNyxcbiAgICAgIDg2LFxuICAgICAgMTE5LFxuICAgICAgMjE1LFxuICAgICAgMTk0LFxuICAgICAgMjI3LFxuICAgICAgODksXG4gICAgICAxODUsXG4gICAgICAyMDgsXG4gICAgICAxMzksXG4gICAgICAyMTksXG4gICAgICA1OSxcbiAgICAgIDU5LFxuICAgICAgMzQsXG4gICAgICAyNDgsXG4gICAgICAxNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRFk1TFFWOTJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQ3MjgzMzQ2MzoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcItiv2KfYs9iq2KfZhiDZvtin2qkg2KrYsdqpXCIsXG4gICAgXCJsaWRcIjogXCIxNTMyMjMzOTQ1MDQ4MTY6MTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1MvOWxVUXR2TDF1Z1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJZT3g1N05VL2dvYTMyT3ErUWxsb0JHZ050WW1KTDBOTU1kNWpsb1BCamxNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkU1Mk9ZOUtqK0dqNjl5N1ZNRzhkTkRpd0xjZVZUWTFQUTkvUlZoTmc5TlRUdzAvb213RWFhbC9Wb0g3Ylo1WnBYT1hsdlg2eFVWaVJ2NnRhczF2K0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlNPNDcxL2l4ajdCMFJ5UUhBNlA3VUxWdFZrK1doRENLWHE5WDIveDJldWExYjJHSzBINEh2eG1rZWc0cFJDamhxRDh2YVl6R1JRVnpMNkhPS3ZNR0JnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQ3MjgzMzQ2MzoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0MTc5MTMwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSHcwXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIdzAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJLMHJyTzBiZ3RoZDBOYWoyZXBmTEVLUE9jL2xIcEd5VUxabUU1bUVocGhZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4MDE5OTM5NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI5MDk2NjY5MjI3XCJ9Igp9"  // PUT your SESSION_ID 


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
