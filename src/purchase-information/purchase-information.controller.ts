import { Body, Controller, Post } from '@nestjs/common';
import { PurchaseInformation } from 'src/purchase-information/purchase-information.model';
import { PurchaseInformationService } from 'src/purchase-information/purchase-information.service';

@Controller('purchase-information')
export class PurchaseInformationController {
  public constructor(
    private readonly purchaseInformationService: PurchaseInformationService,
  ) {}

  @Post()
  public async addPurchaseInformation(@Body() purchaseInformation: any) {
    const pi: PurchaseInformation = JSON.parse(
      Object.keys(purchaseInformation)[0],
    );
    const generatedId =
      await this.purchaseInformationService.addPurchaseInformation(
        pi.format,
        pi.language,
        pi.level,
        pi.email,
        pi.phone,
        pi.fullName,
        pi.created,
      );
    return { id: generatedId };
  }
}

export enum LevelOfStudyEnum {
  A1A2 = 'A1A2',
  B1 = 'B1',
  B2 = 'B2',
}

export enum LanguageOfStudyEnum {
  English = 'English',
  French = 'French',
  Deutsch = 'Deutsch',
}

export enum FormatOfStudyEnum {
  Textbook = 'Textbook',
  TutorialWithTeacher = 'TutorialWithTeacher',
  TutorialWithZlata = 'TutorialWithZlata',
}
