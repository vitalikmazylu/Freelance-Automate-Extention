var object={}
var access=false;

const launch_btn=document.querySelector('#start_btn');
const stop_btn=document.querySelector('#stop_btn');

let token=document.querySelector('input[name="token"]');
let chat_id=document.querySelector('input[name="chat_id"]');
let message_ru=document.querySelector('textarea[name="description_ru"] ');
let message_en=document.querySelector('textarea[name="description_en"] ');

//chat_id.value='134654'
console.log(message_ru)

const save_data=(i)=>{
  console.log(i.target.value)
  switch(i.target.getAttribute('name')){
  case "token": localStorage.setItem('token',i.target.value);break;
  case "chat_id":localStorage.setItem('chat_id',i.target.value);break;
  case "description_ru":localStorage.setItem('message_ru',i.target.value);break;
  case "description_en":localStorage.setItem('message_en',i.target.value);break;
  }

}
chat_id.onchange=save_data;
token.onchange=save_data;
message_ru.onchange=save_data;
message_en.onchange=save_data;
//console.log(localStorage.getItem('chat_id'));

if(localStorage.getItem('chat_id')!=null){
 chat_id.value=localStorage.getItem('chat_id')
}
if(localStorage.getItem('token')!=null){
 token.value=localStorage.getItem('token')
}
if(localStorage.getItem('message_ru')!=null){
 message_ru.value=localStorage.getItem('message_ru')
}
if(localStorage.getItem('message_en')!=null){
 message_en.value=localStorage.getItem('message_en')
}


launch_btn.onclick=function(){

var upwork=document.querySelector('li[name="upwork"]');
var freelancehunt=document.querySelector('li[name="freelancehunt"]');
var freelancer=document.querySelector('li[name="freelancer"]')





function append_object(elem){
  var obj;
if(elem.childNodes[5].checked==true){
if(elem.childNodes[7].childNodes[2].value.length!=0){
obj={"time":elem.childNodes[7].childNodes[2].value,"token":token.value,"chat_id":chat_id.value}
access=true;

}else{
  alert('Введите время обновления');
  access=false;
}
}
return obj
}

object.active=true;
object.UpWork=append_object(upwork);
object.FreelanceHunt=append_object(freelancehunt);
object.Freelancer=append_object(freelancer);
object.message_ru=message_ru.value;
object.message_en=message_en.value;

console.log(object)

//if(access){
 chrome.storage.sync.set(object, function() {
      console.log('Settings saved');
    });
//}


}

stop_btn.onclick=()=>{
  object.active=false;

 chrome.storage.sync.set(object, function() {
      console.log('Settings saved');
    });

}
