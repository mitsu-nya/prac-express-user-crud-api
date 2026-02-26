//const { json } = require("express");
async function message(msg){
    const msg1 = "ユーザを登録しました";
    const msg2 = "ユーザを更新しました";
    const msg3 = "ユーザを削除しました";

    if(msg === "User Create"){
        resultview.innerHTML = `<p style="font-size: 20px color: red">${msg1}<p>`;
    }else if( msg === "User Update"){
        resultview.innerHTML = `<p style="font-size: 20px color: red">${msg2}<p>`;
    }else if( msg === "User delete"){
        resultview.innerHTML = `<p style="font-size: 20px color: red">${msg3}<p>`;
    }else{
        resultview.innerHTML = `<p style="font-size: 20px color: red">失敗しました<p>`;
    }
}

async function loadUsers() {
    const view = document.getElementById("getusersview");
    const res = await fetch("http://localhost:3000/api/users");
    const json = await res.json();

    const rows = json.map(item => `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td><button class="editBtn" data-id="${item.id}">編集</button></td>
                <td><button class="deleBtn" data-id="${item.id}">削除</button></td>
            </tr>
        `).join("");
    
    view.innerHTML = `<table>
                            <tr>
                                <th>ID</th>
                                <th>name</th>
                                <th>email</th>
                                <th>編集</th>
                                <th>削除</th>
                            </tr>
                            ${rows}
                      </table>`;
    
    //ユーザ更新
    document.querySelectorAll(".editBtn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.id;
            const user = json.find( u => u.id == id );

            document.getElementById("userid").value = user.id;
            document.getElementById("username").value = user.name;
            document.getElementById("useremail").value = user.email;
        });
    });

    //ユーザ削除
    document.querySelectorAll(".deleBtn").forEach( btn => {
        btn.addEventListener("click", async () => {
            const id = btn.dataset.id;
            //console.log(id);
            //削除してよいか聞く
            if(window.confirm("ID：" + id + "のユーザを削除してよいですか")){
                const res = await fetch(`http://localhost:3000/api/users/delete/${id}`,{
                    method: "DELETE"
                });

                const result = await res.json();
                message(result.message);

                //読み込み
                loadUsers();
            }
        });
    });
}

window.onload = function(){
    loadUsers();
};

//ユーザ登録
document.getElementById("usercreatefrom").addEventListener("submit", async(e) => {
    //ページリロード防止
    e.preventDefault();

    const resultview = document.getElementById("resultview");

    const id    = document.getElementById("userid").value;
    const name  = document.getElementById("username").value;
    const email = document.getElementById("useremail").value;

    //登録か更新の分岐
    if( id === ""){
        const res = await fetch("http://localhost:3000/api/users/create",{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
        });

        const result = await res.json();
        message(result.message);

    }else{
        const res = await fetch(`http://localhost:3000/api/users/update/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
        });

        const result = await res.json();
        message(result.message);
    }

    //入力後クリア
    document.getElementById("userid").value = "";
    document.getElementById("username").value = "";
    document.getElementById("useremail").value = "";

    //反映
    loadUsers();
});