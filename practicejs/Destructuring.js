const product = {
  id: 1,
  name: "Laptop",
  price: 50000,
  specs: { ram: "16GB", storage: "512GB" }
};

const { name,price,specs:{ram,storage,brand="Unknown"}}=product
console.log(`${name} | ${price} | ${ram} | ${storage} | ${brand}`);
