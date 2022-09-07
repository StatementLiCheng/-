// pages/nearby/nearby.js
const citySelector = requirePlugin('citySelector');
let common = require("../../utils/common")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        newsList: [],
        address: '北京',
        inputValue: '',
        pageNo: 1,
        pageSize: 10,
    },

    // 搜索
    onChange: function (e) {
        this.setData({
            inputValue: e.detail
        })
        console.log(e.detail)
    },
    onClick() {
        var pro = common.getNewsList()
        pro.then((docs) => {
            var doc = []
            for (var i = 0; i < docs.length; i++) {
                if (docs[i].title.indexOf(this.data.inputValue) != -1 || docs[i].price.indexOf(this.data.inputValue) != -1 || docs[i].company.indexOf(this.data.inputValue) != -1 || docs[i].NumberP.indexOf(this.data.inputValue) != -1 || docs[i].technology1.indexOf(this.data.inputValue) != -1 || docs[i].technology2.indexOf(this.data.inputValue) != -1 || docs[i].technology3.indexOf(this.data.inputValue) != -1) {
                    doc.push(docs[i])
                }
            }
            if (doc == "") {
                wx.navigateTo({
                    url: '../NotFound/NotFound'
                })
            } else {
                this.setData({
                    newsList: doc
                })
            }
        })
    },

    // 城市选择
    onRegion() {
        const key = '6VEBZ-LHLK2-6MZU2-CE7FR-7NOX3-RTBPD'; // 使用在腾讯位置服务申请的key
        const referer = 'RedMedal'; // 调用插件的app的名称
        const hotCitys = [
            // '广州','北京','天津','上海','杭州'
        ]; // 用户自定义的的热门城市
        const selectedCity = citySelector.getCity();
        wx.navigateTo({
            url: `plugin://citySelector/index?key=${key}&referer=${referer}&hotCitys=${hotCitys}`
        })
    },


    //切换到详情页面
    gotoComent: function (e) {
        let id = e.currentTarget.dataset.id
        console.log(e)
        wx.navigateTo({
            url: '../Detail/Detail?id=' + id,
        })
    },

    // 获取定位后的内容
    getLocation: function () {
        var pro = common.getNewsList()
        pro.then((docs) => {
            var doc = []
            for (var i = 0; i < docs.length; i++) {
                if (this.data.address == docs[i].region) {
                    doc.push(docs[i])
                }
            }
            this.setData({
                newsList: doc
            })
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
        // 选择城市后返回城市信息对象，若未选择返回null
        let selectedCity = {}
        selectedCity = citySelector.getCity();
        if (selectedCity != null) {
            this.setData({
                address: selectedCity.name
            })
        }
        this.getLocation();
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {},

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