import {OnModuleInit} from '@nestjs/common'
import {Server} from 'socket.io'
import {
  WebSocketServer,
  WebSocketGateway,
  SubscribeMessage,
  MessageBody
}
from "@nestjs/websockets"

@WebSocketGateway(
  9001, 
  {
    cors : {origin : ["http://localhost:5173"] , credentials : true}
  },
  // transports : ['websocket' , 'pooling']
)
export class ApplicationWebSocketGateway implements OnModuleInit {

  @WebSocketServer()
  server :Server

  socketId : string

  onModuleInit(){
    this.server.on("connection" , (socket)=>{
      this.socketId = socket.id 
      console.log("socket id : " , socket.id);
      console.log("Socket Connected To Port 9001");
    })
  }

  @SubscribeMessage("send-message")
  handleMessageSubscription(@MessageBody() body : any){
    console.log(body)

    this.server.emit("onMessage" , {
      socketId : this.socketId ,
      msg : "New Message Sended To Every One",
      content : body
    })

  }

}