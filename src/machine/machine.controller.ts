import { Body, Controller } from '@nestjs/common';
import { MachineGateway } from './machine.gateway';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class MachineController {
  constructor(private readonly machineGateway: MachineGateway) { }

  @MessagePattern('machine-event')
  handleMessage(@Body() body: any): void {
    this.machineGateway.broadcastMessage(body);
  }

  @MessagePattern('cron-job-event')
  broadCastMessageCron(@Body() body: any): void {
    this.machineGateway.broadCastMessageCron(body);
  }
}
