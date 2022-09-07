var express = require("express")

// 创建路由
var router = express.Router()

// 导入数据库model模块
var model = require("./model")

// 导入表
var friends = model.friends
var groups = model.groups
var favorites = model.favorites
var lyns = model.lyns
var janlis = model.janlis
var gangweis = model.gangweis

/**
 * @api {get} /getNewsList 获取公司列表
 * @apiName Add
 * @apiGroup 公司列表
 *
 * @apiParam {} 
 *
 * @apiSuccess {String} docs
 * @apiSuccess {String} docs
 */
router.get('/getNewsList', function (req, res) {
    // console.log(req.query)
    // 按地区、不分页
    if (req.query.pageNo === 'undefined' || req.query.pageSize === 'undefined') {
        return friends.find({}, (err, docs) => {
            if (err) {
                console.log("查询失败--不分页31行")
            } else {
                res.json(docs)
            }
        })
    }
    // 不安地区、分页
    let pageNo = req.query.pageNo;
    let pageSize = req.query.pageSize;
    let skip = (parseInt(pageNo) - 1) * parseInt(pageSize);
    let data = []

    friends.find({}, (err, docs) => {
        if (err) {
            console.log("分页查询失败")
        } else {
            // console.log('0', docs)
            data.push(docs)
            // res.json(docs)
        }
    }).skip(skip).limit(parseInt(pageSize)) //分页

    friends.find({}, (err, docs) => {
        if (err) {
            console.log("total查询失败55行")
        } else {
            data.push({
                total: docs
            })
            res.json(data)
        }
    }).count() //总数total
})

// 获取招聘内容
/**
 * @api {get} /getNewsList 获取招聘内容
 * @apiName Add
 * @apiGroup 公司列表
 *
 * @apiParam {Number}  id
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  docs.
 */
router.get("/getNewsDetail", (req, res) => {
    let id = req.query.id
    friends.findOne({
        uuid: id
    }, (err, docs) => {
        if (err) {
            console.log("查询失败82行")
        } else {
            res.json(docs)
        }
    })
})


// 发布岗位
router.post("/api/setFabu", async (req, res) => {
    let body = req.body.formObj
    // console.log("body", body)
    friends.create({
        'title': body.title,
        'price': body.price,
        'uuid': body.uuid,
        'company': body.company,
        'NumberP': body.NumberP,
        'financing': body.financing,
        'Years': body.Years,
        'education': body.education,
        'technology1': body.technology1,
        'technology2': body.technology2,
        'technology3': body.technology3,
        'avatar': body.avatar,
        'name': body.name,
        'password': body.password,
        'region': body.region,
        'latitude': body.latitude,
        'longitude': body.longitude,
        'content': body.content
    }, (err, docs) => {
        if (err) {
            console.log("发布失败115行")
        } else {
            res.json(docs)
        }
    })
})

// 删除岗位
router.post("/api/deleteWork", function (req, res) {
    // 获取post数据
    // console.log(req.body.id)
    const { id } = req.body
    // console.log('id', id)
    friends.deleteOne({ "uuid": id }, (err, doc) => {
        if (err) {
            console.log("删除失败")
            res.json({
                message: 1
            })
        } else {
            console.log("删除成功")
            res.json({
                message: 0
            })
        }
    })
})

// 获取通讯录列表
router.get("/getFriendsList", (req, res) => {
    friends.find({}, (err, docs) => {
        if (err) {
            console.log("获取通讯录列表失败")
        } else {
            res.json(docs)
        }
    })
})

// 获取groups群列表
router.get("/getGroupsList", (req, res) => {
    groups.find({}, (err, docs) => {
        if (err) {
            console.log("获取群列表失败")
        } else {
            res.json(docs)
        }
    })
})

// 进入群聊
router.get("/getGroupById", (req, res) => {
    let id = req.query.to
    groups.findOne({
        uuid: id
    }, (err, docs) => {
        if (err) {
            console.log("进入群聊失败")
        } else {
            res.json(docs)
        }
    })
})

// 进入私聊聊
router.get("/getUserById", (req, res) => {
    let id = req.query.to
    friends.findOne({
        uuid: id
    }, (err, docs) => {
        if (err) {
            console.log("进入私聊失败")
        } else {
            res.json(docs)
        }
    })
})

// 群成员
// router.get("/findGroupMembers", (req, res) => {
//     let members = [];
//     let id = req.query.id
//     groups.find({ uuid: id }, (err, docs) => {
//         if (err) {
//             console.log("获取群成员失败")
//         } else {
//             var vid = docs[0].userList
//             var user = friends.find({}, (err, doc) => {
//                 if (err) {
//                     console.log("获取通讯录列表失败")
//                 } else {
//                     console.log(doc)
//                     return doc
//                 }
//             })
//             getArrEqual(arr1, arr2){
//                 let newArr = [];
//                 for (let i = 0; i < arr2.length; i++) {
//                     for (let j = 0; j < arr1.length; j++) {
//                         if (arr1[j] === arr2[i]) {
//                             newArr.push(arr1[j]);
//                         }
//                     }
//                 }
//                 return newArr;
//             }
//         }
//     })
// })

// 登录
router.post("/api/login", (req, res) => {
    let username = req.body.username
    let password = req.body.password
    friends.findOne({
        $and: [{
            "name": username
        }, {
            "password": password
        }]
    }, (err, docs) => {
        if (err) {
            console.log("Private失败")
        } else {
            if (docs) {
                user = {
                    uuid: docs.uuid,
                    name: docs.name,
                    avatar: docs.avatar
                }

            } else {
                user = "false"
            }
            res.json({
                user: user
            })
        }
    })
})

