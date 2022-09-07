// pages/logs_Bio_yuyue/logs_Bio_yuyue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    worktext: '请选择（必填）',
    workcity: '请选择（必填）',
    workwant: '不限',
    citys: [{
        text: '北京',
        id: 1
      },
      {
        text: '上海',
        id: 2
      },
      {
        text: '杭州',
        id: 3
      },
      {
        text: '天津',
        id: 4
      },
      {
        text: '西安',
        id: 5
      },
      {
        text: '厦门',
        id: 6
      },
      {
        text: '广州',
        id: 7
      },
      {
        text: '深圳',
        id: 8
      },
      {
        text: '苏州',
        id: 9
      },
      {
        text: '成都',
        id: 10
      },
      {
        text: '郑州',
        id: 11
      },
      {
        text: '重庆',
        id: 12
      },
      {
        text: '东莞',
        id: 14
      },
      {
        text: '南京',
        id: 15
      },
      {
        text: '兰州',
        id: 16
      },
    ],
    cityId: ''
  },
  checkcity() {
    wx.navigateTo({
      url: '/pages/logs_Bio_yuyue_city/logs_Bio_yuyue_city',
    })
  },
  checkwork() {
    wx.navigateTo({
      url: '/pages/logs_Bio_yuyue_work/logs_Bio_yuyue_work',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (wx.getStorageSync('cityid') !== '') {
      const id = wx.getStorageSync('cityid');
      this.data.citys.forEach(item => {
        if (item.id == id) {
          this.setData({
            workcity: item.text
          })
        }
      })
    }
    if (wx.getStorageSync('workname')) {
      const name = wx.getStorageSync('workname');
      this.setData({
        worktext: name
      })
    }

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