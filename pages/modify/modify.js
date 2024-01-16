// pages/modify/modify.js
Page({
    data: {  
        options: ["请选择修改内容", "删除学生", "删除课程", "删除指定的学生和课程", "临时给学生加课"],  
        selectedValue: 0,  
        inputValue: '',
      },  
        
      handleInputChange(event) {  
        this.setData({  
          inputValue: event.detail.value  
        });  
      },  
        
      handlePickerChange(event) {  
        const { value } = event.detail;  
        this.setData({  
          selectedValue: value  
        });  
        
      },  
        
      handleConfirm() {
        const selectedValue = this.data.selectedValue;  
          if(selectedValue === '1'){
              this.deleteStu();
          }else if(selectedValue === '2') {
              this.deleteCor();
          }else if(selectedValue === '3'){
              this.delSingle();
          }else if(selectedValue === '4'){
              this.insert();
          }
      },
      deleteStu() {  
        const stuid = this.data.inputValue;
        wx.request({
          url: `http://localhost:7777/many/deleteStu/?stuid=${stuid}`,
          method: 'DELETE',
          success(res) {
            console.log(res.data);
          },
          fail(error) {
            console.log(error);
          }
        });
      },
      deleteCor() {  
        const corid = this.data.inputValue;
        wx.request({
          url: `http://localhost:7777/many/deleteCor/?corid=${corid}`,
          method: 'DELETE',
          success(res) {
            console.log(res.data); 
          },
          fail(error) {
            console.log(error); 
          }
        }); 
        
      },
      delSingle() {
        const inputParams = this.data.inputValue.split(' ');
        const stuid = inputParams[0]; 
        const corid = inputParams[1];
        wx.request({
          url: `http://localhost:7777/many/delSingle/?stuid=${stuid}&corid=${corid}`,
          method: 'DELETE',
          success(res) {
            console.log(res.data); // 处理接口返回的数据
          },
          fail(error) {
            console.log(error); // 处理请求失败的情况
          }
        });
      },
      insert() {
        const inputParams = this.data.inputValue.split(' ');
        const stuname = inputParams[0]; 
        const corname = inputParams[1];
        wx.request({
          url: `http://localhost:7777/many/insert/?stuname=${stuname}&corname=${corname}`,
          method: 'GET',
          success(res) {
            console.log(res.data); // 处理接口返回的数据
          },
          fail(error) {
            console.log(error); // 处理请求失败的情况
          }
        });
       

      },
      handleReset() {
        wx.navigateBack({
          delta: 1, 
        });
      },

      onLoad() {  
      }  
    });