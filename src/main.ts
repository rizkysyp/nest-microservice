import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { LoggerService } from './common/services/logger.service';
import { ConfigService } from './common/services/config.service';

const logger = new LoggerService(new ConfigService());
async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: "127.0.0.1",
      port: process.env.PORT
    }
  });
  logger.log(`Microservice A is listening on port ${process.env.PORT}`);
}
bootstrap();