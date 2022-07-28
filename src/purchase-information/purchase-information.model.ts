import * as mongoose from 'mongoose';
import {
  FormatOfStudyEnum,
  LanguageOfStudyEnum,
  LevelOfStudyEnum,
} from 'src/purchase-information/purchase-information.controller';

export const PurchaseInformationSchema = new mongoose.Schema({
  format: { type: FormatOfStudyEnum, required: true },
  language: { type: LanguageOfStudyEnum, required: true },
  level: { type: LevelOfStudyEnum, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  fullName: { type: String, required: true },
  created: { type: String, required: true },
});

export interface PurchaseInformation extends mongoose.Document {
  id: string;
  format: FormatOfStudyEnum;
  language: LanguageOfStudyEnum;
  level: LevelOfStudyEnum;
  email: string;
  phone: string;
  fullName: string;
  created: string;
}
