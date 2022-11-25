import { IsString } from "class-validator";

export class CreateFilemanagerDto {
    @IsString()
    name: string;

    @IsString()
    text: string;
}