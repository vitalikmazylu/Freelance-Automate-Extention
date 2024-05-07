
const token='6170834380:AAEf51GEiaC7VSXvNAyY3el39JVnkkXfbLA'
var url='https://api.telegram.org/bot'+token+'/getUpdates';
var response;



/*function getupdates(){
  console.log(response)
try{
  if(response==undefined){
    fetch(url,{
      method:'POST',
      headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify({
          timeout:5
        })
    })
    .then(response => response.json())
      .then(data => response=data.result[data.result.length-1])
      .catch(e => console.log('empty'))
  }else{
    fetch(url,{
      method:'POST',
      headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify({
          offset: response.update_id+1,
          timeout:5
        })
    })
    .then(response => response.json())
      .then(data => response=data.result[data.result.length-1])
      .catch(e => console.log('empty'))
  }
}catch(e){
  console.log('error');
}

open('https://www.youtube.com/')
}


setInterval(getupdates,5000);*/


const launch_btn=document.querySelector('#start_btn');

launch_btn.onclick=function(){
location.reload();
}
