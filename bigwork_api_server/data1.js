mongo = new Mongo("localhost");
mydb = mongo.getDB("RedMedal");
groups = mydb.getCollection("groups");
groups.insertMany(
[
    {
        "uuid": "08c0a6ec-",
        "name": "RedMedal交流群",
        "avatar": '/static/images/wx.png',
        "userList": ['08c0a6ec-', '3bb179af-b', 'fdee46b0-4b0', '003']
    },
    {
        "uuid": "3bb179af-b",
        "name": "黄雅婕打call群",
        "avatar": '/static/images/uniapp.png',
        "userList": ['08c0a6ec-', '3bb179af-b', 'fdee46b0-4b0', '003']
    },
    {
        "uuid": "003",
        "name": "程序员植发群",
        "avatar": '/static/images/goeasy.jpeg',
        "userList":['08c0a6ec-', '3bb179af-b', 'fdee46b0-4b0', '003']
    }    
])