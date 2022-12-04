import { Module } from '@nestjs/common';
import { Example_1_Module } from '../example_1/example_1.module';
import { Example_2_Service } from './example_2.service';

@Module({
  imports: [Example_1_Module],
  providers: [Example_2_Service],
  exports: [Example_2_Service]
})
export class Example_2_Module {}