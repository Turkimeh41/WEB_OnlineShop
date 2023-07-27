const db = require("../util/database");

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {}

  static async fetchAll() {
    let [rows, fieldData] = await db.pool.execute("SELECT * FROM products");
    return rows;
  }
};

/* 
.then(([rows, fieldData]) => {
  console.log(rows);
  return rows;
})
.catch((err) => console.log(err)); */
