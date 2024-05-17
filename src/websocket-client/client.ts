import { Injectable, OnModuleInit } from '@nestjs/common';
import { io, Socket } from 'socket.io-client';

@Injectable()
export class AppClient implements OnModuleInit {
  socketClient: Socket;

  constructor() {
    this.socketClient = io('http://localhost:9001');
  }

  onModuleInit() {
    this.registerConsumerEvent();
  }

  private registerConsumerEvent() {
    this.socketClient.on('connected', (data) => {
      console.log('__ client connected __');
      console.log(data);
    });

    this.socketClient.on('onMessage', (payload) => {
      console.log('!!! Socket Client Class Runned !!!');
      console.log(payload);
    });
  }
}
