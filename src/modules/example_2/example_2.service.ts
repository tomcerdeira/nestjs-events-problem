import { Inject, Injectable } from '@nestjs/common';

import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { Example_1_Service } from '../example_1/example_1.service';

@Injectable()
export class Example_2_Service {

    @Inject(Example_1_Service)
    private readonly example_1_Service: Example_1_Service;
    //Because I need to use this service here

    @OnEvent('event.example')
    example_2(){
        console.log("here");
    }
  
}