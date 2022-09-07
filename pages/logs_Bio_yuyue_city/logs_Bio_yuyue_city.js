// pages/logs_Bio_yuyue_city/logs_Bio_yuyue_city.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cityId:null,
    citys:[
      {
        text:'北京',
        id:1
      },
      {
        text:'上海',
        id:2
      },
      {
        text:'杭州',
        id:3
      },
      {
        text:'天津',
        id:4
      },
      {
        text:'西安',
        id:5
      },
      {
        text:'厦门',
        id:6
      },
      {
        text:'广州',
        id:7
      },
      {
        text:'深圳',
        id:8
      },
      {
        text:'苏州',
        id:9
      },
      {
        text:'成都',
        id:10
      },
      {
        text:'郑州',
        id:11
      },
      {
        text:'重庆',
        id:12
      },
      {
        text:'东莞',
        id:14
      },
      {
        text:'南京',
        id:15
      },
      {
        text:'兰州',
        id:16
      },
    ]
  },
  onSelect(options){
    // console.log(options);
    this.setData({
      cityId:options.target.dataset.id
    })
    
    wx.navigateBack({
      delta: 1
    })
    wx.setStorageSync('cityid', this.data.cityId);
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