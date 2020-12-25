'use strict';

const Service = require('egg').Service;

class ArticleService extends Service {
  /**
    * @param {Object} params
    * 根据ID获取单个项目
  */
  async getProjectById(params) {
    const { ctx, app } = this;
    try {
      const results = await ctx.model.Article.find({ // Article为modal/article.js里面命名的名字
        _id: app.mongoose.Types.ObjectId(params._id),
      });
      return results;
    } catch (err) {
      console.log(err);
      ctx.body = JSON.stringify(err);
    }
  }
}
module.exports = ArticleService;
