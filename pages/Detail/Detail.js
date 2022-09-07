// pages/Detail/Detail.js
const common = require("../../utils/common")
const chooseLocation = requirePlugin('chooseLocation');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 该岗位id
        taskId1: "",
        // 为true，则显示已投递岗位的删除按钮
        gangweiId: false,
        // 为true 则显示删除按钮
        taskId: true,
        // 收藏
        isAdd: false,
        // 页面数据
        article: {},
        location: "位置",
        showShare: false,
        options: [
            [{
                    name: '微信',
                    icon: 'wechat'
                },
                {
                    name: '微博',
                    icon: 'weibo'
                },
                {
                    name: 'QQ',
                    icon: 'qq'
                },
                {
                    name: '朋友圈',
                    icon: 'wechat-moments'
                },
            ],
            [{
                    name: '复制链接',
                    icon: 'link'
                },
                {
                    name: '分享海报',
                    icon: 'poster'
                },
                {
                    name: '二维码',
                    icon: 'qrcode'
                },
                {
                    name: '小程序码',
                    icon: 'weapp-qrcode'
                }
            ]
        ]
    },
    onClick(event) {
        this.setData({
            showShare: true
        });
    },
    onClose() {
        this.setData({
            showShare: false
        });
    },

    // 取消收藏
    cancelFavorites() {
        let article = this.data.article;
        let nickname = wx.getStorageSync('currentUser')
        var pro = common.removeFavorites(nickname, article)
        pro.then((message) => {
            if (message == 0) {
                this.setData({
                    isAdd: false
                })
            }
        })
    },

    // 删除该已投递岗位
    deleteYitoudiGangwei() {
        let nickname = wx.getStorageSync('currentUser')
        let taskId1 = this.data.taskId1
        var pro = common.deleteYitoudiGangwei(nickname, taskId1)
        pro.then((message) => {
            wx.showToast({
                title: '删除成功',
                success: function () {
                    wx.navigateBack({
                        delta: 0,
                    })
                }
            })
        })
    },

    // 收藏
    addFavorites() {
        let article = this.data.article;
        let nickname = wx.getStorageSync('currentUser')
        console.log()
        // 如果nickname存在，登录后直接将新闻写入数据库的收藏夹文档，如果nickname不存在，不允许收藏
        if (nickname != "") {
            var pro = common.setFavorites(nickname, article)
            pro.then((message) => {
                if (message == 0) {
                    // console.log("收藏成功")
                    this.setData({
                        isAdd: true
                    })
                }
            })
        }
    },
    enterChat(e) { //进入私聊
        var taskId1 = this.data.taskId1
        let article = this.data.article;
        let gangweiId = this.data.gangweiId
        if (gangweiId === true) {
            // 立即沟通
            wx.navigateTo({
                url: '../chat/privateChat/privateChat?to=' + id
            });
            return
        }

        wx.showModal({
            title: "您想要？",
            cancelText: '投递简历',
            confirmText: '立即沟通',
            success(res) {
                if (res.confirm) {
                    // 立即沟通
                    wx.navigateTo({
                        url: '../chat/privateChat/privateChat?to=' + id
                    });
                } else if (res.cancel) {
                    // 投递简历
                    let nickname = wx.getStorageSync('currentUser')
                    // formData是简历
                    let formData = wx.getStorageSync('formData')
                    if (nickname != "") {

                        // 投递简历
                        var pro = common.setJianli(taskId1, formData)
                        pro.then((message) => {
                            wx.showToast({
                                title: "发送成功！"
                            })
                        })

                        // 将投递过简历的岗位保存
                        var pro = common.setGangwei(nickname, article)
                        pro.then((message) => {
                            if (message == 0) {
                                // console.log("收藏成功")
                            }
                        })
                    } else {
                        wx.showModal({
                            title: "请登录!"
                        })
                    }
                }
            }
        })
        let id = this.data.article.uuid

    },

    // 地图
    openLocation(e) {
        const key = '6VEBZ-LHLK2-6MZU2-CE7FR-7NOX3-RTBPD'; //使用在腾讯位置服务申请的key
        const referer = 'RedMedal'; //调用插件的app的名称
        const location = JSON.stringify({
            latitude: e.currentTarget.dataset.lat,
            longitude: e.currentTarget.dataset.lon
        });
        const category = '公司企业';
        // console.log(e)
        wx.navigateTo({
            url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer + '&location=' + location + '&category=' + category
        });
    },


    // 删除该岗位
    deleteWork() {
        var {
            taskId1
        } = this.data;
        console.log(taskId1)
        var pro = common.deleteWork(taskId1)
        pro.then((res) => {
            wx.showToast({
                title: '删除成功',
                success: function () {
                    wx.navigateBack({
                        delta: 0,
                    })
                    // wx.redirectTo({
                    //     url: '../fabu/fabu?tabCur=' + 1,
                    // })
                }
            })

        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 加载内容
        var pro = common.getNewsDetail(options.id)
        console.log("options.id", options.id)
        this.setData({
            taskId1: options.id,
        })

        var arr = []
        for (var i in options) {
            arr.push(options[i])
        }
        var taskId = arr[1]
        console.log(taskId, 'taskId')
        // 从后台跳转来的
        if (taskId == 1) {
            this.setData({
                taskId: false,
            })
        }
        // 从已投递岗位跳转来的
        if (taskId == 2) {
            this.setData({
                gangweiId: true,
            })
        }
        pro.then((res) => {
            this.setData({
                article: res,
            })
        })

        // 检查当前新闻是否在收藏夹中
        let nickname = wx.getStorageSync('currentUser')
        pro = common.getFavorites(nickname)
        pro.then((docs) => {
            for (var i = 0; i < docs.length; i++) {
                if (docs[i].article.uuid == options.id) {
                    this.setData({
                        isAdd: true
                    })
                }
            }
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function (options) {
        // 地图
        const location = chooseLocation.getLocation();
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