
class UpWork extends Freelance{

constructor(obj){
super(obj.token,obj.chat_id);
if(window.location.href.includes('https://www.upwork.com/jobs/')){
   this.submit();
  }else if(window.location.href.includes('https://www.upwork.com/ab/proposals/job/')){
    console.log('propotional')
  }else{
    this.upwork();
  } ;

  setTimeout(()=>location.reload(),60000*obj.time)
}

automate=()=>{
  var duration=document.querySelector('.air3-dropdown-toggle-title');
  console.log(duration);

}


upwork=()=>{
var sections_job=document.querySelectorAll('section[data-ev-label="search_result_impression"] > article')
var object;
var object_empty=false;
if(sessionStorage.getItem('UpWork')==null){
  object=[];
  object_empty=true;
}else{
  object=sessionStorage.getItem('UpWork');
  object=JSON.parse(object);
}
var title;
var price;
var second_row;
var description;
var href;
var posted;
var urlpath;
var job_url;
var job_url2;
var item_code;

const sendmessage=(text)=>{
  super.sendmessage(text);
}

sections_job.forEach((item,key) => {

setTimeout(()=>get_items(item),1500*key)

function get_items(item){
  console.log(item)
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
  item_code=urlpath[2].split('_')
  //console.log(urlpath)
  //job_url='https://www.upwork.com/freelance-jobs/apply/'+urlpath[2]+'/';
job_url='https://www.upwork.com/jobs/'+item_code[1];
console.log(job_url)

var item={};
item.title=title;
item.price=price;
item.second_row=second_row;
item.description=description;
item.posted=posted;
item.url=job_url;



var text='* '+title+' *'+'\n'+price+'\n'+'\n'+description+'\n'+posted+'\n'+job_url;
console.log(text)

if(object_empty){
  sendmessage(text);
  object.push(item);
}else{
  var find_obj=object.find((i)=> i.title.includes(title))
if(find_obj==undefined){
    object.push(item);
    sendmessage(text);
}}

}

});
sessionStorage.removeItem('UpWork');
sessionStorage.setItem('UpWork',JSON.stringify(object));


}

submit=()=>{
var access_btn=document.querySelector('button[aria-label="Apply Now"]');
access_btn.click()

setTimeout(()=>{
console.log('work')
},5000)
}


}

