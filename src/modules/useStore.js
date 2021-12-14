class Store {
  constructor (store = []) {
    this.store = store
  }

  getStore() {
    return this.store;
  }

  setStore(data) {
    this.store.length = 0;
    this.store.push(...data);
  }
}

export const globalStore = new Store();

export const localStore = new Store();