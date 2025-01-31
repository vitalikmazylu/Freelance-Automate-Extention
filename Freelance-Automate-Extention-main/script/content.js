

var token='6170834380:AAEf51GEiaC7VSXvNAyY3el39JVnkkXfbLA';
const chat_id=1859469872;
var obj;

chrome.storage.sync.get(['active','UpWork','FreelanceHunt','Freelancer'], function(items) {
      console.log(items)
      obj=items;

      if(obj.active){

let timerId = setTimeout(() => main(), 10000);
function main(){
console.log(window.location.hostname)
switch(window.location.hostname){
  case 'freelancehunt.com':
var freelancehunt=new FreelanceHunt(obj.FreelanceHunt);
 break;
case 'www.freelancer.com': 
  var freelancer=new Freelancercom(obj.Freelancer); 
  break;
  case 'www.upwork.com': 
 var upwork=new UpWork(obj.UpWork); break;
}}}

    });


