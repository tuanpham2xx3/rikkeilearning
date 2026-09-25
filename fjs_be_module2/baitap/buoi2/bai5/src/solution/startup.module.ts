import { Module } from '@nestjs/common';
import { StartupController } from './startup.controller';
import { THIRD_PARTY_CONNECTION } from './startup.constants';
import { StartupService } from './startup.service';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

@Module({
  controllers: [StartupController],
  providers: [
    StartupService,
    {
      provide: THIRD_PARTY_CONNECTION,
      useFactory: async () => {
        console.log('Đang chờ kết nối dịch vụ bên thứ ba...');
        await delay(3000);
        console.log('Đã kết nối dịch vụ bên thứ ba.');
        return { connectedAt: new Date().toISOString() };
      },
    },
  ],
})
export class StartupModule {}
