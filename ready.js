const rpc = require("discordrpcgenerator");




let NAME = "Zero Two"
let DETAILS = "Zero Two Communauté"
let STATE = "Rejoint notre discord pour le RPC"
let URL = "https://twitch.tv/kurumiproject"
let APPID = "1119181889429844039"
let LARGEIMG = "zrl"
let LARGETEXT = "Zero Two X Dialz"
let SMALLIMG = "zrs"
let SMALLTEXT = "Zero Two X HouzV1"



module.exports = async (client) => {
  const small = await rpc.getRpcImage
  (APPID, SMALLIMG);//1°setApllicationId, 2°Name(Key)smallimage


rpc.getRpcImage
(APPID, LARGEIMG)//1°setApplicationId, 2°Name(Key)largeimage
.then(large => {


  let presence = new rpc.Rpc()

      .setName(NAME)
      .setDetails(DETAILS)
      .setState(STATE)


      .setUrl(URL)
      .setType("STREAMING")
      .setApplicationId(APPID)

      .setAssetsLargeImage(large.id)
      .setAssetsLargeText(LARGETEXT)

      .setAssetsSmallImage(small.id)
      .setAssetsSmallText(SMALLTEXT)



        client.user.setStatus("dnd");
  
   console.log(presence.toDiscord())


client.user.setPresence(presence.toDiscord()).catch(console.error);  
  
    })

console.log("Rpc is ready")
  
}
