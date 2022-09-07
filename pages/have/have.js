// pages/index/index.js

function getRandomColor() {
  let rbg = []
  for (let i = 0; i < 3; i++) {
    //Math.random()返回(0,1)区间的数字，乘以256返回(0,256)之间的数字，数字为浮点数
    //Math.floor(x),返回小于等于x的最大整数
    //Math.floor((Math.random()*256))表示随机获取0到255之间的任意整数
    //扩展：获取60到99之间的整数
    //下限数字+Math.floor(Math.random()*(上限-下限数字+1))
    //toString(16)转换为字符串并且以16进制数字显示
    let color = (Math.floor(Math.random() * 256)).toString(16);
    //使用条件表达式，如果颜色的长度等于1，例如"1",就变为"01",否则为原有的颜色
    color = color.length == 1 ? ('0' + color) : color;
    //将获取到颜色添加到颜色列表中
    rbg.push(color) //循环结束后，rgb的值格式为["01","77","df"]
  }
  return "#" + rbg.join(""); //#+"0177df"->"#0177df",将颜色值作为返回值
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabCur: 0,
    couter: 0,
    tabs: [{
        name: "招聘会",
        id: 0
      },
      {
        name: "推荐",
        id: 1
      },
      {
        name: "好文",
        id: 2
      },
      {
        name: "等你来答",
        id: 3
      },
    ],
    news: {
      text: "近日支付宝红包挺赚钱的，带着利益借此打广告。人传人，要如何让别人扫你的码。因此这是一种销售方式，如何把你的二维码给别人。在这期间如何获得收益。"
    },
    array: [{
        id: 0,
        img: "../../images/have/人事女.png",
        name: "何文峰",
        position: "职位职位"
      },
      {
        id: 1,
        img: "../../images/have/人事男.png",
        name: "何文峰",
        position: "职位职位"
      },
      {
        id: 2,
        img: "../../images/have/人事女.png",
        name: "何文峰",
        position: "职位职位"
      }
    ],
    tuijiantop: [{
        id: 0,
        img: "../../images/have/公司啊.png",
        name: "公司"
      },
      {
        id: 1,
        img: "../../images/have/学生圈.png",
        name: "学生圈"
      },
      {
        id: 2,
        img: "../../images/have/今日热点.png",
        name: "今日热榜"
      },
      {
        id: 3,
        img: "../../images/have/入行指南.png",
        name: "入行指南"
      },
      {
        id: 4,
        img: "../../images/have/职测.png",
        name: "职测"
      },
      {
        id: 5,
        img: "../../images/have/职场.png",
        name: "职场"
      }
    ],
    tuijianmiddle: [{
        id: 0,
        img: "../../images/have/人事女.png",
        name: "李小姐",
        position: "HR.公司",
        text: "应届毕业生没有工作经历，简历应该怎么写？ 90%的应届生都是零经验，并不代表就写不好建立，拿不到好的offer"
      },
      {
        id: 1,
        img: "../../images/have/人事男.png",
        name: "王先生",
        position: "HR.公司",
        text: `疫情影响之下，公众对于移动互联网服务的依赖程度进一步加深，海量个人信息被收集、存储和使用，数据泄露和个人隐私保护问题变得更加严峻，用户信息安全成为热点议题。`
      },
      {
        id: 2,
        img: "../../images/have/人事男.png",
        name: "刘先生",
        position: "HR.公司",
        text: `中国式回答很微妙：
      凡是有“您回家等通知吧！”就说明你被淘汰了！
      如果有说：“我们主管副总周五回来，您到时候再来一下”说明人事这关过了。`
      },
      {
        id: 3,
        img: "../../images/have/人事女.png",
        name: "路女士",
        position: "HR.公司",
        text: `尽量不要裸辞。骑驴找马一般是更好的选择。相对于骑驴找马，裸辞的优点是：能够密集地进行面试，尤其是到外地面试。`
      }
    ],
    haowen: [{
        id: 0,
        title: "面试被问离职原因，千万别乱说",
        zuozhe: "ZoeYz",
        text: "找工作时，第一印象很重要，所以回答问题不能不过脑子。",
        src: "../../images/have/textone.png",
        read: 84616,
        pinglun: 76,
        shoucang: 694
      },
      {
        id: 1,
        title: "一段代码带你论证JS基础",
        zuozhe: "前端人",
        text: "在写业务代码的时候，要尽量去避免声明变量命名冲突的情况。",
        src: "../../images/have/texttwo.png",
        read: 235,
        pinglun: 7,
        shoucang: 6
      },
      {
        id: 2,
        title: "网络设备传输文件的3种方法",
        zuozhe: "网络工程师笔记",
        text: "使用put命令将文件上传到FTPServer(pc),或使用get命令。",
        src: "../../images/have/textthree.png",
        read: 84616,
        pinglun: 76,
        shoucang: 694
      },
      {
        id: 3,
        title: "20道Vue常见面试题,你会几道?(含答案)",
        zuozhe: "陈大鱼头",
        text: "尽量减少data中的数据，data中的数据都会增加getter和srtter",
        src: "../../images/have/textone.png",
        read: 55353,
        pinglun: 85,
        shoucang: 4680
      }
    ],
    wait: [{
        id: 1,
        title: "web前端的就职基础要求？",
        img: "../../images/have/3.jpg",
        name: "王贵峰",
        zhiwei: "会计 · 5年",
        number: "已经有了19人回答",
        btn: "写回答"
      },
      {
        id: 2,
        title: "css（层叠样式表）的工作原理是什么？",
        img: "../../images/have/4.jpg",
        name: "庄华阳",
        zhiwei: "高级管理职位 · 6年",
        number: "已经有了16人回答",
        btn: "写回答"
      },
      {
        id: 3,
        title: "Js中,typeof返回的数据类型有哪儿些？",
        img: "../../images/have/5.jpg",
        name: "王新成",
        zhiwei: "前端开发 · 1年",
        number: "已经有了19人回答",
        btn: "写回答"
      },
      {
        id: 4,
        title: "Js中,数组里面的相同的元素如何去重？",
        img: "../../images/have/1.jpg",
        name: "林小迪",
        zhiwei: "web前端 · 9年",
        number: "已经有了16人回答",
        btn: "写回答"
      }
    ],

    videoSrc: "https://vd2.bdstatic.com/mda-mmm8aveut6mims0p/sc/cae_h264/1640152494904499216/mda-mmm8aveut6mims0p.mp4?v_from_s=hkapp-haokan-nanjing&auth_key=1647004570-0-0-0be268a8c077bf1f40f1cf10d3562528&bcevod_channel=searchbox_feed&cd=0&pd=1&pt=3&logid=2770547610&vid=13563421621082508679&abtest=100815_2-17451_1&klogid=2770547610",
    vList: [{
        id: "001",
        title: "康宏国际投资集团",
        url: "https://vd4.bdstatic.com/mda-kdf8eymnf4g9p6cp/sc/mda-kdf8eymnf4g9p6cp.mp4?v_from_s=hkapp-haokan-nanjing&auth_key=1647004327-0-0-74ca9c067d839fcbb49fcfb233df8805&bcevod_channel=searchbox_feed&pd=1&cd=0&pt=3&logid=2527654399&vid=17586100357976928185&abtest=100815_2-17451_1&klogid=2527654399"
      },
      {
        id: "002",
        title: "青春无限-校园招聘会",
        url: "https://vd2.bdstatic.com/mda-mmm8aveut6mims0p/sc/cae_h264/1640152494904499216/mda-mmm8aveut6mims0p.mp4?v_from_s=hkapp-haokan-nanjing&auth_key=1647004570-0-0-0be268a8c077bf1f40f1cf10d3562528&bcevod_channel=searchbox_feed&cd=0&pd=1&pt=3&logid=2770547610&vid=13563421621082508679&abtest=100815_2-17451_1&klogid=2770547610"
      },
      {
        id: "003",
        title: "新零售服务微镖局招聘宣传片：一群人改变一座城",
        url: "https://vd2.bdstatic.com/mda-mf6jkyv0cn1avn58/sc/cae_h264/1623074215817282302/mda-mf6jkyv0cn1avn58.mp4?v_from_s=hkapp-haokan-nanjing&auth_key=1647004780-0-0-ca4c23b22aebff88c012bdcddc46cb99&bcevod_channel=searchbox_feed&cd=0&pd=1&pt=3&logid=2980218706&vid=6384393286471420353&abtest=100815_2-17451_1&klogid=2980218706"
      },
      {
        id: "004",
        title: "太力，校园招聘宣传片《太力，让年轻有为》",
        url: "https://vd2.bdstatic.com/mda-mftcyy1qagvvrx5p/sc/cae_h264/1624845584392915515/mda-mftcyy1qagvvrx5p.mp4?v_from_s=hkapp-haokan-nanjing&auth_key=1647004687-0-0-d69dc94278f153756d315e39a2cd093e&bcevod_channel=searchbox_feed&cd=0&pd=1&pt=3&logid=2887577490&vid=15904429783163578580&abtest=100815_2-17451_1&klogid=2887577490"
      },
      {
        id: "005",
        title: "杰赛科技校园招聘宣传形象片",
        url: "https://vd2.bdstatic.com/mda-mkr3xdan0gwcsgkk/sc/cae_h264/1637899362891788048/mda-mkr3xdan0gwcsgkk.mp4?v_from_s=hkapp-haokan-nanjing&auth_key=1647004921-0-0-cfdb867ddcb4b4066da64755b9249916&bcevod_channel=searchbox_feed&cd=0&pd=1&pt=3&logid=3120932277&vid=4034928523288016963&abtest=100815_2-17451_1&klogid=3120932277"
      },
      {
        id: "006",
        title: "华为招聘宣传片：《新的起点》超燃！",
        url: "https://vd3.bdstatic.com/mda-jiqvm1m7z57pn12b/sc/mda-jiqvm1m7z57pn12b.mp4?v_from_s=hkapp-haokan-nanjing&auth_key=1647005308-0-0-4c2815a93fd080c422306467cccb1e95&bcevod_channel=searchbox_feed&cd=0&pd=1&pt=3&logid=3508146664&vid=7432466112659703974&abtest=100815_2-17451_1&klogid=3508146664"
      },
    ],
    danmuText: '',
    danmuList: [{
        text: "这是第一条弹幕",
        time: 1,
        color: "#f00"
      },
      {
        text: "这是第二条弹幕",
        time: 3,
        color: "#0f0"
      },
      {
        text: "这是第三条弹幕",
        time: 5,
        color: "#00f"
      }
    ],
    currentTime: 0,
    colorList: ["red", "blue", "yellow", "green", "pink"],
    colorIndex: 0,
    inputColor:''
  },
  haveHd(e) {
    // console.log(e.currentTarget.dataset)
    let title = e.currentTarget.dataset.title
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../have_hd/have_hd?title=' + title + "&id=" + id,
    })
  },
  tabSelect: function (e) {
    console.log('切换tab')
    if(e.currentTarget.dataset.id!==0){
      this.videoContext.stop()
    }
    this.setData({
      tabCur: e.currentTarget.dataset.id,
      scrollleft: (e.currentTarget.dataset.id - 2) * 200
    })
  },
  add: function () {
    this.setData({
      couter: this.data.couter + 1
    })
  },
  logBtn: function (e) {
    // console.log(e)
    var userId = e.currentTarget.dataset.id
    // console.log(userId)
    if (userId == 0) {
      wx.navigateTo({
        url: '../have_news/have_news?userId=' + userId
      })
    } else if (userId == 1) {
      wx.navigateTo({
        url: '../have_students/have_students?userId=' + userId
      })
    }
  },
  waitBtn: function (e) {
    // console.log(e.currentTarget.dataset.id)
    let id = e.currentTarget.dataset.id
    wx.setStorageSync("id", id)
    wx.navigateTo({
      url: '../have_wait/have_wait?id=' + id,
    })
  },

  changeVideo: function (e) {
    console.log(e.currentTarget.dataset.url)
    this.videoContext.stop()
    this.setData({
      videoSrc: e.currentTarget.dataset.url
    })
    this.videoContext.play()
  },
  getDanmu: function (e) {
    // console.log(e.detail)
    this.setData({
      danmuText: e.detail.value
    })
  },
  sendDanmu: function (e) {
    // let color = getRandomColor()
    // 获取修改后的颜色列表的下标
    let colorIndex = this.data.colorIndex
    // 通过下标获取颜色列表的值
    let color = this.data.colorList[colorIndex]
    this.videoContext.sendDanmu({
      // text、color为sendDanmu自带属性
      text: this.data.danmuText,
      color: color
    })
    // 创建弹幕对象
    let danmu = {}
    danmu.text = this.data.danmuText;
    danmu.time = Math.round(this.data.currentTime);
    danmu.color = color
    // 获取弹幕列表
    let danmuList = this.data.danmuList
    danmuList.push(danmu)
    this.setData({
      inputColor:''
    })
  },
  getCurrentTime: function (e) {
    // console.log(e.detail.currentTime)
    this.setData({
      currentTime: e.detail.currentTime
    })
  },
  // 改变pinker下标
  getDanmuColor: function (e) {
    console.log(e.detail.value)
    this.setData({
      colorIndex: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // videoContext通过 videoId 跟一个 video 组件绑定，通过它可以操作一个 video 组件
    this.videoContext = wx.createVideoContext('myVideo')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})