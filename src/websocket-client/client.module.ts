import { Module } from "@nestjs/common";
import {AppClient} from './client'

@Module({
  controllers:[],
  providers:[AppClient],
  imports:[],
})
export class WebSocketClientModule{}