// 将投递过简历的岗位保存
router.post("/api/setGangwei", function (req, res) {
    let nickname = req.body.nickname
    let article = req.body.article
    gangweis.create({
        "nickname": nickname,
        "article": article
    }, (err, doc) => {
        if (err) {
            console.log("插入失败")
            res.json({
                message: 1
            })
        } else {
            // console.log(doc)
            res.json({
                message: 0
            })
        }
    })
})


// 获取投递过简历的岗位
router.get("/api/getGangwei", function (req, res) {
    // 获取post数据
    let nickname = JSON.parse(req.query.nickname)
    // console.log(nickname)
    gangweis.find({ "nickname": nickname }, (err, doc) => {
        if (err) {
            console.log("查询失败")
        } else {
            // console.log('收藏夹', doc)
            res.json(doc)
        }
    })
})

//删除已投递过简历的岗位
router.post("/api/deleteYitoudiGangwei", function (req, res) {
    // 获取post数据
    // console.log(req.body)
    let nickname = req.body.nickname
    let taskId1 = req.body.taskId1
    gangweis.deleteOne({
        $and: [{
            "nickname": nickname
        }, {
            "article.uuid": taskId1
        }]
    }, (err, doc) => {
        if (err) {
            console.log("删除失败")
            res.json({
                message: 1
            })
        } else {
            // console.log(doc)
            res.json({
                message: 0
            })
        }
    })
})

// 收藏
router.post("/api/setFavorites", function (req, res) {
    // 获取post数据
    // console.log(req.body)
    nickname = req.body.nickname
    article = req.body.article
    favorites.create({
        "nickname": nickname,
        "article": article
    }, (err, doc) => {
        if (err) {
            console.log("插入失败")
            res.json({
                message: 1
            })
        } else {
            // console.log(doc)
            res.json({
                message: 0
            })
        }
    })
})

// 发送简历
router.post("/api/setJianli", function (req, res) {
    // 获取post数据
    // console.log(req.body)
    const taskId1 = req.body.taskId1
    const formData = req.body.formData
    janlis.create({
        "taskId1": taskId1,
        "formData": formData
    }, (err, doc) => {
        if (err) {
            console.log("简历保存失败")
            res.json({
                message: 1
            })
        } else {
            // console.log(doc)
            res.json({
                message: 0
            })
        }
    })
})

// 获取简历列表
router.get("/api/getJianli", function (req, res) {
    // 获取post数据
    const taskId1 = req.query.taskId1
    janlis.find({ 'taskId1': taskId1 }, (err, doc) => {
        if (err) {
            console.log("获取简历列表失败")
        } else {

            res.json(doc)
        }
    })
})

// 删除简历
router.post("/api/deleteWork1", function (req, res) {
    // 获取post数据
    // console.log(req.body)
    let currentId = req.body.currentId
    let id = req.body.id
    janlis.deleteOne({
        $and: [{
            "taskId1": currentId
        }, {
            "formData.uuid": id
        }]
    }, (err, doc) => {
        if (err) {
            console.log("删除失败")
            res.json({
                message: 1
            })
        } else {
            // console.log(doc)
            res.json({
                message: 0
            })
        }
    })
})

// 查找简历
router.post("/api/findJianli", function (req, res) {
    // 获取post数据
    // console.log(req.body)
    let id = req.body.id
    janlis.findOne({ "formData.uuid": id }, (err, doc) => {
        if (err) {
            console.log("查找简历失败")
            res.json({
                message: 1
            })
        } else {
            // console.log(doc)
            res.json(doc)
        }
    })
})

// 获取收藏列表
router.get("/api/listFavorites", function (req, res) {
    // 获取post数据
    favorites.find({}, (err, doc) => {
        if (err) {
            console.log("查询失败")
        } else {
            console.log('收藏夹', doc)
            res.json(doc)
        }
    })
})

// 取消收藏
router.post("/api/removeFavorites", function (req, res) {
    // 获取post数据
    // console.log(req.body)
    nickname = req.body.nickname
    article = req.body.article
    favorites.deleteOne({
        $and: [{
            "nickname": nickname
        }, {
            "article.id": article.id
        }]
    }, (err, doc) => {
        if (err) {
            console.log("删除失败")
            res.json({
                message: 1
            })
        } else {
            // console.log(doc)
            res.json({
                message: 0
            })
        }
    })
})

// 检查当前新闻是否在收藏夹中
router.post("/api/getFavorites", function (req, res) {
    // 获取post数据
    // console.log(req.body)
    nickname = req.body.nickname
    favorites.find({
        "nickname": nickname
    }, (err, docs) => {
        if (err) {
            console.log("获取收藏夹失败")
        } else {
            // console.log(docs)
            res.json(docs)
        }
    })
})

// 评论
router.post("/api/setLyns", function (req, res) {
    // 获取post数据
    // console.log(req.body)
    id = req.body.nickname
    inputValue = req.body.article
    lyns.create({
        "hdlist": id,
        "content": inputValue
    }, (err, doc) => {
        if (err) {
            console.log("插入失败")
            res.json({
                message: 1
            })
        } else {
            // console.log(doc)
            res.json({
                message: 0
            })
        }
    })
})

// 获取评论
router.post("/api/getLyns", function (req, res) {
    // 获取post数据
    // console.log(req.body)
    id = req.body.nickname
    lyns.find({
        "hdlist": id
    }, (err, docs) => {
        if (err) {
            console.log("获取评论失败")
        } else {
            console.log(docs, '395行')
            res.json(docs)
        }
    })
})


module.exports = router