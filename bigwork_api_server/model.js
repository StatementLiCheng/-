
// 导入mongoose模块
var mongoose = require("mongoose")
// 设置连接字符
var DB_URL = "mongodb://127.0.0.1:27017/RedMedal"
// 连接数据库
// {useNewUrlParser: true, useUnifiedTopology: true}
mongoose.connect(DB_URL)

// 创建RedMedal数据库Friends表单
const FriendsSchema = new mongoose.Schema({
    uuid: { type: String },
    title: { type: String },
    price: { type: String },
    company: { type: String },
    NumberP: { type: String },
    financing: { type: String },
    Years: { type: String },
    education: { type: String },
    technology1: { type: String },
    technology2: { type: String },
    technology3: { type: String },
    avatar: { type: String },
    name: { type: String },
    password: { type: String },
    region: { type: String },
    latitude: { type: Number },
    longitude: { type: Number },
    content: { type: String }
})
// 导出company模块
const friends = mongoose.model("Friends", FriendsSchema)


// 创建RedMedal数据库Friends表单
const GroupsSchema = new mongoose.Schema({
    uuid: { type: String },
    name: { type: String },
    avatar: { type: String },
    userList: [{ type: String }]
})
// 导出company模块
const groups = mongoose.model("Groups", GroupsSchema)


// 创建一个收藏夹集合
const FavoritesScame = new mongoose.Schema({
    nickname: {
        uuid: { type: String },
        name: { type: String },
        avatar: { type: String }
    },
    article: {
        uuid: { type: String },
        title: { type: String },
        price: { type: String },
        company: { type: String },
        NumberP: { type: String },
        financing: { type: String },
        Years: { type: String },
        education: { type: String },
        technology1: { type: String },
        technology2: { type: String },
        technology3: { type: String },
        avatar: { type: String },
        name: { type: String },
        password: { type: String },
        region: { type: String },
        latitude: { type: Number },
        longitude: { type: Number },
        content: { type: String }
    }
})
const favorites = mongoose.model("Favorites", FavoritesScame)


// 创建已投递过简历的岗位
const GangweisScame = new mongoose.Schema({
    nickname: {
        uuid: { type: String },
        name: { type: String },
        avatar: { type: String }
    },
    article: {
        uuid: { type: String },
        title: { type: String },
        price: { type: String },
        company: { type: String },
        NumberP: { type: String },
        financing: { type: String },
        Years: { type: String },
        education: { type: String },
        technology1: { type: String },
        technology2: { type: String },
        technology3: { type: String },
        avatar: { type: String },
        name: { type: String },
        password: { type: String },
        region: { type: String },
        latitude: { type: Number },
        longitude: { type: Number },
        content: { type: String }
    }
})
const gangweis = mongoose.model("Gangweis", GangweisScame)


// 创建一个简历集合 用来保存发送的简历
const JanliScame = new mongoose.Schema({
    taskId1: { type: String },
    formData: {
        radio: { type: String },
        gerenyoushi: { type: String },
        gongzuojingli: { type: String },
        xiangmujingli: { type: String },
        jiaoyujigli: { type: String },
        radioChecked: { type: String },
        workcity: { type: String },
        worktext: { type: String },
        avatar: { type: String },
        name: { type: String },
        uuid: { type: String },
    }
})
const janlis = mongoose.model("Janlis", JanliScame)

// 创建一个评论
const LynsScame = new mongoose.Schema({
    hdlist: { type: String },
    content: { type: String }
})
const lyns = mongoose.model("Lyns", LynsScame)




module.exports = {
    friends: friends,
    groups: groups,
    favorites: favorites,
    lyns: lyns,
    janlis:janlis,
    gangweis:gangweis,
}