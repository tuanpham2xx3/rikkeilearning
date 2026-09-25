import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  constructor(private readonly folder: string) {}

  getFolder() {
    return this.folder;
  }

  get(key: string) {
    return `${this.folder}/${key}`;
  }
}
