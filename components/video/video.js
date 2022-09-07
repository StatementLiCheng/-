// pages/index/index.js
// function getRandomColor() {
//   let rbg = []
//   for (let i = 0; i < 3; i++) {
//     //Math.random()返回(0,1)区间的数字，乘以256返回(0,256)之间的数字，数字为浮点数
//     //Math.floor(x),返回小于等于x的最大整数
//     //Math.floor((Math.random()*256))表示随机获取0到255之间的任意整数
//     //扩展：获取60到99之间的整数
//     //下限数字+Math.floor(Math.random()*(上限-下限数字+1))
//     //toString(16)转换为字符串并且以16进制数字显示
//     let color = (Math.floor(Math.random() * 256)).toString(16);
//     //使用条件表达式，如果颜色的长度等于1，例如"1",就变为"01",否则为原有的颜色
//     color = color.length == 1 ? ('0' + color) : color;
//     //将获取到颜色添加到颜色列表中
//     rbg.push(color) //循环结束后，rgb的值格式为["01","77","df"]
//   }
//   return "#" + rbg.join(""); //#+"0177df"->"#0177df",将颜色值作为返回值
// }

Component({

  /**
   * 页面的初始数据
   */
  data: {
    videoSrc: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e25d81c4922fca5ebe51877717ef9b76.mp4",
    vList: [{
        id: "001",
        title: "小米10 8K手机",
        url: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e25d81c4922fca5ebe51877717ef9b76.mp4"
      },
      {
        id: "002",
        title: "小米MIX Alpha 开箱视频",
        url: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7f49c1ccd75f76ec86b52c9ae4c4a082.mp4"
      },
      {
        id: "003",
        title: "小米电视5 创新背后的故事",
        url: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/efea1979661bac0d1704d761e5e89ded.mp4"
      },
      {
        id: "004",
        title: "小米CC9",
        url: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7a2e31bf18e8fb5abd2a32ea93f0d46b.mp4"
      },
      {
        id: "005",
        title: "Redmi Note 7系列",
        url: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0bfbd7781fc7531592994b82f2716006.mp4"
      }
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
    colorIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeVideo(e) {
      console.log(e.currentTarget.dataset.url)
      console.log(this.videoContext)

      this.videoContext.stop()
      this.setData({
        videoSrc: e.currentTarget.dataset.url
      })
      this.videoContext.play()
    },
    getDanmu(e) {
      // console.log(e.detail)
      this.setData({
        danmuText: e.detail.value
      })
    },
    sendDanmu(e) {
      console.log("123")
      // let color = this.getRandomColor()
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
    },
    getCurrentTime(e) {
      // console.log(e.detail.currentTime)
      this.setData({
        currentTime: e.detail.currentTime
      })
    },
    // 改变pinker下标
    getDanmuColor(e) {
      console.log(e.detail.value)
      this.setData({
        colorIndex: e.detail.value
      })
    },
    getRandomColor() {
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
  },

  created() {
    // videoContext通过 videoId 跟一个 video 组件绑定，通过它可以操作一个 video 组件
    this.videoContext = wx.createVideoContext('myVideo')
  },
})