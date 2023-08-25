class APIFeatures {
  // 2 params, the mongoose query, and the node queryString object
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  // build the query
  // create a shallow copy of the queryString object
  filter() {
    const queryObj = { ...queryString };
    const queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(get|gt|lte|lt)\b/g, `$${match}`);
    // construct the mongoose query object
    this.query = this.query.find(queryStr.parse(queryStr));
  }
}
