const express = require('express');
const app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);
const port = process.env.PORT || 3000;
var path = require('path');
var five = require("johnny-five");

var led2;
var led4;
var led6;
var led8;
var led10;

var isReady = false;
var isOn2 = false;
var isOn4 = false;
var isOn6 = false;
var isOn8 = false;
var isOn10 = false;

//var isOff = false;
var board = new five.Board();
board.on("ready", function() {
  
  led2 = new five.Led(2);
  led4 = new five.Led(4);
  led6 = new five.Led(6);
  led8 = new five.Led(8);
  led10 = new five.Led(10);

  led2.off();
  led4.off();
  led6.off();
  led8.off();
  led10.off();

  isReady = true;
});

function toggleLed (led,status) {
  
      // Se a placa não estiver pronta 
      // a execução não prossegue 
  
      if (!isReady) { return; }
  
      // Se o led estiver ligado... 
      if (status) {
  
          // o método off é chamado, desligando-o
          led.off();
  
          // a variável recebe false
          return status = false;
  
  } else {
  
      // se o led estiver desligado, o método on
      //  é chamado, ligando-o
      led.on();
  
      // a variável recebe true
      return status = true;
  
  } } 

//essa parte é quando o front estiver funcionando
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
}); //envia o arquivo index.html quando estamos na raiz

app.get('/comodo0', function(req, res){
    res.sendFile(__dirname + '/comodo0.html');
});

app.get('/comodo1', function(req, res){
    res.sendFile(__dirname + '/comodo1.html');
});

app.get('/comodo2', function(req, res){
    res.sendFile(__dirname + '/comodo2.html');
});

app.get('/comodo3', function(req, res){
    res.sendFile(__dirname + '/comodo3.html');
});

app.get('/comodo4', function(req, res){
    res.sendFile(__dirname + '/comodo4.html');
});
//app.use(express.static(__dirname + '/node-modules'));
//app.use(express.static(__dirname + '/mobile'));
app.use(express.static(__dirname));

    
//////////////////
io.on('connection', function(socket){
    console.log('a user connected');//quando o servidor receber uma mensagem vinda o client, emitir para todos
        //console.log("Led2 ligado: "+isOn2);
        if(isOn2){

            io.emit('esta ligado', "2on");
        }
        if(isOn4){
            
            io.emit('esta ligado', "4on");
        }
        if(isOn6){
            
            io.emit('esta ligado', "6on");
        }
        if(isOn8){
            
             io.emit('esta ligado', "8on");
        }
        if(isOn10){
            
            io.emit('esta ligado', "10on");
        }
    socket.on('disconnect', function(){
        console.log('user disconnected');
      })
})

io.on('connection', function(socket){
    socket.on('ligar', function(msg){//quando o servidor receber uma mensagem vinda o client, emitir para todos
        //isOn2 = toggleLed(led2,isOn2);
        //console.log(isOn2);
     if(msg == '2'){
        isOn2 = toggleLed(led2,isOn2);
        console.log(msg);
        console.log(isOn2);
      }
      if(msg == '4'){
        isOn4 = toggleLed(led4,isOn4);
        console.log(msg);
        console.log(isOn4);
      }
      if(msg == '6'){
        isOn6 = toggleLed(led6,isOn6);
        console.log(msg);
        console.log(isOn6);          
      }
      if(msg == '8'){
        isOn8 = toggleLed(led8,isOn8);
        console.log(msg);
        console.log(isOn8);        
      }
      if(msg == '10'){
        isOn10 = toggleLed(led10,isOn10);
        console.log(msg);
        console.log(isOn10);        
      }
      if(msg == 'off'){
          led2.off();
          isOn2 = false;
          led4.off();
          isOn4 = false;
          led6.off();
          isOn6 = false;
          led8.off();
          isOn8 = false;
          led10.off();
          isOn10 = false;
          console.log("All off");
      }
      if(msg == 'on'){
        led2.on();
        isOn2 = true;
        led4.on();
        isOn4 = true;
        led6.on();
        isOn6 = true;
        led8.on();
        isOn8 = true;
        led10.on();
        isOn10 = true;
        console.log("All on");
    }
    
      //io.emit('chat message', msg);
    });
});

http.listen(port, function(){
    console.log('listening on *: ' + port);
});

