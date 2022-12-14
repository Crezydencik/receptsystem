import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document} from "mongoose";

export type RoleDocument = Role & Document;

@Schema()
export class Role{
	
	@Prop({required: true, unique: true})
	value: string;
	
	@Prop({required: true})
	description: string;


}
export const RoleSchema = SchemaFactory.createForClass(Role);