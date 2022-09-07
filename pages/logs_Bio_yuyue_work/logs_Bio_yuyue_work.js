// pages/logs_Bio_yuyue_work/logs_Bio_yuyue_work.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    mainActiveIndex: 0,
    activeId: null,
    newWorktext: '',
    newitems: [],
    items: [{
        id: 1,
        text: '所有职位',
        children: [{
            text: 'Java',
            id: 0
          },
          {
            text: '品类运营',
            id: 1
          },
          {
            text: '网站运营',
            id: 2
          },
          {
            text: '游戏运营',
            id: 3
          },
          {
            text: '新媒体运营',
            id: 4
          },
          {
            text: '社区运营',
            id: 5
          },
          {
            text: '微信运营',
            id: 6
          },
          {
            text: '电商运营',
            id: 7
          },
          {
            text: '直播运营',
            id: 8
          },
          {
            text: '内容审核',
            id: 10
          },
          {
            text: '跨境电商运营',
            id: 11
          },
          {
            text: '运营助理/专员',
            id: 12
          }, {
            text: '数据标注',
            id: 13
          },
          {
            text: '测试工程师',
            id: 14
          },
          {
            text: '自动化测试',
            id: 15
          },
          {
            text: '功能测试',
            id: 16
          },
          {
            text: '移动端测试',
            id: 17
          },
          {
            text: '测试开发',
            id: 18
          },
          {
            text: '移动端测试',
            id: 19
          },
          {
            text: '软件测试',
            id: 20
          },
          {
            text: '渗透测试',
            id: 21
          },
          {
            text: '软件测试',
            id: 22
          },
          {
            text: '硬件测试',
            id: 23
          },
          {
            text: 'HTML5',
            id: 24
          },
          {
            text: 'CSS3',
            id: 25
          },
          {
            text: 'ISO',
            id: 26
          },
          {
            text: '移动web前端',
            id: 27
          },
          {
            text: 'JavaScript',
            id: 28
          },
          {
            text: 'U3D',
            id: 29
          },
          {
            text: 'COCOS2DX',
            id: 30
          },
          {
            text: '政府关系',
            id: 31
          },
          {
            text: '政策研究',
            id: 32
          },
          {
            text: '企业党建',
            id: 33
          },
          {
            text: '网络推广',
            id: 34
          },
          {
            text: '市场营销',
            id: 35
          },
          {
            text: '市场策划',
            id: 36
          },
          {
            text: '市场顾问',
            id: 37
          },
          {
            text: '市场推广',
            id: 38
          },
          {
            text: 'SEO',
            id: 39
          },
          {
            text: 'SEM',
            id: 40
          },
          {
            text: '商务渠道',
            id: 41
          }, {
            text: '网络营销',
            id: 42
          },
        ]
      },
      {
        id: 2,
        text: '移动开发',
        children: [{
            text: 'HTML5',
            id: 1
          },
          {
            text: 'CSS3',
            id: 2
          },
          {
            text: 'ISO',
            id: 3
          },
          {
            text: '移动web前端',
            id: 4
          },
          {
            text: 'JavaScript',
            id: 5
          },
          {
            text: 'U3D',
            id: 6
          },
          {
            text: 'COCOS2DX',
            id: 7
          },
        ]
      },
      {
        id: 3,
        text: '后端开发',
        children: [{
            text: 'Java',
            id: 1
          },
          {
            text: 'C++',
            id: 2
          },
          {
            text: 'PHP',
            id: 3
          },
          {
            text: 'C',
            id: 4
          },
          {
            text: 'C#',
            id: 5
          },
          {
            text: '.NET',
            id: 6
          },
          {
            text: 'Python',
            id: 7
          },
          {
            text: 'Delphi',
            id: 8
          },
          {
            text: 'VB',
            id: 9
          },
          {
            text: 'Perl',
            id: 10
          },
        ]
      },
      {
        id: 4,
        text: '测试',
        children: [{
            text: '测试工程师',
            id: 1
          },
          {
            text: '自动化测试',
            id: 2
          },
          {
            text: '功能测试',
            id: 3
          },
          {
            text: '移动端测试',
            id: 4
          },
          {
            text: '测试开发',
            id: 5
          },
          {
            text: '移动端测试',
            id: 6
          },
          {
            text: '软件测试',
            id: 7
          },
          {
            text: '渗透测试',
            id: 8
          },
          {
            text: '软件测试',
            id: 9
          },
          {
            text: '硬件测试',
            id: 10
          },
        ]
      },
      {
        id: 5,
        text: '运营',
        children: [{
            text: '品类运营',
            id: 1
          },
          {
            text: '网站运营',
            id: 2
          },
          {
            text: '游戏运营',
            id: 3
          },
          {
            text: '新媒体运营',
            id: 4
          },
          {
            text: '社区运营',
            id: 5
          },
          {
            text: '微信运营',
            id: 6
          },
          {
            text: '电商运营',
            id: 7
          },
          {
            text: '直播运营',
            id: 8
          },
          {
            text: '内容审核',
            id: 9
          },
          {
            text: '跨境电商运营',
            id: 10
          },
          {
            text: '运营助理/专员',
            id: 11
          }, {
            text: '数据标注',
            id: 12
          },
        ]
      },
      {
        id: 6,
        text: '金融',
        children: [{
            text: '投资经理',
            id: 1
          },
          {
            text: '行业研究',
            id: 2
          },
          {
            text: '资产管理',
            id: 3
          },
          {
            text: '投资总监',
            id: 4
          },
          {
            text: '投资VP',
            id: 5
          },
          {
            text: '投资合伙人',
            id: 6
          },
          {
            text: '融资',
            id: 7
          },
          {
            text: '投资助理',
            id: 8
          },
          {
            text: '投后管理',
            id: 9
          },
          {
            text: '投资助理',
            id: 10
          },
          {
            text: '风控',
            id: 11
          }, {
            text: '合规稽查',
            id: 12
          },
        ]
      },
      {
        id: 7,
        text: '教育培训',
        children: [{
            text: '课程设计',
            id: 1
          },
          {
            text: '课程编辑',
            id: 2
          },
          {
            text: '培训研究',
            id: 3
          },
          {
            text: '培训师',
            id: 4
          },
          {
            text: '课程策划',
            id: 5
          },
          {
            text: '其他教育研发职位',
            id: 6
          },
          {
            text: '园长/副园长',
            id: 7
          },
          {
            text: '校长/副校长',
            id: 8
          },
          {
            text: '教务管理',
            id: 9
          },
          {
            text: '教学管理',
            id: 10
          },
          {
            text: '班主任/辅导员',
            id: 11
          }, {
            text: '教师',
            id: 12
          },
        ]
      },
      {
        id: 8,
        text: '传媒',
        children: [{
            text: '排版设计',
            id: 1
          },
          {
            text: '记者',
            id: 2
          },
          {
            text: '编辑',
            id: 3
          },
          {
            text: '采编',
            id: 4
          },
          {
            text: '出版发行',
            id: 5
          },
          {
            text: '校对录入',
            id: 6
          },
          {
            text: '总编',
            id: 7
          },
          {
            text: '自媒体',
            id: 8
          },
          {
            text: '媒介经理',
            id: 9
          },
          {
            text: '广告协调',
            id: 10
          },
          {
            text: '品牌公关',
            id: 11
          }, {
            text: '活动策划',
            id: 12
          },
        ]
      },
      {
        id: 9,
        text: '市场',
        children: [{
            text: '政府关系',
            id: 1
          },
          {
            text: '政策研究',
            id: 2
          },
          {
            text: '企业党建',
            id: 3
          },
          {
            text: '网络推广',
            id: 4
          },
          {
            text: '市场营销',
            id: 5
          },
          {
            text: '市场策划',
            id: 6
          },
          {
            text: '市场顾问',
            id: 7
          },
          {
            text: '市场推广',
            id: 8
          },
          {
            text: 'SEO',
            id: 9
          },
          {
            text: 'SEM',
            id: 10
          },
          {
            text: '商务渠道',
            id: 11
          }, {
            text: '网络营销',
            id: 12
          },
        ]
      },
      {
        id: 10,
        text: '产品',
        children: [{
            text: '政府关系',
            id: 1
          },
          {
            text: '政策研究',
            id: 2
          },
          {
            text: '企业党建',
            id: 3
          },
          {
            text: '网络推广',
            id: 4
          },
          {
            text: '市场营销',
            id: 5
          },
          {
            text: '市场策划',
            id: 6
          },
          {
            text: '市场顾问',
            id: 7
          },
          {
            text: '市场推广',
            id: 8
          },
          {
            text: 'SEO',
            id: 9
          },
          {
            text: 'SEM',
            id: 10
          },
          {
            text: '商务渠道',
            id: 11
          }, {
            text: '网络营销',
            id: 12
          },
        ]
      },
      {
        id: 11,
        text: '设计',
        children: [{
            text: '政府关系',
            id: 1
          },
          {
            text: '政策研究',
            id: 2
          },
          {
            text: '企业党建',
            id: 3
          },
          {
            text: '网络推广',
            id: 4
          },
          {
            text: '市场营销',
            id: 5
          },
          {
            text: '市场策划',
            id: 6
          },
          {
            text: '市场顾问',
            id: 7
          },
          {
            text: '市场推广',
            id: 8
          },
          {
            text: 'SEO',
            id: 9
          },
          {
            text: 'SEM',
            id: 10
          },
          {
            text: '商务渠道',
            id: 11
          }, {
            text: '网络营销',
            id: 12
          },
        ]
      },
      {
        id: 12,
        text: '服务业',
        children: [{
            text: '政府关系',
            id: 1
          },
          {
            text: '政策研究',
            id: 2
          },
          {
            text: '企业党建',
            id: 3
          },
          {
            text: '网络推广',
            id: 4
          },
          {
            text: '市场营销',
            id: 5
          },
          {
            text: '市场策划',
            id: 6
          },
          {
            text: '市场顾问',
            id: 7
          },
          {
            text: '市场推广',
            id: 8
          },
          {
            text: 'SEO',
            id: 9
          },
          {
            text: 'SEM',
            id: 10
          },
          {
            text: '商务渠道',
            id: 11
          }, {
            text: '网络营销',
            id: 12
          },
        ]
      },
      {
        id: 13,
        text: '建筑/房产',
        children: [{
            text: '政府关系',
            id: 1
          },
          {
            text: '政策研究',
            id: 2
          },
          {
            text: '企业党建',
            id: 3
          },
          {
            text: '网络推广',
            id: 4
          },
          {
            text: '市场营销',
            id: 5
          },
          {
            text: '市场策划',
            id: 6
          },
          {
            text: '市场顾问',
            id: 7
          },
          {
            text: '市场推广',
            id: 8
          },
          {
            text: 'SEO',
            id: 9
          },
          {
            text: 'SEM',
            id: 10
          },
          {
            text: '商务渠道',
            id: 11
          }, {
            text: '网络营销',
            id: 12
          },
        ]
      },
    ]
  },
  // 右侧选择栏事件
  onClickNav({
    detail = {}
  }) {
    this.setData({
      mainActiveIndex: detail.index || 0,
      activeId: null
    });
    // console.log(detail);
    // console.log(this.data.mainActiveIndex);
  },
  // 左侧选择栏事件
  onClickItem({
    detail = {}
  }) {

    const activeId = this.data.activeId === detail.id ? null : detail.id;
    this.setData({
      activeId,
      newWorktext: detail.text
    });
    // console.log(detail);
    // console.log(this.data.newWorktext);
    // wx.navigateTo({
    //   url: '/pages/logs_Bio_yuyue/logs_Bio_yuyue',
    // })
    wx.navigateBack({
      delta: 1
    })

    wx.setStorageSync('workname', this.data.newWorktext)

  },
  onChange(detail) {
    //  console.log(detail);
    //  console.log(detail.detail);

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