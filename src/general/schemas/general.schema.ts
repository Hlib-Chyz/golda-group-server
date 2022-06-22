import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GenralDocument = Genral & Document;

@Schema()
export class Genral {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const GenralSchema = SchemaFactory.createForClass(Genral);
