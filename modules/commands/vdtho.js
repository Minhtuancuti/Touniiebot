module.exports.config = {
  name: "cos",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Vihoo",
  description: "",
  commandCategory: "no prefix",
  usages: "",
  cooldowns: 0,
  denpendencies: {
    "fs-extra": "",
    "request": ""
  }

};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("Tho")==0 || (event.body.indexOf("tho")==0) || event.body.indexOf("thơ")==0 ||
event.body.indexOf("Thơ tu tiên")==0 ||
event.body.indexOf("Vd thơ")==0 ||
event.body.indexOf("Thơ")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];

     api.sendMessage(" ", event.threadID, event.messageID);

    var link = [
"https://i.imgur.com/09O80tf.mp4",
"https://i.imgur.com/tDYIU89.mp4",
"https://i.imgur.com/NNZHAU7.mp4",
"https://i.imgur.com/OeLRHYP.mp4",
"https://i.imgur.com/o3yflbN.mp4",
"https://i.imgur.com/VxLKAXA.mp4",
"https://i.imgur.com/UBQbtKh.mp4",
"https://i.imgur.com/ctIQwdL.mp4",
"https://i.imgur.com/6DGGtA4.mp4",
"https://i.imgur.com/7sJbojg.mp4",
"https://i.imgur.com/izSIYuR.mp4",
"https://i.imgur.com/apijhVT.mp4",
"https://i.imgur.com/SiIIVgs.mp4",
"https://i.imgur.com/ADaaBSc.mp4",
"https://i.imgur.com/TgpzsOn.mp4",
"https://i.imgur.com/imGvmHA.mp4"
          ];
     var callback = () => api.sendMessage({body:` ❤️video về thơ của bạn nè❤️  `,attachment: fs.createReadStream(__dirname + "/cache/1.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.mp4"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };