const user = {id: 1, name: 'steve max', job: 'accountant'};
// javaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
// console.log(user);  
// console.log(stringified);
/**
 * { id: 1, name: 'steve max', job: 'accountant' }
    {"id":1,"name":"steve max","job":"accountant"}
 */

const shop = {
  owner: 'alia',
  address: {
    street: 'kochukhet voot er goli',
    city: 'new york',
    country: 'mexico'
  },
  products: ['laptop', 'mic', 'monitor', 'keyboard'],
  revenue: 45000,
  isOpen: true,
  isNew: false
};
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);