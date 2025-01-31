
class Freelancercom extends Freelance{

constructor(obj){
super(obj.token,obj.chat_id);
  this.message;
chrome.storage.sync.get(['message_en'], function(items) {
console.log(items)
this.message=items.message_en;
    });
if(window.location.href.includes('https://www.freelancer.com/search/projects')){
      this.parse();
    }else{
    this.automate();
  }
setTimeout(()=>location.reload(),60000*obj.time);
}

parse=()=>{
	console.log('parse')
	var list=document.querySelectorAll('.ng-star-inserted > a[fltrackingreferencetype="project_id"]');
	var object;
var object_empty=false;
if(sessionStorage.getItem('FreelancerCom')==null){
  object=[];
  object_empty=true;
}else{
  object=sessionStorage.getItem('FreelancerCom');
  object=JSON.parse(object);
}

var title;
var href;
var bid;
var description;
var budget;

	list.forEach((i)=>{

href=i.getAttribute('href');
title=i.childNodes[0].childNodes[0].childNodes[0].childNodes[0].innerText;
budget=i.childNodes[0].childNodes[0].childNodes[0].childNodes[1].innerText;
bid=i.childNodes[0].childNodes[0].childNodes[1].innerText;
description=i.childNodes[0].childNodes[1].innerText;


href='https://www.freelancer.com'+href;
var item={};
item.title=title;
item.budget=budget;
item.description=description;
item.bid=bid;
item.url=href;



var text='* '+title+' *'+'\n'+budget+'\n'+'\n'+description+'\n'+bid+'\n'+href;

if(object_empty){
  super.sendmessage(text);
  object.push(item);
}else{
  var find_obj=object.find((i)=> i.title.includes(title))
if(find_obj==undefined){
    object.push(item);
   super.sendmessage(text);
}}

	})

sessionStorage.removeItem('FreelancerCom');
sessionStorage.setItem('FreelancerCom',JSON.stringify(object));

}

automate=()=>{

setTimeout(()=>{
  var textarea=document.querySelector('fl-textarea textarea');
console.log(message)
var support_text=message;

textarea.value=support_text
setTimeout(()=>{
 textarea.click(); 
},3000)
var submit_btn=document.querySelector('.BidFormBtn fl-button button[_ngcontent-webapp-c38]')
console.log(submit_btn)
submit_btn.click()


setTimeout(()=>{try{
   super.sendmessage("Заява отправлено");
  close();
}catch(e){}},15000)



},1000);


}


}