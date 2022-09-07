// pages/logs_Bio/logs_bio.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';

const common = require("../../utils/common")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: true,
    columns: ['求职状态', '离校-随时到岗', '在校-月内到岗', '在校-考虑机会', '在校-暂不考虑'],
    newColumns: '在校-考虑机会',
    userlist: {},
    disabled: false,


    workwant: '不限',
    citys: [{
        text: '北京',
        id: 1
      },
      {
        text: '上海',
        id: 2
      },
      {
        text: '杭州',
        id: 3
      },
      {
        text: '天津',
        id: 4
      },
      {
        text: '西安',
        id: 5
      },
      {
        text: '厦门',
        id: 6
      },
      {
        text: '广州',
        id: 7
      },
      {
        text: '深圳',
        id: 8
      },
      {
        text: '苏州',
        id: 9
      },
      {
        text: '成都',
        id: 10
      },
      {
        text: '郑州',
        id: 11
      },
      {
        text: '重庆',
        id: 12
      },
      {
        text: '东莞',
        id: 14
      },
      {
        text: '南京',
        id: 15
      },
      {
        text: '兰州',
        id: 16
      },
    ],
    cityId: '',
    worktext: '请选择（必填）',
    workcity: '请选择（必填）',
    gerenyoushi: "",
    gongzuojingli: "",
    jiaoyujigli: "",
    xiangmujingli: "",
    // true---离校
    radioChecked: true
  },

  // 提交form表单 保存到Storage 
  formSubmit(e) {
    let formData = e.detail.value
    if (formData.radio === 1) {
      this.setData({
        radioChecked: true
      })
    } else {
      this.setData({
        radioChecked: false
      })
    }
    formData.radioChecked = this.data.radioChecked
    formData.workcity = this.data.workcity
    formData.worktext = this.data.worktext
    formData.avatar = this.data.userlist.avatar
    formData.name = this.data.userlist.name
    formData.uuid = this.data.userlist.uuid
    console.log(formData)
    wx.setStorageSync('formData', formData)

    wx.showToast({
      title: '保存成功',
      duration: 3000,
      success: function () {
        wx.navigateBack({
          delta: 1,
        })
      }
    })

  },

  // 若数据库没有将Storage数据渲染
  getformData() {
    const {
      worktext,
      workcity,
      gerenyoushi,
      gongzuojingli,
      jiaoyujigli,
      xiangmujingli,
      radioChecked
    } = wx.getStorageSync('formData')
    // console.log(formData)

    this.setData({
      worktext,
      workcity,
      gerenyoushi,
      gongzuojingli,
      jiaoyujigli,
      xiangmujingli,
      radioChecked
    })

  },

  //选择器部分
  checkcity() {
    wx.navigateTo({
      url: '/pages/logs_Bio_yuyue_city/logs_Bio_yuyue_city',
    })
  },
  checkwork() {
    wx.navigateTo({
      url: '/pages/logs_Bio_yuyue_work/logs_Bio_yuyue_work',
    })
  },

  // 获取登录用户
  getCurrentUser() {
    if (wx.getStorageSync('currentUser') !== '') {
      this.setData({
        userlist: wx.getStorageSync('currentUser'),
        show: false
      })
    }
  },

  getjiali(id) {
    // 查找简历
    var pro = common.findJianli(id)
    pro.then((res) => {
      console.log(res)
      if (res.data === null) {
        this.getformData();
        return
      }
      let {
        avatar,
        name,
        worktext,
        workcity,
        gerenyoushi,
        gongzuojingli,
        jiaoyujigli,
        xiangmujingli,
        radioChecked,
        uuid,
        radio
      } = res.data.formData
      this.setData({
        userlist: res.data.formData,
        worktext,
        workcity,
        gerenyoushi,
        gongzuojingli,
        jiaoyujigli,
        xiangmujingli,
        radioChecked,
        show: false,
        disabled: true
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    if (options.id) {
      // 从后台进入别人简历
      this.getjiali(options.id)
    } else {
      // 前台查看自己简历
      this.getCurrentUser();
      this.getjiali(this.data.userlist.uuid);
    }


    // console.log(options)
    // var arr = []
    // for (var i in options) {
    //   arr.push(options[i])
    // }
    // var workId = arr[1]
    // console.log(workId, 'workId')
    // if (taskId) {
    //   this.setData({
    //     taskId: false,
    //   })
    // }


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
    if (wx.getStorageSync('cityid') !== '') {
      const id = wx.getStorageSync('cityid');
      this.data.citys.forEach(item => {
        if (item.id == id) {
          this.setData({
            workcity: item.text
          })
        }
      })
    }
    if (wx.getStorageSync('workname')) {
      const name = wx.getStorageSync('workname');
      console.log(name)
      this.setData({
        worktext: name
      })
    }
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