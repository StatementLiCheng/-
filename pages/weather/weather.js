// app.js/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        region:"天津市，天津市，西青区",
        now:{},
        imgSrc:""
    },
    changeRegion:function(e){
        console.log(e.detail)
        this.setData({
            region:e.detail.value
        })
        this.getWeather(e.detail.code[2])
    },
getWeather:function(code){
    wx.request({
        url: 'https://devapi.qweather.com/v7/weather/now?',
          data:{
            key:"ce0bf0583ccd4d039b3c12dbe7288f53",
            location:"101"+code
          },
          success:(res) => {
            console.log(res)
            this.setData({
                now:res.data.now,
                imgSrc:"/images/"+res.data.now.icon+".png"
              })
        }
    })
},

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getWeather(["011600"])
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