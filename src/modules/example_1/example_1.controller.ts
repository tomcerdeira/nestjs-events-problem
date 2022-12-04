import { Controller, Get, Inject } from '@nestjs/common';
import { Example_1_Service } from './example_1.service';

@Controller('example-1')
export class Example_1_Controller {

    @Inject(Example_1_Service)
    private readonly example_1_Service: Example_1_Service;

    @Get()
    example(): void {
        this.example_1_Service.example_1();
    }

}