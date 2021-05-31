const getQuery = (path, queryObj) => {
  const queryArr = Object.entries(queryObj);

  const queryString = queryArr.reduce((result, current, index) => {
    const [param, value] = current;

    if (Boolean(value)) {
      const char = index === 0 ? '?' : '&';
      return `${result}${char}${param}=${JSON.stringify(value)}`;
    }

    return result;
  }, '');

  if (queryString.length !== 0) {
    return path + queryString;
  }

  return path;
};

export default getQuery;
