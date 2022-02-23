const user = { id: 11, name: 'gorib amir', job: 'actor' };
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    name: 'shop',
    address: 'Ranbir road',
    products: ['laptop', 'mobile', 'pepsi'],
    isExpensive: false,
    owner: {
        name: 'Alia Bhatt',
        profession: 'Actress'
    }
}

const shopStringified = JSON.stringify(shop);
console.log(shop);
const converted = JSON.parse(shopStringified);
console.log(converted.products);
