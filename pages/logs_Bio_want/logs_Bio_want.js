// pages/logs_Bio_want/logs_Bio_want.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    have:true,
    datalist:[]
  },
    //切换到详情页面
    gotoComent: function (e) {
      let id = e.currentTarget.dataset.id
      // console.log(e)
      wx.navigateTo({
          url: '../Detail/Detail?id=' + id,
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(wx.getStorageSync('currentUser')!==''){
      wx.request({
      url: 'http://127.0.0.1:3000/api/listFavorites',
      method:"GET",
      success:(res)=>{
        // console.log(res);
        this.setData({
          datalist:res.data,
          have:false
        })
      }
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