// pages/news/news.js
const DEFAULT_PAGE = 0;
Page({
  startPageX: 0,
  currentView: DEFAULT_PAGE,
  /**
   * 页面的初始数据
   */
  data: {
    tabtopone:0,
    tabbtn:0,
    toView: `card_${DEFAULT_PAGE}`,
    companytop:[
      {
        id:0,
        text:"发现公司"
      },
      {
        id:1,
        text:"全部公司"
      }
    ],
    companybtn:[
      {
        id:0,
        text:"职位多"
      },
      {
        id:1,
        text:"体验好"
      },
      {
        id:2,
        text:"看照片"
      },
      {
        id:3,
        text:"有大佬"
      }
    ],
    jobs:[
      {
        id:0,
        img:"../../images/have/公司.png",
        jobtextone:"饭团外卖",
        jobtexttwo:"B轮 | 500-999人 | 移动互联网",
        array2:[
         {
           jobContentjob:"前端开发实习生",
           jobContentmoney:"5-10k",
           jobContentaddress:"天津 西青区 侯台",
           jobContentidentity:"在校/应届",
           jobContenteducational:"本科"
          },
          {
           jobContentjob:"前端开发实习生",
           jobContentmoney:"200-250元/天",
           jobContentaddress:"天津",
           jobContentidentity:"在校/应届",
           jobContenteducational:"本科"
          },
          {
           jobContentjob:"行政助理",
           jobContentmoney:"5-8k",
           jobContentaddress:"天津",
           jobContentidentity:"经验不限",
           jobContenteducational:"本科"
          },
        ]
      },
      {
       id:1,
       img:"../../images/have/公司.png",
       jobtextone:"微比木建筑咨询",
       jobtexttwo:"A轮 | 20-99人 | 咨询",
       array2:[
        {
          jobContentjob:"前端工程师",
          jobContentmoney:"5-10k",
          jobContentaddress:"天津",
          jobContentidentity:"经验不限",
          jobContenteducational:"本科"
         },
         {
          jobContentjob:"软件开发工程师",
          jobContentmoney:"6-11k",
          jobContentaddress:"天津",
          jobContentidentity:"2年工作经验",
          jobContenteducational:"本科"
         },
         {
          jobContentjob:"咨询师",
          jobContentmoney:"5-10k",
          jobContentaddress:"天津",
          jobContentidentity:"经验不限",
          jobContenteducational:"本科"
         },
       ]
     },
     {
      id:2,
      img:"../../images/have/公司.png",
      jobtextone:"光标",
      jobtexttwo:"不需要融资 | 20-99人 | 计算机软件",
      array2:[
       {
         jobContentjob:"java实习生",
         jobContentmoney:"50-100/天",
         jobContentaddress:"天津 西青 大学城",
         jobContentidentity:"在校/应届",
         jobContenteducational:"大专"
        },
        {
         jobContentjob:"前端实习生",
         jobContentmoney:"2-4k",
         jobContentaddress:"天津",
         jobContentidentity:"经验不限",
         jobContenteducational:"大专"
        },
        {
         jobContentjob:"java实习生",
         jobContentmoney:"50-100/天",
         jobContentaddress:"天津 西青 大学城",
         jobContentidentity:"在校/应届",
         jobContenteducational:"大专"
        },
      ]
    }
    ],
    list:[
      {
        id:0,
        imghead:"../../images/头像.jpg",
        name:"刘慧娴",
        postion:"宛深分公司以城市经理·在职2年",
        imgall:"../../images/合影.png",
        cardtimuone:"#看重求职者哪儿些能力",
        cardtext:`诚实守信、积极主动、勤奋好学、踏实
        肯干、良好的责任和风险意识`,
        cardtimutwo:"#入职过程怎么样",
        cardbottomone:"23483阅读"
      },
      {
        id:1,
        imghead:"../../images/头像.jpg",
        name:"刘慧娴",
        postion:"宛深分公司以城市经理·在职2年",
        imgall:"../../images/合影.png",
        cardtimuone:"#看重求职者哪儿些能力",
        cardtext:`诚实守信、积极主动、勤奋好学、踏实
        肯干、良好的责任和风险意识`,
        cardtimutwo:"#入职过程怎么样",
        cardbottomone:"23483阅读"
      },
      {
        id:2,
        imghead:"../../images/头像.jpg",
        name:"刘慧娴",
        postion:"宛深分公司以城市经理·在职2年",
        imgall:"../../images/合影.png",
        cardtimuone:"#看重求职者哪儿些能力",
        cardtext:`诚实守信、积极主动、勤奋好学、踏实
        肯干、良好的责任和风险意识`,
        cardtimutwo:"#入职过程怎么样",
        cardbottomone:"23483阅读"
      }
    ],
    alljob:[
      {
        id:0,
        img:"../../images/have/拓尔思.png",
        name:"拓尔思",
        postion:"已上市 | 1000-9999人 | 互联网",
        postiontext:"javaScript"
      },
      {
        id:1,
        img:"../../images/have/金隅.png",
        name:"天津金隅",
        postion:"已上市 | 1000-9999人 | 建材",
        postiontext:"javaScript 开发"
      },
      {
        id:2,
        img:"../../images/have/图扑.png",
        name:"图扑软件",
        postion:"不需要融资 | 100-499人 | 计算机软件",
        postiontext:"javaScript 开发"
      },
      {
        id:3,
        img:"../../images/have/天津八维.png",
        name:"天津八维",
        postion:"未融资 | 1000-9999人 | 培训机构",
        postiontext:"javaScript讲师"
      },
      {
        id:4,
        img:"../../images/have/极光.png",
        name:"极光科技",
        postion:"不需要融资 | 20-99人 | 游戏",
        postiontext:"javaScript"
      }
    ]

  },
  tabtop:function(e){
    // console.log(e.currentTarget.dataset.id);
    this.setData({
      tabtopone:e.currentTarget.dataset.id 
  })
},
  tabmiddle:function(e){
    // console.log(e)
    this.setData({
      tabbtn:e.currentTarget.dataset.id 
  })
  },
  touchStart(e) {
    this.startPageX = e.changedTouches[0].pageX;
  },

  touchEnd(e) {
    const moveX = e.changedTouches[0].pageX - this.startPageX;
    const maxPage = this.data.list.length - 1;
    // console.log(maxPage)
    if (Math.abs(moveX) >= 150){
      if (moveX > 0) {
        this.currentView = this.currentView !== 0 ? this.currentView - 1 : 0;
      } else {
        this.currentView = this.currentView !== maxPage ? this.currentView + 1 : maxPage;
      }
    }
    this.setData({
      toView: `card_${this.currentView}`
    });
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