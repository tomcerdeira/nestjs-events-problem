import { Module } from '@nestjs/common';

import { EventEmitterModule } from '@nestjs/event-emitter';
import { Example_1_Module } from './modules/example_1/example_1.module';
import { Example_2_Module } from './modules/example_2/example_2.module';
import { Example_2_Service } from './modules/example_2/example_2.service';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    Example_1_Module,
    Example_2_Module
  ],
  controllers: [],
  providers: [Example_2_Service],
  //Because I need to use this service in the "app.service.ts"
  // THIS IS WHAT CAUSES THE DUPLICATE CONSOLE LOG
})
export class AppModule {}
