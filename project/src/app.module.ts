import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';

// 소비자(Controller)는 공급자(Provider)에서 제품(Service)을 받아서 사용
// 아래에서 AppService는 공급자로 취급(Injectable Decorator사용)
@Module({
    // module을 import하면 해당 module에서 export한 service들을 사용할 수 있다
    imports: [CatsModule, UsersModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
