// pages/have_wait/have_wait.js
const common = require("../../utils/common")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: ''
  },

  onChange(e){
    this.setData({
      inputValue:e.detail.value
    })
  },
  submit(){
    let article = this.data.inputValue;
        let nickname = wx.getStorageSync('id')
        // 如果nickname存在，登录后直接将新闻写入数据库的收藏夹文档，如果nickname不存在，不允许收藏
        if (nickname != "") {
            var pro = common.setLyns(nickname, article)
            pro.then((message) => {
                if (message == 0) {
                    wx.showModal({
                      title:'提示',
                      content:'发布成功',
                      success(res){
                        if(res.confirm){
                          wx.navigateBack({
                            delta: 1,
                          })
                        }
                      }
                    })
                }
            })
        }
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