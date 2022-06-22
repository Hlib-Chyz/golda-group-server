import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GeneralModule } from 'src/general/general.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.aecrutf.mongodb.net/?retryWrites=true&w=majority',
    ),
    GeneralModule,
  ],
})
export class AppModule {}
