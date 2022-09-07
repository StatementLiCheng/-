/* login.js */
import restapi from "../../static/lib/restapi";
var common = require("../../utils/common")
var app = getApp()
Page({
	data: {
		username: "",
		password: "",
		showError: false,
		qiehuan:true
	},
	login: function (e) {
		let username = e.detail.value.username;
		let password = e.detail.value.password;
		if (username.trim() !== "" && password.trim() !== "") {
			let pro = restapi.findUser(username, password);
			pro.then((user) => {
				console.log(user)
				if (user != "false") {
					wx.setStorageSync('currentUser', user);
					// 页面跳转
					if(this.data.qiehuan){
						wx.switchTab({
							url: '../conversations/conversations'
						});
					}else{
						wx.redirectTo({
						  url: '../fabu/fabu',
						})
					}
					return;
				}
				this.setData({
					showError: true
				});
				wx.setStorageSync({
					key: 'user',
					data: {
						'name': user.name,
						'img': user.avatar
					}
				})
			})
		}

	},
	zhaopin: function () {
		this.setData({
			qiehuan:!this.data.qiehuan
		})
	},
	onLoad: function (options) {

	},
})