import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

import createCategoryModel from './category';
import createCommerceModel from './commerce';

const adapter = new FileSync('api/db/db.json');

export const db = low(adapter);

export const models = {
  Category: createCategoryModel(db),
  Commerce: createCommerceModel(db),
};
