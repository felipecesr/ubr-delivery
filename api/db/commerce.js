const createCommerceModel = (db) => ({
  findMany(order) {
    return db.get('commerce').orderBy(['slug'], [order]).value();
  },

  findOne(filter) {
    return db.get('commerce').find(filter).value();
  },
});

export default createCommerceModel;
