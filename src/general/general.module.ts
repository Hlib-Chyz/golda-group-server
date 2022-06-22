import { Module } from '@nestjs/common';
import { GeneralService } from 'src/general/general.service';

@Module({
  providers: [GeneralService],
})
export class GeneralModule {}
