const mongoose = require('mongoose'); //加载包
mongoose.connect('mongodb://localhost/test');//连接mongoDB数据库
// 设计数据库
const Cat = mongoose.model('Cat', { name: String });
// //实例化一个cat
// const kitty = new Cat({ name: 'Zildjian' });
// //永久保存kitty实例
// kitty.save().then(() => console.log('meow'));
for (let i = 0; i < 10; i++) {
    //实例化一个cat
    const kitty = new Cat({ name: 'Zildjian' +i});
    //永久保存kitty实例
    kitty.save().then(() => console.log('meow'));
}
