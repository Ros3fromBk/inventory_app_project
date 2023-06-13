const importedFunction = require("./message"); // from message.js  
// index.js
const { inspect } = require("node:util");
const { faker } = require('@faker-js/faker');

const randomName = faker.person.fullName(); // Random name genrerated by faker 
const randomEmail = faker.internet.email(); // Random email genrerated by faker 
console.log("\n",  "Here's the faker generated info:",randomName,randomEmail)

const veryNestedObject = {
    one: {
        two: {
            three: {
                four: {
                    five: "You found the center!",
                },
            },
        },
    },
};
// console.log(veryNestedObject); // // { one: { two: { three: [Object] } } }
// console.log(inspect(veryNestedObject, { depth: 5 }));
console.log(inspect(veryNestedObject, { depth: 5, colors: true }));

// console.log("\n", importedFunction(), "\n");
// console.log("Thanks for using my app! \n");