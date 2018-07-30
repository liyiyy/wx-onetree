// pages/login/login.js

const app = getApp()
import config from '../../utils/require.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log(this.data.canIUse)
  },
  onGotUserInfo(e) {
    console.log(e)
    if (!e.detail.userInfo) {
      this.authorization()
    }else{
      app.baserequire(config.loginUrl, "POST", e.detail.userInfo).then(res => {
        if (res.code == 0) {
          this.setData({
            imgUrls: res.data.imgs
          })
        } else {
          wx.showToast({
            title: '请求失败',
            icon: 'none'
          })
        }
      })
    }
  },
  //  授权循环
  authorization() {
    var that = this;
    wx.showModal({
      title: '温馨提示',
      content: '用户拒绝，如果拒绝授权，则不能登录，是否重新授权',
      showCancel: true,
      confirmText: "重新授权",
      success: function (res) {
        if (res.confirm) {
          wx.openSetting({
            success: function (res) {
              if (!res.authSetting["scope.userInfo"]) {
                that.authorization()
              }
            },
            fail: function (res) { },
            complete: function (res) { },
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