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

class Local extends Store {
  clearStore() {
    this.store.length = 0;
  }
}

export const localStore = new Local();