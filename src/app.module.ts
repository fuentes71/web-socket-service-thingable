import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { MachineModule } from './machine/machine.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    MachineModule
  ],
  providers: [],
})
export class AppModule { }
