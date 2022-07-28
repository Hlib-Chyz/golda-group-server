import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  FormatOfStudyEnum,
  LevelOfStudyEnum,
  LanguageOfStudyEnum,
} from 'src/purchase-information/purchase-information.controller';
import { PurchaseInformation } from 'src/purchase-information/purchase-information.model';

@Injectable()
export class PurchaseInformationService {
  constructor(
    @InjectModel('PurchaseInformation')
    private readonly purchaseInformationModel: Model<PurchaseInformation>,
  ) {}

  public async addPurchaseInformation(
    format: FormatOfStudyEnum,
    language: LanguageOfStudyEnum,
    level: LevelOfStudyEnum,
    email: string,
    phone: string,
    fullName: string,
    created: string,
  ) {
    const newPurchaseInformation = new this.purchaseInformationModel({
      format,
      language,
      level,
      email,
      phone,
      fullName,
      created,
    });
    const result = await newPurchaseInformation.save();
    return result.id as string;
  }
}
