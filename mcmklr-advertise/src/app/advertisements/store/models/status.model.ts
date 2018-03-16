export class Status {
  loading: boolean;
  loaded: boolean;

  constructor({ loading = false, loaded = false }) {
    this.loaded = loaded;
    this.loading = loading;
  }
}
