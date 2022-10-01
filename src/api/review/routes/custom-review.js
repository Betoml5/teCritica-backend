"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/reviews/sales-by-column",
      handler: "review.salesByColumn",
    },
  ],
};
