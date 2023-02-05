import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
    controllers: [CatsController],
    providers: [CatsService],
    // 기본적으로는 service는 캡슐화되서 사용할 수 없지만 아래와 같이 export해주면 외부에서 사용할 수 있다
    exports: [CatsService],
})
export class CatsModule {}
