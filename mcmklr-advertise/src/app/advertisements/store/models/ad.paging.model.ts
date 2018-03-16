export class Paging {
  offset: number;
  limit: number;
  constructor({offset = 0, limit = 10}) {
    this.offset = offset;
    this.limit = limit;
  }
}