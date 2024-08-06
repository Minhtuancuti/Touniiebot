module.exports.config = {
  name: 'menu',
  version: '1.1.1',
  hasPermssion: 0,
  credits: 'DC-Nam mod by Vtuan',
  description: 'Xem danh sách nhóm lệnh, thông tin lệnh',
  commandCategory: 'Người Dùng',
  usages: '[...name commands|all]',
  cooldowns: 5,
  usePrefix: false,
  envConfig: {
    autoUnsend: {
      status: true,
      timeOut: 60 
    }
  }
};
const { autoUnsend = this.config.envConfig.autoUnsend } = global.config == undefined ? {}:global.config.menu == undefined ? {}: global.config.menu;
const { compareTwoStrings,findBestMatch } = require('string-similarity');
const { readFileSync,writeFileSync,existsSync } = require('fs-extra');
module.exports.run = async function({ api, event, args }) {
    const axios = require("axios");
    const url = 'https://i.imgur.com/NqIhyw1.jpeg';
const img = (await axios.get(url, { responseType: "stream"})).data;
    const moment = require("moment-timezone");
    const time = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || DD/MM/YYYY");
  
    const { sendMessage: send, unsendMessage: un } = api;
    const { threadID: tid, messageID: mid, senderID: sid } = event;
    const cmds = global.client.commands;

    if (args.length >= 1) {
      if (typeof cmds.get(args.join(' ')) == 'object') {
      const body = infoCmds(cmds.get(args.join(' ')).config);
      const msg = body;
        return send(body, tid, mid);
      } else {
          if (args[0] == 'all') {
              const data = cmds.values();
              var txt = '==== [ MENU ALL ] ===\n────────────────────\n',
              count = 0;
              for (const cmd of data) txt += `${++count}. ${cmd.config.name} | ${cmd.config.description}\n`;
              txt += `\n————————————————\n➩ Tự động gỡ tin nhắn sau: ${autoUnsend.timeOut}s`
              const msg = txt;
              send({body: msg, attachment: (img)}, tid, (a, b) => autoUnsend.status ?setTimeout(v1 => un(v1), 1000*autoUnsend.timeOut, b.messageID): '');
          } else {
              const cmdsValue = cmds.values();
              const arrayCmds= [];
              for (const cmd of cmdsValue) arrayCmds.push(cmd.config.name);
              const similarly = findBestMatch(args.join(' '), arrayCmds);
              if (similarly.bestMatch.rating >= 0.3) return send(` "${args.join(' ')}" là lệnh gần giống là "${similarly.bestMatch.target}" ?`, tid, mid);

          };
      };
  } else {
      const data = commandsGroup();
      var txt = '=== [ MENU COMMANDS ] ===\n────────────────────\n',count = 0;
      for (const {commandCategory,commandsName} of data) txt += `${++count}. ${commandCategory} || có ${commandsName.length} lệnh\n`;
      txt += `\n────────────────────\n╭───────╮\n     ${global.client.commands.size} lệnh\n╰───────╯\n➜ Time: ${time}\n➜ Reply từ 1 đến ${data.length} để chọn\n➜ Tự động gỡ tin nhắn sau: ${autoUnsend.timeOut}s\n➜ FB ADMIN: ${(!global.config.FACEBOOK_ADMIN) ?  "Thêm facebook admin ở config!" : global.config.FACEBOOK_ADMIN}`;
      const msg = txt;
      send({body: msg, attachment: (img)}, tid, (a, b) => {
          global.client.handleReply.push({name: this.config.name,messageID: b.messageID,author: sid,'case': 'infoGr',data});
          if (autoUnsend.status) setTimeout(v1 => un(v1), 1000*autoUnsend.timeOut, b.messageID);
      });
  };
};
module.exports.handleReply = async function({handleReply: $,api,event}) {
  const {sendMessage: send,unsendMessage: un} = api;
  const {threadID: tid,messageID: mid,senderID: sid,args} = event;
  const axios = require("axios");
    const url = 'https://i.imgur.com/jO5hbbk.jpeg';
const img = (await axios.get(url, { responseType: "stream"})).data;
  
  if (sid != $.author) {
      const msg = `⛔ Cút ra chỗ khác`;
      return send(msg, tid, mid);
  };
  switch ($.case) {
      case 'infoGr': {
          var data = $.data[(+args[0])-1];
          if (data == undefined) {
              const txt = `"${args[0]}" không nằm trong số thứ tự menu`;
              const msg = txt;
              return send(msg, tid, mid);
          };
          un($.messageID);
          var txt = '==『 ' +  data.commandCategory  + ' 』==\n────────────────────\n',
          count = 0;
          for (const name of data.commandsName) txt += `${++count}. ${name}\n`;
          txt += `────────────────────\n➜ Reply từ 1 đến ${data.commandsName.length} để chọn\n➜ Tự động gỡ tin nhắn sau: ${autoUnsend.timeOut}s\n➜ Dùng ${global.config.PREFIX}menu + tên lệnh nếu muốn xem chi tiết cách sử dụng lệnh`;
          const msg = txt;
          send({body: msg, attachment: (img)}, tid, (a, b) => {
              global.client.handleReply.push({
                  name: this.config.name,
                  messageID: b.messageID,
                  author: sid,
                  'case': 'infoCmds',
                  data: data.commandsName
              });
              if (autoUnsend.status) setTimeout(v1 => un(v1), 1000*autoUnsend.timeOut, b.messageID);
          });
      };
          break;
      case 'infoCmds': {
          var data = global.client.commands.get($.data[(+args[0])-1]);
          if (typeof data != 'object') {
              const txt = `⚠️ "${args[0]}" không nằm trong số thứ tự menu`;
              const msg = txt;
              return send(msg, tid, mid);
          };
          const {config = {}} = data || {};
          un($.messageID);
          const msg = infoCmds(config);
          send(msg,tid,mid);
      };
          break;
      default:
      }
  };
  function commandsGroup() {
      const array = [],
      cmds = global.client.commands.values();
      for (const cmd of cmds) {
          const {name, commandCategory} = cmd.config;
          const find = array.find(i => i.commandCategory == commandCategory)
          !find ? array.push({commandCategory,commandsName: [name]}): find.commandsName.push(name);
      };
      array.sort(sortCompare('commandsName'));
      return array;
  };
  function infoCmds(a) {
      return `[ INFO - COMMANDS ]\n======================\n|› 📔 Tên lệnh: ${a.name}\n|› 🌴 Phiên bản : ${a.version}\n|› 🔐 Quyền hạn : ${premssionTxt(a.hasPermssion)}\n|› 👤 Tác giả : ${a.credits}\n|› 🌾 Mô tả : ${a.description}\n|› 📎 Thuộc nhóm : ${a.commandCategory}\n|› 📝 Cách dùng : ${a.usages}\n|› ⏳ Thời gian chờ : ${a.cooldowns} giây\n`;
  };
  function premssionTxt(a) {
      return a == 0 ? 'Thành Viên': a == 1 ? 'Quản Trị Viên Nhóm': a == 2 ? 'Người Điều Hành': 'Admin';
  };
  function prefix(a) {
      const tidData = global.data.threadData.get(a) || {};
      return tidData.PREFIX || global.config.PREFIX;
  };
  function sortCompare(k) {
      return function(a, b) {
          return (a[k].length > b[k].length ? 1: a[k].length < b[k].length ? -1: 0)*-1;
      };
  };