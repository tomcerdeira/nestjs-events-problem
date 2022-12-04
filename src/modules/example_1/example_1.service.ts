import { Injectable } from '@nestjs/common';

import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class Example_1_Service {

    constructor(private eventEmitter: EventEmitter2) {}

    public async example_1(){
        this.eventEmitter.emit('event.example');
    }
  
}