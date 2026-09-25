import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from './config.service';

export interface ConfigOptions { folder: string }

@Module({})
export class ConfigModule {
  static forRoot(options: ConfigOptions): DynamicModule {
    return {
      module: ConfigModule,
      providers: [{ provide: ConfigService, useFactory: () => new ConfigService(options.folder) }],
      exports: [ConfigService],
      global: true,
    };
  }
}
