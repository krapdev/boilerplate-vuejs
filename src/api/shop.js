/**
 * Mocking client-server processing
 */
const products = [
  { id: 1, title: 'Samsung Galaxy S8/S8 Plus', price: 642.5384, inventory: 2 },
  { id: 2, title: 'OnePlus 5T', price: 499.00, inventory: 7 },
  { id: 3, title: 'Samsung Galaxy Note 8', price: 736.1258, inventory: 5 },
  { id: 4, title: 'LG G6', price: 412.99, inventory: 3 },
  { id: 5, title: 'Samsung Galaxy S7/S7 Edge', price: 474.99, inventory: 9 },
  { id: 6, title: 'Huawei P10/P10 Plus', price: 537.584, inventory: 5 },
  { id: 7, title: 'Sony Xperia XZ1 Compact', price: 394.89, inventory: 8 },
  { id: 8, title: 'Iphone X', price: 959.00, inventory: 1 },
  { id: 9, title: 'Google Pixel 2', price: 599.95, inventory: 4 },
  { id: 10, title: 'Huawei Mate 10 Pro', price: 529.91, inventory: 7 },
  { id: 11, title: 'LG V30', price: 545.98, inventory: 3 },
  { id: 12, title: 'Honor View 10', price: 499.25, inventory: 6 },
  { id: 13, title: 'Samsung Galaxy A8', price: 345.25, inventory: 3 }
];

export default {
  getProducts(cb) {
    setTimeout(() => cb(products), 100);
  },
  buyProducts(prod, cb, errorCb) {
    // simulate random checkout failure.
    setTimeout(() => {
      if (Math.random() > 0.5) {
        return cb();
      }
      return errorCb();
    }, 100);
  }
};
