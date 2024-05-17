import { Module } from '@nestjs/common';
import { ApplicationWebSocketGateway } from './gateway';

@Module({
  controllers:[],
  providers:[],
  imports:[ApplicationWebSocketGateway]
})
export class GatewayModule{}