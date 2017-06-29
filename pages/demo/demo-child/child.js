// child.js
var data=require('../../../data/data.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
  
  },
  col:function(){
    let qq=wx.getStorageSync('obj')
    console.log(qq);
    let postid=this.data.postid
    qq[postid]=!qq[postid]

    wx.setStorageSync("obj",qq)
    this.setData({
      collected:qq[postid]
    })
    wx.showToast({
      title: qq[postid]?'收藏成功':'取消收藏',
      icon: 'success',
      duration: 1500,
      mask:true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    
    var id=options.id;
    this.setData({
      info: data.list[id],
      postid:id
    });

    var qq=wx.getStorageSync('obj')

    if(qq){
      this.setData({
        collected:qq[id]
      })
    }else{
      qq={};
      qq[id]=false;
      wx.setStorageSync("obj", qq)
    };

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
    wx.hideLoading()
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