// pages/students/students.js
Page({
    data: {
      stuid: '',
      responseData: null,
      showImage:false
    },
    navigateToModify: function() {
        wx.navigateTo({
          url: '/pages/modify/modify',
        })
      },
    handleInput: function(e) {
      this.setData({
        stuid: e.detail.value
      })
    },
    handleAjax: function() {
        
      let url = `http://localhost:7777/many/findStudents?stuid=${this.data.stuid}`
      wx.request({
        url: url,
        success: res => {
          let data = res.data
          if (data.length === 0) {
            // 如果响应数据为空，弹出提示框
            wx.showToast({
              title: '该学号不存在',
              icon: 'none'
            })
            // 将 responseData 设为 null，以防止显示空白数据
            this.setData({
              responseData: null,
              showImage:false
            })
          } else {
            this.setData({
              responseData: data,
              showImage:true
            })
          }
        },
        fail: err => {
          // 如果请求失败，弹出提示框
          wx.showToast({
            title: '请求失败，请检查网络连接',
            icon: 'none'
          })
        }
      })
    }
  })