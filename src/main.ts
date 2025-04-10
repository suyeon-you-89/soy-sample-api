import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API Docs')
    .setDescription('NestJS + Swagger Example')
    .setVersion('1.0') 
    .addTag('account') // 그룹핑
    // .addBearerAuth() // JWT 토큰 인증 추가
    .build(); 

  const account_doc = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs/account', app, account_doc); // http://localhost:3000/docs

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap(); 