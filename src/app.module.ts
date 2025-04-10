import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CodeModule } from './code/code.module';
import { PrismaModule } from './prisma/prisma.module';
// import { TestModule } from './test/test.module';

@Module({
  // imports: [TestModule],
  
  imports: [PrismaModule, CodeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
