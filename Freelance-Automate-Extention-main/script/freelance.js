
class Freelance{

constructor(token,chat_id){
	this.chat_id=chat_id;
	this.token=token;
	this.url='https://api.telegram.org/bot'+token+'/sendMessage';
	//console.log("Freelance constructor")

}

sendmessage(message){
	//console.log('sent')
  //console.log(message)
  var response=fetch(this.url,{
    method:"POST",
    headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          text: message,
          chat_id: this.chat_id,
          parse_mode:"Markdown"
        })
  });
}

}