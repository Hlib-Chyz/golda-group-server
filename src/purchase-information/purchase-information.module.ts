import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PurchaseInformationController } from 'src/purchase-information/purchase-information.controller';
import { PurchaseInformationSchema } from 'src/purchase-information/purchase-information.model';
import { PurchaseInformationService } from 'src/purchase-information/purchase-information.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PurchaseInformation', schema: PurchaseInformationSchema },
    ]),
  ],
  controllers: [PurchaseInformationController],
  providers: [PurchaseInformationService],
})
export class PurchaseInformationModule {}
