import { Module } from '@nestjs/common';
import { Example_1_Controller } from './example_1.controller';
import { Example_1_Service } from './example_1.service';

@Module({
  controllers: [Example_1_Controller],
  providers: [Example_1_Service],
  exports: [Example_1_Service]
})
export class Example_1_Module {}