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
  if (event.body.indexOf("Vdhaugai")==0 || (event.body.indexOf("Gái")==0) || event.body.indexOf("Hg")==0 ||
event.body.indexOf("Hầu")==0 ||
event.body.indexOf("Hầu gái")==0 ||
event.body.indexOf("Haugai")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];

     api.sendMessage("muốn xem hầu gái à chờ xíu\n❤️❤️❤️❤️", event.threadID, event.messageID);

    var link = [
      "https://i.imgur.com/98r9Y2u.mp4",
      "https://i.imgur.com/dWPMDwh.mp4",
      "https://i.imgur.com/TE6aHyS.mp4",
      "https://i.imgur.com/XFhCKPF.mp4",
      "https://i.imgur.com/PQrkMOh.mp4",
"https://i.imgur.com/pSbh9GE.mp4",
      "https://i.imgur.com/sui8Ilr.mp4",
      "https://i.imgur.com/QoK0OEA.mp4",
      "https://i.imgur.com/oDrhZVX.mp4",
      
"https://i.imgur.com/IFlGwkq.mp4",
      "https://i.imgur.com/MsbMGrP.mp4",
      "https://i.imgur.com/U4g92k8.mp4",
      "https://i.imgur.com/ZOoAJ2b.mp4",
      "https://i.imgur.com/XuBZ5ur.mp4",
      "https://i.imgur.com/MeyXvjA.mp4"
      
          ];
     var callback = () => api.sendMessage({body:` ❤️video hầu gái của bạn nè❤️  `,attachment: fs.createReadStream(__dirname + "/cache/1.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.mp4"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };