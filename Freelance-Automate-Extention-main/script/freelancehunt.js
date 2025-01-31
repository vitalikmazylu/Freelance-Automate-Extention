

class FreelanceHunt extends Freelance{


  constructor(obj){
super(obj.token,obj.chat_id);

chrome.storage.sync.get(['message_ru'], function(items) {
console.log(items)
this.message=items.message_ru;
    });

if(window.location.href.includes('https://freelancehunt.com/project/')){
      this.automate();
    }else{
    this.parse();
  }
  setTimeout(()=>location.reload(),60000*obj.time);
}

	parse=()=>{
  var items=document.querySelectorAll('tbody > tr');
  console.log(items)
var object;
var object_empty=false;
if(sessionStorage.getItem('FreelanceHunt')==null){
  object=[];
  object_empty=true;
}else{
  object=sessionStorage.getItem('FreelanceHunt');
  object=JSON.parse(object);
}
var title;
var price;
var href;
var posted;
var description;


items.forEach((item) => {
  title=item.childNodes[1].childNodes[1].innerText;
  href=item.childNodes[1].childNodes[1].getAttribute('href');
  try{
  price=item.childNodes[3].innerText;
}catch(e){
	price='';
}
  description=item.childNodes[1].childNodes[5].innerText;
  try{
  posted=item.childNodes[5].innerText;
  posted.replace(" ",'');
}catch(e){
	posted='';
}

var item={};
item.title=title;
item.price=price;
item.description=description;
item.posted=posted;
item.url=href;



var text='* '+title+' *'+'\n'+price+'\n'+'\n'+description+'\n'+posted+'\n'+href;

if(object_empty){
  super.sendmessage(text);
  object.push(item);
}else{
  var find_obj=object.find((i)=> i.title.includes(title))
if(find_obj==undefined){
    object.push(item);
   super.sendmessage(text);
}}


});
sessionStorage.removeItem('FreelanceHunt');
sessionStorage.setItem('FreelanceHunt',JSON.stringify(object));

	}

	automate=()=>{

try{
var submit_btn=document.querySelector('a[id="add-bid"]');
submit_btn.click();
}catch(e){
try{
  close();
  super.sendmessage("Заява отправлено");
}catch(e){}
}


setTimeout(()=>{

var comment=document.querySelector('textarea[name="comment"]');

comment.innerText=message;

var time=document.querySelector('input[name="days_to_deliver"]');
time.value=1;

var price=document.querySelector('input[name="amount"]');
try{var price_label=document.querySelector('.h1-container .text-green');
console.log(price_label.innerText)
var pricevalue=price_label.innerText;
pricevalue=pricevalue.slice(0, -3).replace(/\s/g, '');
//console.log(pricevalue)
/*var pr=pricevalue.match(/(\d+)/);

console.log(pr)*/
price.value=pricevalue;
}catch(e){

price.value=500;
}


try{
var comition=document.querySelectorAll('.form-group .controls .radio label input')
comition[1].click();
}catch(e){}

var add_bid_btn=document.querySelector('button[name="add"]');

add_bid_btn.click()




},1000)


	}
}