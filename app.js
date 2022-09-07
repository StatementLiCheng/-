// app.js
// import GoEasy from './goeasy-2.0.13.min';
import GoEasy from './static/lib/goeasy-2.0.12.min';
var common = require("./utils/common")
var User =""

App({
  onLaunch() {
   
    // async function appUser(){
    //    const pro = ()=>common.getFriendsList()
    //    User = await pro()
    //    //console.log("a",a)
    // }
    // appUser()
    // console.log("User",User)
    // let a = pro.then((res)=>{
    //   User = res
    //   wx.setStorageSync("User",User)

    // })
    // var b = wx.getStorageSync('User')
    // console.log('b',b)


    // // 展示本地存储能力
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // // 登录
    // wx.login({
    //     success: res => {
    //       // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //     }
    //   }),

      // goEasy
      wx.goEasy = GoEasy.getInstance({
        host:'hangzhou.goeasy.io',//应用所在的区域地址: [hangzhou.goeasy.io, 新加坡暂不支持IM，敬请期待]
        appkey: 'BC-9277594366884963a21bf004ad5332b0',// common key
        modules:["im"]
    });
    wx.GoEasy = GoEasy;

  },

  formatDate: function(time) {
    const date = new Date(time);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    return [month, day].map(this.formatNumber).join('-') + ' ' + [hour, minute].map(this.formatNumber).join(':');
},
  formatNumber: function (n) {
    n = n.toString();
    return n[1] ? n : '0' + n;
  },

  
  globalData: {
    service: null,
    userInfo: null,
    user:null,
    // user:wx.getStorageSync('User')
    // groups:null
    
  }

})