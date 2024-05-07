




var token='6170834380:AAEf51GEiaC7VSXvNAyY3el39JVnkkXfbLA';
const chat_id=1859469872;
var url='https://api.telegram.org/bot'+token+'/sendMessage';


let timerId = setTimeout(() => main(), 60000);
let time2=setTimeout(()=>location.reload(),60000*15)
//  location.reload();




function sendmessage(text){
  var response=fetch(url,{
    method:"POST",
    headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          text: text,
          chat_id: chat_id,
          parse_mode:"Markdown"
        })
  });
}



function upwork(){
var sections_job=document.querySelectorAll('section[data-ev-label="search_result_impression"] > article')

var object;

var object_empty=false;
if(localStorage.getItem('UpWork')==null){
  object=[];
  object_empty=true;
}else{
  object=localStorage.getItem('UpWork');
  object=JSON.parse(object);
  console.log(object)
}
var title;
var price;
var second_row;
var description;
var href;
var posted;
var urlpath;
var job_url;


sections_job.forEach((item) => {
  title=item.childNodes[4].childNodes[0].childNodes[2].innerText;
  price=item.childNodes[6].childNodes[2].innerText;
  if(price==undefined){
    price='';
  }
  second_row=item.childNodes[6].childNodes[0].innerText;
  if(second_row==undefined){
    second_row='';
  }
  description=item.childNodes[6].childNodes[4].innerText;
  href=item.childNodes[4].childNodes[0].childNodes[2].childNodes[2].childNodes[0].childNodes[0].getAttribute('href');
  posted=item.childNodes[4].childNodes[0].childNodes[0].innerText;
  urlpath=href.split('/');
  job_url='https://www.upwork.com/freelance-jobs/apply/'+urlpath[2]+'/';

var item={};
item.title=title;
item.price=price;
item.second_row=second_row;
item.description=description;
item.posted=posted;
item.url=job_url;

if(object_empty){
  sendmessage('* '+title+' *'+'\n'+'\n'+'second_row'+'\n'+price+'\n'+'\n'+description+'\n'+posted+'\n'+job_url);
  object.push(item);
}else{
  var find_obj=object.find((i)=> i.title.includes(title))
if(find_obj==undefined){
    object.push(item);
    sendmessage('* '+title+' *'+'\n'+'\n'+'second_row'+'\n'+price+'\n'+'\n'+description+'\n'+posted+'\n'+job_url);
}}


});
localStorage.removeItem('UpWork');
localStorage.setItem('UpWork',JSON.stringify(object));


}
function freelancehunt(){
  console.log('freelancehunt function');
}



function main(){
switch(window.location.hostname){
  case 'freelancehunt.com':freelancehunt(); break;
  case 'www.upwork.com': upwork(); break;
}


}
