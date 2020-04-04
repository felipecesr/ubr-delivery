export default {
  Query: {
    categories(_, { order }, { models }) {
      return models.Category.findMany(order || 'asc');
    },
    category(_, { id }, { models }) {
      return models.Category.findOne({ id });
    },
    commerces(_, { order }, { models }) {
      return models.Commerce.findMany(order || 'asc');
    },
    commerce(_, { id }, { models }) {
      return models.Commerce.findOne({ id });
    },
  },
};
