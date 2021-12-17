class Store {
  constructor (store = []) {
    this.store = store
  }

  clearStore() {
    this.store.length = 0;
  }

  getStore() {
    return this.store;
  }

  setStore(data) {
    this.clearStore();
    this.store.push(...data);
  }
}

export const globalStore = new Store();
export const localStore = new Store();