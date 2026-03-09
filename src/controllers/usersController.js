const xss = require("xss");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//ユーザ一覧を返す
exports.getUsers = async (req,res) => {
    try{
        const users = await prisma.users.findMany();
        res.status(200).json(users);
    }catch(e){
        res.status(500).json({error:"Server Error"});
    }
};

//ユーザを登録する
exports.postUsers = async (req,res) => {
    try{
        const name  = xss(req.body.name);
        const email = xss(req.body.email);
        const age   = req.body.age ? Number(req.body.age) : null;

        if( !name || !email ){
            return res.status(400).json({error:"nameとメールアドレスは必須です"});
        }

        const user = await prisma.users.create({
            data: { name, email, age }
        });

        res.status(200).json({
            message:"User Create",
            user: user
        });

    }catch(e){
        res.status(400).json({err:"Invaild error"});
    }
};

//ユーザ更新
exports.putUsers = async (req,res) => {

    try{
        //バリデーションチェック
        const id    = req.params.id;
        const name  = xss(req.body.name);
        const email = xss(req.body.email);
        const age   = req.body.age ? Number(req.body.age) : null;

        //nameとemailは必須
        if( !name || !email ){
            res.status(400).json({err:"name or email invaild"});
            return;
        }

        //ユーザ更新
        const user = await prisma.users.update({
            where: { id },
            data: {name, email, age}
        });

        res.status(200).json({
            message:"User Update",
            user:user
        });

    }catch(e){
        res.status(400).json({err:"Invaild error"});
    }
};

//ユーザ削除
exports.deleteUsers = async (req,res) => {
    const id = req.params.id;

    try{
        await prisma.users.delete({
            where: {id}
        });

        res.status(200).json({message: "User delete"});

    }catch(e){
        res.status(400).json({err:"Invaild"});
    }
};