module.exports.config = {
  name: "vdsex",
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
  if (event.body.indexOf("Sex")==0 || (event.body.indexOf("sex")==0) || 
event.body.indexOf("sẽ")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://i.imgur.com/0dc1sgt.mp4",
      "https://i.imgur.com/IxuxwUL.mp4",
      "https://i.imgur.com/fTrxYYu.mp4",
      "https://i.imgur.com/0dc1sgt.mp4",
      "https://i.imgur.com/WHuWqkn.mp4",
      "https://i.imgur.com/1nl7tFO.mp4",
      "https://i.imgur.com/H5jpSAO.mp4",
      "https://i.imgur.com/U3y67Dj.mp4",
      "https://i.imgur.com/WHuWqkn.mp4",
      "https://i.imgur.com/j2YT5Jn.mp4",
      "https://i.imgur.com/kJWV8uI.mp4",
      "https://i.imgur.com/Wu6Vq4F.mp4",
      "https://i.imgur.com/hB7EUWd.mp4",
      "https://i.imgur.com/lvLW12l.mp4",
      "https://i.imgur.com/FbPTvNO.mp4",
      "https://i.imgur.com/RDY7yQC.mp4",
      "https://i.imgur.com/MBEikW1.mp4",
      "https://i.imgur.com/fYa6ObQ.mp4",
      "https://i.imgur.com/dUQP0jS.mp4",
      "https://i.imgur.com/ME6kPAR.mp4",
      "https://i.imgur.com/fTrxYYu.mp4",
      "https://i.imgur.com/FbPTvNO.mp4",
      "https://i.imgur.com/yU7srOD.mp4",
      "https://i.imgur.com/1kzUVvL.mp4",
      "https://i.imgur.com/j2YT5Jn.mp4",
      "https://i.imgur.com/IxuxwUL.mp4",
      "https://i.imgur.com/vN4O25E.mp4",
      "https://i.imgur.com/1nl7tFO.mp4",
      "https://i.imgur.com/fTrxYYu.mp4",
      "https://i.imgur.com/WHuWqkn.mp4",
      "https://i.imgur.com/lyBMJ1O.mp4",
          ];
     var callback = () => api.sendMessage({body:`𝘃𝗶𝗱𝗲𝗼 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 đ𝗮̂𝘆 ❤\ndm thk dâm ô `,attachment: fs.createReadStream(__dirname + "/cache/1.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.mp4"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };