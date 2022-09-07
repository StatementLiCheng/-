// pages/logs_Bio_look/logs_Bio_look.js
const common = require("../../utils/common")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 岗位列表
    newsList: [],
  },

  // 获取岗位列表
  getLists: function () {
    let nickname = wx.getStorageSync('currentUser')
    var pro = common.getGangwei(nickname)
    pro.then((docs) => {
      console.log(docs)
      this.setData({
        newsList: docs,
      })
    })
  },

  // 详情
  gotoComent(e) {
    let id = e.currentTarget.dataset.id
    // console.log(e)
    let taskId = 2
    wx.navigateTo({
      url: '../Detail/Detail?id=' + id + '&taskId=' + taskId,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取到公司列表的数据
    this.getLists();
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
    this.getLists();
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