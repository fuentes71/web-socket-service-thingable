import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { EventModule } from './event/event.module';
import { CalculationModule } from './calculation/calculation.module';
import { AlertModule } from './alert/alert.module';

@Module({
  imports: [EventModule, ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }), EventModule, CalculationModule, AlertModule],
  providers: [],
})
export class AppModule {}
