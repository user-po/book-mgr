const mongoose = require("mongoose");
//给哪个数据库
//哪个集合
//什么格式的文档

//Schema  schema 都会映射到一个 MongoDB collection ，并定义这个collection里的文档的构成。
//Modal 可以理解成根据Schema生成的一套方法 操作mdb集合及其文档

const UserSchema = new mongoose.Schema({
  nickname: String,
  password: String,
  age: Number,
});
//集合的名字User 集合文档的格式userSchema

const UserModal = mongoose.model("User", UserSchema);
const connect = () => {
  //去链接数据库
  mongoose.connect("mongodb://127.0.0.1:27017/book-mgr");

  // 当数据库被打开的时候做一些事情
  mongoose.connection.on("open", () => {
    console.log("连接成功");
    // model 是我们构造 document 的 Class
    const user = new UserModal({
      nickname: "小明",
      password: "123456",
      age: 12,
    });
    //同步过去
    user.save();
  });
};

connect();
