import { Module } from '@nestjs/common';

import { MachineController } from './machine.controller';
import { MachineGateway } from './machine.gateway';

@Module({
  controllers: [MachineController],
  providers: [MachineGateway],
})
export class MachineModule {}
