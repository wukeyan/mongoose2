const mongoose = require('mongoose'); //加载包
mongoose.connect('mongodb://localhost/test');//第一步：连接本机的test数据库，如果没有test这个数据库，当你插入第一条数据之后的，
// 这个数据库会被创建
//提出mongoose的架构
var Schema = mongoose.Schema;
//第二步：设计集合结构（表结构）
//约束的目的是保证表的完整性，不出‘脏’数据
var userSchema = new Schema({
    username: {
        type: String,
        required: true //表示username这条数据必须有
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String   //这条数据可有可无
    }
})

//第三步：将文档发布为模型
//mongoose.model方法就是将一个建构发布为模型
//括号的第一个参数：传入一个大写名词单数字符串来表示数据库的名称
//mongoose会自动将User-->users
var User = mongoose.model('User', userSchema) //返回值：模型构造函数

// 第四步：当我们有了模型构造函数之后就可以使用它对User数据库增删查改了

//1，增加数据（格式按照第二步中的表的结构来）
// var admin = new User({
//     username: '张三',
//     password: '123456',
//     email: '123456@qq.com'
// })
// admin.save(function (err, ret) { //将数据持久化
//     if (err) {
//         console.log('保存失败')
//     }
//     else
//         console.log('保存成功')
//         console.log(ret)
// })

// 2，查询数据.find()是查询所有
// User.find(function (err, ret) {
//     if (err) {
//         console.log('查询失败')
//     }
//     else
//         console.log('查询成功')
//     console.log(ret)
// })

// 2.1按条件查询User.find({条件},function(){})
// User.find({ username: '张三' }, function (err, ret) {
//     if (err) {
//         console.log('查询失败')
//     }
//     else
//         console.log('查询成功')
//         console.log(ret)
// })

// 2.1按条件查询,只查询符合条件的第一条User.findOne({条件}，function(){})，当没有条件的时候findOne()就查找User数据库的第一条
// User.findOne({ username: '张三',password:'123456' }, function (err, ret) {  //查询名字叫张三，密码是123456的数据
//     if (err) {
//         console.log('查询失败') 
//     }
//     else
//         console.log('查询成功')
//         console.log(ret)
// })

// 3，删除数据 
// User.remove({username:'张三'},function(err,ret){  //删除用户名叫做张三的数据
//     if(err){
//         console.log('删除失败')
//     }
//     else
//     console.log('删除成功')
// })

//修改（更新）数据
// User.findByIdAndUpdate('5e229d490b119b3514748e32', { password: '123' }, function (err, ret) {
//     if (err) {
//         console.log('修改失败')
//     }
//     else
//         console.log()
// })

User.find(function (err, ret) {
    if (err) {
        console.log('查询失败')
    }
    else
        console.log('查询成功')
    console.log(ret)
})



