// pages/first/first.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  goToHomePage:function(){
    wx.switchTab({
        url: '/pages/students/students',
      })
  },

  onLoad(options) {

  },
})