// pages/have_students/havue_students.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginin:true,
    img:[
      {
        id:0,
        img:"../../images/have/话题1.png"
      },
      {
        id:1,
        img:"../../images/have/话题2.png"
      },
      {
        id:2,
        img:"../../images/have/话题3.png"
      },
      {
        id:3,
        img:"../../images/have/话题4.png"
      },
      {
        id:4,
        img:"../../images/have/话题5.png"
      },
      {
        id:5,
        img:"../../images/have/话题6.png"
      }
    ],
    middletop:[
      {
        id:0,
        text:"校招"
      },
      {
        id:1,
        text:"兼职"
      },
      {
        id:2,
        text:"实习"
      },
      {
        id:3,
        text:"攻略"
      }
    ]
  },
  middleBt:function(e){
    // console.log(e.currentTarget.dataset.id)
    this.setData({
      tabbtn:e.currentTarget.dataset.id 
  })
  },
  logined:function(e){
    this.setData({
      loginin:false
    })
  },
  login:function(e){
    this.setData({
      loginin:true
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