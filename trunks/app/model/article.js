'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const ArticleSchema = new Schema({

    title: {
      type: String,
      required: true,
    },
    _id: {
      type: Schema.ObjectId,
      ref: 'Tags',
      required: true,
    },
    summary: {
      type: String,
    },
  }, { versionKey: false });

  return mongoose.model('Article', ArticleSchema, 'article');
};
