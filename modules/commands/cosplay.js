module.exports.config = {
	name: "cos",
	version: "beta",
	hasPermssion: 0,
	credits: "Cuong",
	description: "code lại dựa trên mdl của ai đó",
	commandCategory: "no prefix",
	usages: "",
	cooldowns: 0,
	denpendencies: {
		"fs-extra": "",
		"request": ""
	}

};
module.exports.handleEvent = async ({ api, event, Threads }) => {
	if (event.body.indexOf("Videocos")==0 || (event.body.indexOf("Vidcos")==0) || event.body.indexOf("Cos")==0 ||
event.body.indexOf("Cosplay")==0 ||
event.body.indexOf("Vdcos")==0 ||
event.body.indexOf("Cốt")==0) {
		const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];

		 api.sendMessage("muốn xem cốt à chờ xíu\n🔥🔥🔥", event.threadID, event.messageID);

		var link = [
"https://i.imgur.com/OjNFYzx.mp4",
"https://i.imgur.com/KBwQylS.mp4",
"https://i.imgur.com/uDvL7N9.mp4",
"https://i.imgur.com/ExgKNAX.mp4",
"https://i.imgur.com/IN8HXBt.mp4",
"https://i.imgur.com/osM3eWD.mp4",
"https://i.imgur.com/cOQyt6k.mp4",
"https://i.imgur.com/vmNLA5M.mp4",
"https://i.imgur.com/oJQ0BQF.mp4",
"https://i.imgur.com/0SQnk77.mp4",
"https://i.imgur.com/0YFQAey.mp4",
"https://i.imgur.com/n8kL9uI.mp4",
"https://i.imgur.com/mjYaqqP.mp4",
"https://i.imgur.com/OaabY1P.mp4",
"https://i.imgur.com/6g8IMpc.mp4",
"https://i.imgur.com/3DZofkA.mp4",
"https://i.imgur.com/9HeLNue.mp4",
"https://i.imgur.com/Povo7aG.mp4",
"https://i.imgur.com/3OSRb1N.mp4",
"https://i.imgur.com/hF716fC.mp4",
"https://i.imgur.com/FdOpSWr.mp4",
"https://i.imgur.com/ANDGPv4.mp4",
"https://i.imgur.com/stcqzUk.mp4",
"https://i.imgur.com/DU0xNJ5.mp4",
"https://i.imgur.com/Bqx2xGM.mp4",
"https://i.imgur.com/kxih52q.mp4",
"https://i.imgur.com/SH08EvT.mp4",
"https://i.imgur.com/2VyifK2.mp4",
"https://i.imgur.com/cMotfW4.mp4",
"https://i.imgur.com/hMsIAvn.mp4",
"https://i.imgur.com/JUG7s5Q.mp4",
"https://i.imgur.com/RymLgq8.mp4",
"https://i.imgur.com/vEcFQwc.mp4",
"https://i.imgur.com/YdAf6O3.mp4",
"https://i.imgur.com/mX8kJl6.mp4",
"https://i.imgur.com/IJUnurS.mp4",
"https://i.imgur.com/HmcPhLC.mp4",
"https://i.imgur.com/1tgx5tI.mp4",
"https://i.imgur.com/0tnC4LM.mp4",
"https://i.imgur.com/1mSpgCN.mp4",
"https://i.imgur.com/k3NeFB9.mp4",
"https://i.imgur.com/qK1hoD5.mp4",
"https://i.imgur.com/mq6brRE.mp4",
"https://i.imgur.com/0Rwb0w1.mp4",
"https://i.imgur.com/t8XxwRF.mp4",
"https://i.imgur.com/gvjAKox.mp4",
"https://i.imgur.com/BuA4QYr.mp4",
"https://i.imgur.com/m9YNIHq.mp4",
"https://i.imgur.com/AhDC7kF.mp4",
"https://i.imgur.com/sWZ43Bg.mp4",
"https://i.imgur.com/vAaPP6H.mp4",
"https://i.imgur.com/gEzIoUP.mp4",
"https://i.imgur.com/CTkFYTx.mp4",
"https://i.imgur.com/qAgyEC4.mp4",
"https://i.imgur.com/9YQhhfS.mp4",
"https://i.imgur.com/Ju9hhwy.mp4",
"https://i.imgur.com/T1zFUDN.mp4",
"https://i.imgur.com/T1zFUDN.mp4",
"https://i.imgur.com/T9GaTU3.mp4",
"https://i.imgur.com/f580rSJ.mp4",
"https://i.imgur.com/NHo7o7R.mp4",
"https://i.imgur.com/Jj4aPnC.mp4",
"https://i.imgur.com/0V5qOD5.mp4",
"https://i.imgur.com/Br6UDmo.mp4",
"https://i.imgur.com/ZQnTffL.mp4",
"https://i.imgur.com/gEXyL6i.mp4",
"https://i.imgur.com/qAhBbCm.mp4",
"https://i.imgur.com/vlcBcu3.mp4",
"https://i.imgur.com/nXkl8da.mp4",
"https://i.imgur.com/ClOM9jX.mp4",
"https://i.imgur.com/tTJ8LF9.mp4",
"https://i.imgur.com/obYCw6h.mp4",
"https://i.imgur.com/79HBhJZ.mp4",
"https://i.imgur.com/u5Cjk73.mp4",
"https://i.imgur.com/gdh956I.mp4",
			"https://i.imgur.com/z58JELr.mp4",
			"https://i.imgur.com/AA6Nrq3.mp4",
			"https://i.imgur.com/QEVvzA2.mp4",
			"https://i.imgur.com/GXiK3Y2.mp4",
			"https://i.imgur.com/34hAXao.mp4",
			"https://i.imgur.com/1ZAj6py.mp4",
			"https://i.imgur.com/TlL673H.mp4",
			"https://i.imgur.com/q5dSIrG.mp4",
			"https://i.imgur.com/n5i2GtW.mp4",
			"https://i.imgur.com/s45uave.mp4",
			"https://i.imgur.com/6uSkKKD.mp4",
"https://i.imgur.com/JDpNNWH.mp4",
			"https://i.imgur.com/fBUfK03.mp4",
			"https://i.imgur.com/YlKsx7m.mp4",
			"https://i.imgur.com/CZRpJQh.mp4",
"https://i.imgur.com/wrPOGGr.mp4",
			"https://i.imgur.com/KERLp2a.mp4",
			"https://i.imgur.com/zzWFXVI.mp4",
			"https://i.imgur.com/wbDqsvr.mp4",
"https://i.imgur.com/olRloSa.mp4",
			"https://i.imgur.com/gPC4rFn.mp4",
			"https://i.imgur.com/ljk89Pt.mp4",
			"https://i.imgur.com/2InNBNK.mp4",
			"https://i.imgur.com/AV4Sh89.mp4",
			"https://i.imgur.com/ljk89Pt.mp4",
			"https://i.imgur.com/AV4Sh89.mp4",
			"https://i.imgur.com/UjernqO.mp4",
			"https://i.imgur.com/vnNXWQV.mp4",
			"https://i.imgur.com/dWpEdkY.mp4",
			"https://i.imgur.com/UjernqO.mp4",
			"https://i.imgur.com/95MvKm3.mp4",
			"https://i.imgur.com/zcjz18e.mp4",
			"https://i.imgur.com/R8SEa8N.mp4",
			"https://i.imgur.com/Bu3IHYj.mp4",
"https://i.imgur.com/ZOoAJ2b.mp4"
					];
		 var callback = () => api.sendMessage({body:` 🔥video cốt của bạn nè 🔥 `,attachment: fs.createReadStream(__dirname + "/cache/1.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.mp4"), event.messageID);  
			return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.mp4")).on("close",() => callback());
}
																																																				 }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

	 };