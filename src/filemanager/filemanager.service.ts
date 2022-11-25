import { Injectable } from '@nestjs/common';
import { UpdateFilemanagerDto } from './dto/update-filemanager.dto';
import * as fileAccess from 'fs';
import { FileException } from 'src/exceptions/file.exceptions';

@Injectable()
export class FilemanagerService {

  create(name: string, text: string): string {
    const filePath = `resources/${name}.txt`;

    if (fileAccess.existsSync(filePath))
      throw new FileException(`File with the name ${name} already exists!`);

    fileAccess.writeFileSync(filePath, text);
    return name + `.txt`

  }

  findAll() {
    return `This action returns all filemanager`;
  }

  findOne(id: number) {
    return `This action returns a #${id} filemanager`;
  }

  update(id: number, updateFilemanagerDto: UpdateFilemanagerDto) {
    return `This action updates a #${id} filemanager`;
  }

  remove(id: number) {
    return `This action removes a #${id} filemanager`;
  }
}
