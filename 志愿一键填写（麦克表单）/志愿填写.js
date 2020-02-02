let  numbers=document.getElementsByTagName("input").length;
let number_list=[];
for(let i=0;i< numbers; i++)
{
    let id= document.getElementsByTagName("input")[i].parentNode.parentNode.parentNode.parentNode.id
    number_list.push(id);
}
let key_list=Object.keys(localStorage);
let information_list={[number_list[0]]:"",[number_list[1]]:"",[number_list[2]]:"",[number_list[3]]:"",[number_list[4]]:"",[number_list[5]]:""};
//姓名 学院 班级 学号 QQ 手机
localStorage.setItem(key_list[1], JSON.stringify(information_list));
window.open(window.location.href);

