function populate(db, obj, prop, model) {
  return {
    ...obj,
    [prop]: obj[prop].map((id) => db.get(model).find({ id: id }).value()),
  };
}

const createCommerceModel = (db) => ({
  findMany(order) {
    const commerces = db.get('commerce').orderBy(['slug'], [order]).value();
    return commerces.map((commerce) =>
      populate(db, commerce, 'categories', 'category')
    );
  },

  findOne(filter) {
    const commerce = db.get('commerce').find(filter).value();
    return populate(db, commerce, 'categories', 'category');
  },
});

export default createCommerceModel;
