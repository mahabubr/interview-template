import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  hello() {
    return 'Hello World!';
  }

  create() {
    return 'CREATE';
  }

  getAll() {
    return 'GET ALL';
  }

  getOne() {
    return 'GET ONE';
  }

  update() {
    return 'UPDATE';
  }

  delete() {
    return 'DELETE';
  }
}
