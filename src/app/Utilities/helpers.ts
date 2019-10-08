export const setQueries = (
  queries: object,
  queryParams = 'search?'
) => {
  let dataBuffer = '';
  Object.keys(queries).forEach((key) => {
    dataBuffer += `${key}=${queries[key]}&`;
  });
  queryParams += dataBuffer;

  return queryParams;
};

export const newState = (state: object, newData: any) => {
  return Object.assign({}, state, newData);
};

export const lazyLoad = (target) => {
  const IObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-lazy');
        img.setAttribute('src', src);

        observer.disconnect();
      }
    });
  });
  IObserver.observe(target);
};
