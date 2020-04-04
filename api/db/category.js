const createCategoryModel = (db) => ({
  findMany(order) {
    return db.get('category').orderBy(['slug'], [order]).value();
  },

  findOne(filter) {
    return db.get('category').find(filter).value();
  },
});

export default createCategoryModel;
