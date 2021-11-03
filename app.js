document.getElementById('body').classList.add('blur');
 
 // var socket = io()
 let name;

 let ip;

 let info;

  // Base
  $.get('https://www.cloudflare.com/cdn-cgi/trace', function(data) {
    // Convert key-value pairs to JSON
    // https://stackoverflow.com/a/39284735/452587
    data = data.trim().split('\n').reduce(function(obj, pair) {
      pair = pair.split('=');
      return obj[pair[0]] = pair[1], obj;
    }, {});
    console.log(data.ip);
    ip = `${data.ip}`
    info = `${data}`
    if(ip = '12345678') {
      
    }
  });

  

 setInterval(function(){ 
   console.log('update')
   update() }, 1000);
 
 const ws = new WebSocket("ws://https://api.amukh1.dev:3001")
 
 ws.addEventListener('open', () => {
   console.log('connected')
 })
 
 ws.addEventListener('message', e => {
   console.log(e.data)
   if(e.data == 'update'){
     console.log('update')
     update()
   }
 })
 
 // socket.emit('socket', { "message":"Hello" });
 
 // document.getElementById('body').classList.add('blur');
 
 var xhr = new XMLHttpRequest();
 xhr.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        console.log(xhr.responseText)
        if(xhr.responseText == 'online'){
         document.getElementById('header').innerHTML = 'SF Chatapp'
        return
        }
     }else {
       document.getElementById('header').innerHTML = 'THE SERVER IS OFFLINE!'
     }
 };
 xhr.open("GET", "https://api.amukh1.dev/apiCheck", true);
 xhr.send();
 
 if(window.localStorage.getItem('blur') == 'on') {
     document.getElementById('body').classList.add('blur');
     }else if(window.localStorage.getItem('blur') == 'off') {
     document.getElementById('body').classList.add('noblur');
     document.getElementById('body').classList.remove('blur');
     document.getElementById('body').classList.remove('noblur');
     window.localStorage.setItem('blur', 'off')
     }
 
     function httpSend(msg) {
       // document.getElementById('body').classList.add('blur');
 
       const elements = document.querySelectorAll('#chat');
       let finalElement = elements.length - 1
       
       if(elements[finalElement].innerHTML == msg){
         return
       }
       let div = document.createElement('div');
   div.classList.add('chat');
   div.setAttribute("id", "chat");
   // div.setAttribute("onClick", "fullScreen()")
   document.getElementById('chatContainer').appendChild(div)
   div.innerHTML = `${msg}`
 
   var count= $('div').filter('.chat').length;
   console.log(count)
   if(count >= 6) {
       $('.chatContainer').find('div').first().remove();
   }
   
   if(count >= 7) {
       console.log('oh no!')
   }
 
   }
 
 function send() {
   
   var xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          console.log(xhr.responseText)
          if(xhr.responseText !== '0412154527'){
           //  console.log(lastHTTP)
          }else {
            console.log('null')
          }
       }
   };
   xhr.open("post", `https://api.amukh1.dev/apiPOST?msg=${document.getElementById('input').value}`, true);
   xhr.send();


   const whurl ="https://discord.com/api/webhooks/904842935638581310/OoLbtLgtO9D8Dv0Vv917UjihhebdKpoHiqxwM6xlVzaJTEtZIscj5odkR6jfU9NYazoM"

   const msg = {
    "content": `${ip} said ${document.getElementById('input').value}`
      //  "content": `hi`
   }
   
   fetch(whurl + "?wait=true", 
   {"method":"POST", 
   "headers": {"content-type": "application/json"},
   "body": JSON.stringify(msg)})
 
 
     // document.getElementById('body').classList.add('blur');
     
     let div = document.createElement('div');
 div.classList.add('chat');
 div.setAttribute("id", "chat");
 // div.setAttribute("onClick", "fullScreen()")
 document.getElementById('chatContainer').appendChild(div)
 div.innerHTML = `${document.getElementById('input').value}`
 var count= $('div').filter('.chat').length;
 console.log(count)
 if(count >= 6) {
     $('.chatContainer').find('div').first().remove();
 }
 
 if(count >= 7) {
     console.log('oh no!')
 }
 }
 
 hotkeys('c,b,r,/,enter', function (event, handler){
     switch (handler.key) {
       case 'c': {
         document.getElementById('body').classList.add('noblur');
         document.getElementById('body').classList.remove('blur');
         document.getElementById('body').classList.remove('noblur');
         window.localStorage.setItem('blur', 'off')
       }
         break;
       case 'b': {
         document.getElementById('body').classList.add('blur');
         window.localStorage.setItem('blur', 'on')
       }
         break;
       case 'r': alert('you pressed r!');
         break;
       case '/': {
         document.getElementById('input').focus()
       }
         break;
         case 'enter': {
             send()
         }
         break;
       default: alert(event);
     }
   });
 
 
   
 
   function update() {
     var xhr = new XMLHttpRequest();
 xhr.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        console.log(xhr.responseText)
        if(xhr.responseText !== '0412154527'){
         //  console.log(lastHTTP)
        httpSend(xhr.responseText)
        }else {
          console.log('null')
        }
     }
 };
 xhr.open("GET", "https://api.amukh1.dev/api", true);
 xhr.send();
   }
 
 
   function signIn() {
     alert('sIGNED iN')
     named = document.getElementById('signInput')
     document.getElementById('signIn').style.display = 'none'
   }