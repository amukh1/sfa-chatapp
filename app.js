alert('make sure to sign in https://sfa.amukh1.dev')
send('A user has joined the chat!')

let naem = prompt('Whats your github username?', 'User')


console.log(location.hash)

if(window.localStorage.getItem('signedIn')) {
  if(window.localStorage.getItem('signedIn') == 'signedIn'){
    window.location.href == 'https://github.com/login/oauth/authorize?scope=user:email&client_id=89282bd6b02943279a31'
  }else if(window.localStorage.getItem('signedIn') == 'not'){
    alert('You need to sign in!')
    window.localStorage.setItem('signedIn', 'signedIn')
    window.Location.href = 'https://github.com/login/oauth/authorize?scope=user:email&client_id=89282bd6b02943279a31'
  }
}else {
  alert('You need to sign in! (First time)')
  window.localStorage.setItem('signedIn', 'signedIn')
    window.Location.href = 'https://github.com/login/oauth/authorize?scope=user:email&client_id=89282bd6b02943279a31'
}

let room = 'main'

let logUrl = 'https://api.amukh1.dev/apiLOG'
let postUrl = 'https://api.amukh1.dev/apiPOST'
let apiUrl = 'https://api.amukh1.dev/api'


// document.getElementById('body').classList.add('blur');
 
 // var socket = io()
 let name;



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
    // if(data.ip == '104.225.161.57'){
    //   document.getElementById('body').classList.add('blur');
    // }

    // if(data.ip == '97.64.56.176'){
    //   document.getElementById('body').classList.add('blur');
    // }

    ip = `${data.ip}`
    info = `${data}`
    
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

 xhr.open("GET", 'https://api.amukh1.dev/apiCheck', true);
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





   function algebra() {

    var algebraPass = prompt('Enter the password to access the algebra server')
    if(algebraPass == 'taylor2021'){
       document.getElementById('servername').innerHTML = ' Server: Algebra '
       document.getElementById('security').innerHTML = 'Security: Secure'
       document.getElementById('securitypassage').innerHTML = 'This server is secured by a password'
    logUrl = 'https://api.amukh1.dev/algebraApiLOG'
        postUrl = 'https://api.amukh1.dev/algebraApiPOST'
    apiUrl = 'https://api.amukh1.dev/algebraApi'
    room = 'algebra'
    update()
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
   xhr.open("post", `${postUrl}?msg=${naem}: ${document.getElementById('input').value}`, true);
   xhr.send();
 
 
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
 xhr.open("GET", apiUrl, true);
 xhr.send();
   }
 
 
   function signIn() {
     alert('sIGNED iN')
     named = document.getElementById('signInput')
     document.getElementById('signIn').style.display = 'none'
   }