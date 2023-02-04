import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// 소비자(Controller)는 공급자(Provider)에서 제품(Service)을 받아서 사용
// 아래에서 AppService는 공급자로 취급(Injectable Decorator사용)
@Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
