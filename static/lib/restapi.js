function RestApi() {

}

// 获取通讯录列表
RestApi.prototype.findFriends = function () {
    // var friendList = users.filter(v => v.uuid != user.uuid);
    var promise = new Promise(function (resolve, reject) {
        wx.request({
            url: 'http://127.0.0.1:3000/getFriendsList',
            method: "GET",
            success: (res) => {
                // console.log(res.data)
                resolve(res.data)
            }
        })
    })
    return promise;
}

// 获取群列表
RestApi.prototype.findGroups = function (user) {
    var promise = new Promise(function (resolve, reject) {
        wx.request({
            url: 'http://127.0.0.1:3000/getGroupsList',
            method: "GET",
            success: (res) => {
                // console.log(res.data)
                resolve(res.data)
            }
        })
    })
    return promise;
}

// 登录验证
RestApi.prototype.findUser = function (username, password) {
    var promise = new Promise((resolve, reject) => {
        wx.request({
            url: 'http://127.0.0.1:3000/api/login',
            method: "POST",
            data: {
                username: username,
                password: password
            },
            success: ((res) => {
                resolve(res.data.user)
            })
        })
    })
    return promise
}

// 进入群聊
RestApi.prototype.findGroupById = function (groupId) {
    var promise = new Promise(function (resolve, reject) {
        wx.request({
            url: 'http://127.0.0.1:3000/getGroupById?to=' + groupId,
            method: "GET",
            success: (res) => {
                resolve(res.data)
            }
        })
    })
    return promise;
};

// 进入私聊
RestApi.prototype.findUserById = function (userId) {
    var promise = new Promise(function (resolve, reject) {
        wx.request({
            url: 'http://127.0.0.1:3000/getUserById?to=' + userId,
            method: "GET",
            success: (res) => {
                resolve(res.data)
            }
        })
    })
    return promise;
};

// 群成员
RestApi.prototype.findGroupMembers = function (groupId) {
    // let members = [];
    // let group = groups.find(v => v.uuid == groupId);
    // users.map(user => {
    //     if (group.userList.find(v => v == user.uuid)) {
    //         members.push(user)
    //     }
    // });
    // return members;

    var promise = new Promise(function (resolve, reject) {
        wx.request({
            url: 'http://127.0.0.1:3000/findGroupMembers?id=' + groupId,
            method: "GET",
            success: (res) => {
                let group = res.data
                console.log(group)
                let members = [];
                res.map(user => {
                    if (group.userList.find(v => v == user.uuid)) {
                        members.push(user)
                    }
                });
                resolve(members)
            }
        })
    })
    return promise;
}

export default new RestApi();