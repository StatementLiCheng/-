// logs.js
const util = require('../../utils/util.js');
// 获取应用实例
const app = getApp()

Page({
  data: {
    active: '',
    users: {
      'avatar': '/images/have/1.jpg'
    },
    show: false
  },
  // 事件处理函数
  to_logs_Bio() {
    wx.navigateTo({
      url: '/pages/logs_Bio/logs_bio'
    })
  },
  to_logs_Bio_look() {
    wx.navigateTo({
      url: '/pages/logs_Bio_look/logs_Bio_look'
    })
  },
  to_logs_Bio_want() {
    wx.navigateTo({
      url: '/pages/logs_Bio_want/logs_Bio_want'
    })
  },
  to_logs_Bio_find() {
    wx.navigateTo({
      url: '/pages/logs_Bio_find/logs_Bio_find',
    })
  },
  to_logs_Bio_hidden() {
    wx.navigateTo({
      url: '/pages/logs_Bio_hidden/logs_Bio_hidden',
    })
  },
  to_logs_Bio_benefit() {
    wx.navigateTo({
      url: '/pages/logs_Bio_benefit/logs_Bio_benefit',
    })
  },
  to_logs_Bio_boss() {
    wx.navigateTo({
      url: '/pages/logs_Bio_boss/logs_Bio_boss',
    })
  },
  to_logs_mianshi() {
    wx.navigateTo({
      url: '/pages/logs_Bio_mianshi/logs_Bio_mianshi',
    })
  },
  to_logs_yuyue() {
    wx.navigateTo({
      url: '/pages/logs_Bio_yuyue/logs_Bio_yuyue',
    })
  },
  to_login() {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  to_logs_gongyi() {
    wx.navigateTo({
      url: '/pages/logs_gongyi/logs_gongyi',
    })
  },
  // 退出登录
  backbtns() {
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
                show: false
              })
            }
          })
          wx.removeStorageSync('cityid');
          wx.removeStorageSync('workname');
          
          wx.redirectTo({
            url : '../login/login'
          });
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  // 获取用户相关函数
  // bindViewTap() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  onChange(event) {
    // event.detail 的值为当前选中项的索引
    this.setData({
      active: event.detail
    });
  },
  onLoad() {
    if (wx.getStorageSync('currentUser') !== '') {
      this.setData({
        users: wx.getStorageSync('currentUser'),
        show: true
      })
      // console.log(this.data.users);
    }
  },
  onShow: function () {
    if (wx.getStorageSync('currentUser') !== '') {
      this.setData({
        users: wx.getStorageSync('currentUser'),
        show: true
      })
      // console.log(this.data.users);
    }
  },
  // getUserProfile(e) {
  //   // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
  //   wx.getUserProfile({
  //     desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
  //     success: (res) => {
  //       console.log(res)
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   })
  // },
  // getUserInfo(e) {
  //   // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
  //   console.log(e)
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})