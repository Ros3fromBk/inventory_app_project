// products.js
const { faker } = require("@faker-js/faker");

function createRandomProduct() {
  const product = {
    _id: faker.string.uuid(),
    name: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`,
    description: faker.commerce.productDescription(),
    brand: faker.company.name(),
    price: faker.commerce.price(10, 200, 2, "$"),
    // price: faker.commerce.price( `${10, 200, 2, symbol: '$' }`),
    // price: faker.commerce.price( `${10, 200, 2, '$' }`), // faker V 8+
    currency: "USD",
    inStock: faker.datatype.boolean(),
    attributes: {
      material: faker.commerce.productMaterial(),
      color: faker.vehicle.color(),
    },
  };
  return product;
}

console.log(createRandomProduct());