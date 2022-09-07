// pages/index/index.js
let common = require("../../utils/common")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        newsList: [],
        inputValue: '',
        pageNo: 1,
        pageSize: 10,
        /* 节流阀 */
        isLoading: false,
        /* 总数 */
        total: '',
        searchValue:''
    },
    // 搜索
    onChange: function (e) {
        this.setData({
            inputValue: e.detail
        })
        // console.log(e.detail)
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
    //切换到详情页面
    gotoComent: function (e) {
        let id = e.currentTarget.dataset.id
        // console.log(e)
        wx.navigateTo({
            url: '../Detail/Detail?id=' + id,
        })
    },

    // 获取到公司列表的数据
    getLists: function (cb, flag) {
        this.setData({
            isLoading: true
        });
        !flag && wx.showLoading({
            title: '数据加载中',
        })
        const {
            pageNo,
            pageSize
        } = this.data
        var pro = common.getNewsList(pageNo, pageSize)
        pro.then((docs) => {
            this.setData({
                newsList: [...this.data.newsList, ...docs[0]],
                isLoading: false,
                total: docs[1].total
            })
            wx.hideLoading();

            cb && cb()
            // wx.stopPullDownRefresh()
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
        this.setData({
            pageNo: 1,
            pageSize: 10,
            newsList: [],
            searchValue:''
        })
        this.getLists(() => {
            // 下拉刷新后关闭效果
            wx.stopPullDownRefresh();
        }, 1);
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        // 没有下一页数据
        if (this.data.pageSize * this.data.pageNo >= this.data.total) {
            return wx.showToast({
                title: '数据加载完毕',
                icon: null
            })
        }
        // 如果在请求中则不能在请求
        if (this.data.isLoading) return

        this.setData({
            pageNo: this.data.pageNo + 1
        })
        this.getLists();
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})