import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { AuthModule } from './modules/auth.module';
import { UserModule } from './modules/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'postgres',
      database: 'funny_movies',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: '123456789',
      logging: false,
      // logging: true,
      synchronize: true,
      entities: [User],
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
