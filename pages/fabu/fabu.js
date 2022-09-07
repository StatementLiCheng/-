// pages/fabu/fabu.js
const common = require("../../utils/common")

Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 用户信息
        users: {},
        tabCur: 0,
        couter: 0,
        tabs: [{
                name: "发布招聘岗位",
                id: 0
            },
            {
                name: "已发布岗位",
                id: 1
            },
            {
                name: "收到简历",
                id: 2
            },
            {
                name: "我的",
                id: 3
            },
        ],
        formObj: {
            name: '张三',
            title: '前端',
            price: '11K',
            company: '中软科技',
            NumberP: '10000人',
            financing: '不需要融资',
            Years: '2年',
            education: '本科',
            technology1: 'react',
            technology2: 'vue',
            technology3: 'html',
            region: '北京',
            content: '敲代码',
        },
        name: '张三',
        title: '前端',
        price: '11K',
        company: '中软科技',
        NumberP: '10000人',
        financing: '不需要融资',
        Years: '2年',
        education: '本科',
        technology1: 'react',
        technology2: 'vue',
        technology3: 'html',
        region: '北京',
        content: '敲代码',
        // 已发布岗位列表
        newsList: [],
        pageNo: 1,
        pageSize: 10,
        /* 节流阀 */
        isLoading: false,
        /* 总数 */
        total: '',
        // 简历列表
        datalist: []
    },
    onChange1: function (event) {
        // console.log(event.detail);
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";
        var uuid = s.join("");


        this.data.formObj.uuid = uuid;
        this.data.formObj.latitude = 39.071537;
        this.data.formObj.longitude = 117.109671;
        this.data.formObj.password = "666";
        this.data.formObj.avatar = '/images/head/head4.png';

        this.data.formObj.name = event.detail;
    },
    onChange2: function (event) {
        this.data.formObj.title = event.detail;
    },
    onChange3: function (event) {
        this.data.formObj.price = event.detail;
    },
    onChange4: function (event) {
        this.data.formObj.company = event.detail;
    },
    onChange5: function (event) {
        this.data.formObj.NumberP = event.detail;
    },
    onChange6: function (event) {
        this.data.formObj.financing = event.detail;
    },
    onChange7: function (event) {
        this.data.formObj.Years = event.detail;
    },
    onChange8: function (event) {
        this.data.formObj.education = event.detail;
    },
    onChange9: function (event) {
        this.data.formObj.technology1 = event.detail;
    },
    onChange10: function (event) {
        this.data.formObj.technology2 = event.detail;
    },
    onChange11: function (event) {
        this.data.formObj.technology3 = event.detail;
    },
    onChange12: function (event) {
        this.data.formObj.region = event.detail;
    },
    onChange13: function (event) {
        this.data.formObj.content = event.detail;
    },

    // 发布岗位
    enterChat1: function () {
        const {
            formObj
        } = this.data

        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";
        var uuid = s.join("");


        formObj.uuid = uuid;
        formObj.latitude = 39.071537;
        formObj.longitude = 117.109671;
        formObj.password = "666";
        formObj.avatar = '/images/head/head2.png';

        console.log(formObj, "formObj")
        var pro = common.setFabu(formObj)
        pro.then((message) => {
            wx.showToast({
                title: "发布新岗位成功！"
            })
            this.setData({
                name: '',
                title: '',
                price: '',
                company: '',
                NumberP: '',
                financing: '',
                Years: '',
                education: '',
                technology1: '',
                technology2: '',
                technology3: '',
                region: '',
                content: '',

                pageNo: 1,
                pageSize: 10,
                newsList: [],
                searchValue: ''
            })
            this.getLists();
        })
    },

    // 获取已发布岗位
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

    // 获取收到简历
    getJianli: function () {
        let taskId1 = wx.getStorageSync('currentUser').uuid

        var pro = common.getJianli(taskId1)
        pro.then((doc) => {
            console.log(doc.data)
            this.setData({
                datalist: [...doc.data]
            })
        })
    },

    // 切换tab标签
    tabSelect: function (e) {
        console.log('切换tab', e.currentTarget.dataset.id)
        this.setData({
            tabCur: e.currentTarget.dataset.id,
            scrollleft: (e.currentTarget.dataset.id - 2) * 200
        })
    },
    //切换到详情页面
    gotoComent: function (e) {
        var taskId = 1
        let id = e.currentTarget.dataset.id
        // console.log(e)
        wx.navigateTo({
            url: '../Detail/Detail?id=' + id + "&taskId =" + taskId,
            // url: `../Detail/Detail?id=${id} &taskId =${taskId}`,
        })
    },

    // 简历详情
    gotoworker(e) {
        var workId = 1
        let id = e.currentTarget.dataset.id
        wx.navigateTo({
            url: '../logs_Bio/logs_bio?id=' + id + "&workId =" + workId,
        })
    },
    // 确认删除简历
    deleteWork1: function (currentId, id) {
        console.log(currentId)
        var pro = common.deleteWork1(currentId, id)
        pro.then((res) => {
            wx.showToast({
                title: '删除成功',
            })
        })
    },
    // 删除简历?
    deleteWork(e) {
        const that = this
        let id = e.currentTarget.dataset.id
        let currentId = e.currentTarget.dataset.currentid
        // console.log(e)
        // console.log(currentId)
        wx.showModal({
            title: '确认删除?',
            success(res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                    that.deleteWork1(currentId, id);
                    that.getJianli();
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    },

    // 退出登录
    backlogin() {
        var that = this
        // 如果未登录跳转登录状态
        let currentUsers = wx.getStorageSync("currentUser");
        let title = ''
        if (!currentUsers) {
            title = '已退出登录！'
        } else {
            title = '确定退出登录？'
        }
        wx.showModal({
            title: title,
            success(res) {
                if (res.confirm) {
                    wx.removeStorage({
                        key: 'currentUser',
                        success: function (res) {
                            that.setData({
                                users: {
                                    'avatar': '/images/have/1.jpg'
                                },
                            })
                        }
                    })
                    wx.removeStorageSync('cityid');
                    wx.removeStorageSync('workname');

                    wx.redirectTo({
                        url: '../login/login'
                    });
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 获取到公司列表的数据
        this.getLists();
        

        let users = wx.getStorageSync('currentUser');
        this.setData({
            users,
            tabCur: options.tabCur
        })
        this.getJianli();
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        this.getJianli();
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        this.setData({
            pageNo: 1,
            pageSize: 10,
            newsList: [],
            searchValue: ''
        })

        // 获取到公司列表的数据
        this.getLists();
        wx.hideHomeButton();

        this.getJianli();
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
            searchValue: ''
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