import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatewayModule } from './websocket-gateway/gateway.module';
import { WebSocketClientModule } from './websocket-client/client.module';

@Module({
  imports: [GatewayModule , WebSocketClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
