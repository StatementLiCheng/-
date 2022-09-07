// 获取公司列表发起请求
function getNewsList(pageNo, pageSize) {
  var promise = new Promise(function (resolve, reject) {
    wx.request({
      url: 'http://127.0.0.1:3000/getNewsList',
      method: "GET",
      data: {
        pageNo,
        pageSize
      },
      success: (res) => {
        console.log(res.data)
        resolve(res.data)
      }
    })
  })
  return promise;
}

// 获取招聘内容
function getNewsDetail(id) {
  var promise = new Promise(function (resolve, reject) {
    wx.request({
      url: 'http://127.0.0.1:3000/getNewsDetail?id=' + id,
      method: "GET",
      success: (res) => {
        resolve(res.data)
      }
    })
  })
  return promise;
}


// 获取privateChat内容
function getPrivate(uuid) {
  // console.log(uuid)
  var promise = new Promise(function (resolve, reject) {
    wx.request({
      url: 'http://127.0.0.1:3000/getPrivate?id=' + uuid,
      method: "GET",
      success: (res) => {
        resolve(res.data)
      }
    })
  })
  return promise;
}

// 将投递过简历的岗位保存
function setGangwei(nickname, article) {
  var promise = new Promise(function (resolve, reject) {
    wx.request({
      url: 'http://127.0.0.1:3000/api/setGangwei',
      method: "POST",
      header: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      data: {
        nickname: nickname,
        article: article
      },
      success: (res) => {
        // console.log(res.data.message)
        resolve(res.data.message)
      }
    })
  })
  return promise;
}

// 获取已投递过简历的岗位
function getGangwei(nickname) {
  var promise = new Promise(function (resolve, reject) {
    wx.request({
      url: 'http://127.0.0.1:3000/api/getGangwei',
      method: "GET",
      header: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      data: {
        nickname: nickname,
      },
      success: (res) => {
        // console.log(res.data.message)
        resolve(res.data)
      }
    })
  })
  return promise;
}
// 删除已投递过简历的岗位
function deleteYitoudiGangwei(nickname,taskId1){
  // console.log(id)
  var promise = new Promise(function (resolve, reject) {
    wx.request({
      url: 'http://127.0.0.1:3000/api/deleteYitoudiGangwei',
      method: "POST",
      header: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      data: {
        nickname:nickname,
        taskId1: taskId1,
      },
      success: (res) => {
        // console.log(res.data.message)
        resolve(res.data.message)
      }
    })
  })
  return promise;
}

// 收藏
function setFavorites(nickname, article) {
  var promise = new Promise(function (resolve, reject) {
    wx.request({
      url: 'http://127.0.0.1:3000/api/setFavorites',
      method: "POST",
      header: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      data: {
        nickname: nickname,
        article: article
      },
      success: (res) => {
        // console.log(res.data.message)
        resolve(res.data.message)
      }
    })
  })
  return promise;
}

// 取消收藏
function removeFavorites(nickname, article) {
  var promise = new Promise(function (resolve, reject) {
    wx.request({
      url: 'http://127.0.0.1:3000/api/removeFavorites',
      method: "POST",
      header: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      data: {
        nickname: nickname,
        article: article
      },
      success: (res) => {
        // console.log(res.data.message)
        resolve(res.data.message)
      }
    })
  })
  return promise;
}

// 发布岗位
function setFabu(formObj) {
  var promise = new Promise(function (resolve, reject) {
    wx.request({
      url: 'http://127.0.0.1:3000/api/setFabu',
      method: "POST",
      header: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      data: {
        formObj: formObj,
      },
      success: (res) => {
        // console.log(res.data.message)
        resolve(res.data.message)
      }
    })
  })
  return promise;
}

// 删除岗位
function deleteWork(id) {
  console.log(id)
  var promise = new Promise(function (resolve, reject) {
    wx.request({
      url: 'http://127.0.0.1:3000/api/deleteWork',
      method: "POST",
      header: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      data: {
        id: id,
      },
      success: (res) => {
        // console.log(res.data.message)
        resolve(res.data.message)
      }
    })
  })
  return promise;
}

// 删除简历
function deleteWork1(currentId,id){
  // console.log(id)
  var promise = new Promise(function (resolve, reject) {
    wx.request({
      url: 'http://127.0.0.1:3000/api/deleteWork1',
      method: "POST",
      header: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      data: {
        currentId:currentId,
        id: id,
      },
      success: (res) => {
        // console.log(res.data.message)
        resolve(res.data.message)
      }
    })
  })
  return promise;
}

// 查找简历
function findJianli(id){
  var promise = new Promise(function (resolve, reject) {
    wx.request({
      url: 'http://127.0.0.1:3000/api/findJianli',
      method: "POST",
      header: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      data: {
        id: id,
      },
      success: (res) => {
        // console.log(res.data.message)
        resolve(res)
      }
    })
  })
  return promise;
}

// 发送简历
function setJianli(taskId1, formData) {
  var promise = new Promise(function (resolve, reject) {
    wx.request({
      url: 'http://127.0.0.1:3000/api/setJianli',
      method: "POST",
      header: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      data: {
        taskId1,
        formData
      },
      success: (res) => {
        // console.log(res.data.message)
        resolve(res.data.message)
      }
    })
  })
  return promise;
}

// 获取简历列表
function getJianli(taskId1) {
  var promise = new Promise(function (resolve, reject) {
    wx.request({
      url: 'http://127.0.0.1:3000/api/getJianli',
      method: "GET",
      header: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      data: {
        taskId1,
      },
      success: (res) => {
        // console.log(res.data.message)
        resolve(res)
      }
    })
  })
  return promise;
}

// 检查当前新闻是否在收藏夹中
function getFavorites(nickname) {
  var promise = new Promise(function (resolve, reject) {
    wx.request({
      url: 'http://127.0.0.1:3000/api/getFavorites',
      method: "POST",
      header: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      data: {
        nickname: nickname
      },
      success: (res) => {
        resolve(res.data)
        // console.log(res.data)
      }
    })
  })
  return promise;
}

// 评论
function setLyns(nickname, article) {
  var promise = new Promise(function (resolve, reject) {
    wx.request({
      url: 'http://127.0.0.1:3000/api/setLyns',
      method: "POST",
      header: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      data: {
        nickname: nickname,
        article: article
      },
      success: (res) => {
        // console.log(res.data.message)
        resolve(res.data.message)
      }
    })
  })
  return promise;
}

// 获取评论
function getLyns(nickname) {
  var promise = new Promise(function (resolve, reject) {
    wx.request({
      url: 'http://127.0.0.1:3000/api/getLyns',
      method: "POST",
      header: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      data: {
        nickname: nickname
      },
      success: (res) => {
        resolve(res.data)
        // console.log(res.data)
      }
    })
  })
  return promise;
}


/**
 导出接口给其他模块应用
 */
module.exports = {
  getNewsList: getNewsList,
  getNewsDetail: getNewsDetail,
  getPrivate: getPrivate,
  setFavorites: setFavorites,
  removeFavorites: removeFavorites,
  getFavorites: getFavorites,
  setLyns: setLyns,
  getLyns: getLyns,
  setJianli: setJianli,
  setFabu: setFabu,
  deleteWork: deleteWork,
  getJianli:getJianli,
  deleteWork1:deleteWork1,
  findJianli:findJianli,
  setGangwei:setGangwei,
  getGangwei:getGangwei,
  deleteYitoudiGangwei:deleteYitoudiGangwei,
}