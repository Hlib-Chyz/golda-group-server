import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PurchaseInformationModule } from 'src/purchase-information/purchase-information.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:juHmWCGlFVifddU1@cluster0.aecrutf.mongodb.net/golda-group?retryWrites=true&w=majority',
    ),
    PurchaseInformationModule,
  ],
})
export class AppModule {}
