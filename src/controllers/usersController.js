let users = require("../models/users");

//ユーザ一覧を返す
exports.getUsers = (req,res) => {
    res.status(200).json(users);
};

//ユーザを登録する
exports.postUsers = (req,res) => {
    const data = req.body;

    //格納する
    try{
        //バリデーション
        if( !data.name || !data.email){
            return res.status(400).json({error:"nameとメールアドレスは必須です"});
        }

        const id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
        const user = {
            id: id,
            name: data.name,
            email: data.email
        };

        users.push(user);

        res.status(200).json({
            message:"User Create",
            user: user
        });

    }catch(e){
        res.status(400).json({err:"Invaild error"});
    }
};

//ユーザ更新
exports.putUsers = (req,res) => {
    const id = Number(req.params.id);
    const data = req.body;

    try{
        //バリデーションチェック
        //URLのidは数値
        if( Number.isNaN(id) ){
            res.status(400).json({err:"id invaild"});
            return;
        }
        //nameとemailは必須
        if( !data.name || !data.email ){
            res.status(400).json({err:"name or email invaild"});
            return;
        }

        //ユーザ検索
        const user = users.find(item => item.id === id);

        if(!user){
            return res.status(404).json({err:"User Not Found"});
        }

        //ユーザ更新
        user.name  = data.name;
        user.email = data.email;

        res.status(200).json({
            message:"User Update",
            user:user
        });

    }catch(e){
        res.status(400).json({err:"Invaild error"});
    }
};

//ユーザ削除
exports.deleteUsers = (req,res) => {
    const id = Number(req.params.id);

    if( Number.isNaN(id)) return res.status(400).json({err:"ID is invaild"});

    try{
        users = users.filter(item => item.id !== id);

        res.status(200).json({message: "User delete"});

    }catch(e){
        res.status(400).json({err:"Invaild"});
    }
};