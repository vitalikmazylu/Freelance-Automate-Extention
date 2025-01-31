
const token1='6170834380:AAEf51GEiaC7VSXvNAyY3el39JVnkkXfbLA'
var url1='https://api.telegram.org/bot'+token1+'/getUpdates';
var response;
var access=true;
console.log("getmessage")

function getupdates(){
  console.log('updated')
 if(access){
try{
  if(response==undefined){
    fetch(url1,{
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
      .catch(e => access=false)
  }else{
    fetch(url1,{
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
  console.log(e)
}
if(response!=undefined){
var url1text=response.message.text
 response=undefined;
 open(url1text);
 }

}





}
//getupdates()

setInterval(getupdates,30000);




