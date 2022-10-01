"use strict";

/**
 * review controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::review.review", ({ strapi }) => ({
  async salesByColumn(ctx) {
    try {
      let column1 = [];
      let column2 = [];
      let column3 = [];
      let column4 = [];

      const reviews = await strapi.entityService.findMany(
        "api::review.review",
        {}
      );
      for (let i = 0; i < reviews.length; i++) {
        let rest = i % 4;
        if (rest === 0) column1.push(reviews[i]);
        else if (rest === 1) column2.push(reviews[i]);
        else if (rest === 2) column3.push(reviews[i]);
        else column4.push(reviews[i]);
      }

      ctx.body = {
        column1,
        column2,
        column3,
        column4,
      };
    } catch (error) {
      ctx.body = error;
    }
  },
}));
