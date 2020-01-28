export const filterFunction = (result, filterKey, filterState) => {
  let resultValue = result[filterKey];

  if (Array.isArray(resultValue)) {
    let include = false;

    resultValue.forEach(resultValue => {
      filterState.forEach(value => {
        if (resultValue === value) {
          include = true;
        }
      });
    });

    return include;

  } else {
    resultValue = resultValue.toLowerCase();
    return resultValue.indexOf(filterState.toLowerCase()) > -1;
  }
};

export const resultsFilterer = (results, filters) => {
  let filteredResults = [];

  results.forEach(result => {
    let exclude = false;

    filters.forEach(filter => {
      const filterKey = filter.field;
      const value = filter.value;

      if (!filterFunction(result, filterKey, value)) {
        exclude = true;
      }
    });

    if (!exclude) {
      filteredResults.push(result);
    }
  });

  return filteredResults;
};
