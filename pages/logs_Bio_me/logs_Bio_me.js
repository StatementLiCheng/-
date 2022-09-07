// pages/logs_Bio_me/logs_Bio_me.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
const dates = {
  1995: ['01', '02', '03', '04', '05','06','07','08','09','10','11','12'],
  1996: ['01', '02', '03', '04', '05','06','07','08','09','10','11','12'],
  1997: ['01', '02', '03', '04', '05','06','07','08','09','10','11','12'],
  1998: ['01', '02', '03', '04', '05','06','07','08','09','10','11','12'],
  1999: ['01', '02', '03', '04', '05','06','07','08','09','10','11','12'],
  2000: ['01', '02', '03', '04', '05','06','07','08','09','10','11','12'],
  2001: ['01', '02', '03', '04', '05','06','07','08','09','10','11','12'],
 
};
Page({

  /**
   * 页面的初始数据
   */
 
  data: {
    columns: [
      {
        values: Object.keys(dates),
        className: 'column1',
      },
      {
        values: dates['1995'],
        className: 'column2',
        defaultIndex: 2,
      },
    ],
    radio1: '1',
    radio2: '1',
    show:false,
    group_dates:['1998','01']
  },
  onChange1(event) {
    this.setData({
      radio: event.detail,
    });
  },
  onChange2(event) {
    this.setData({
      radio: event.detail,
    });
  },
  // 选择器
  onCancel:function(){
    Toast('取消');
    this.setData({
      show:false,
      
    })
  },
  onConfirm:function(event){
    const { picker, value, index } = event.detail;
    Toast(`当前值：${value}, 当前索引：${index}`);
    // console.log(event);
    this.setData({
      show:false,
      group_dates:event.detail.value
    })
  },
  // 弹出层弹出
  group_date:function(){
    this.setData({
      show:true
    })
  },
  // 弹出层关闭
  onClose:function(){
    this.setData({
      show:false
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