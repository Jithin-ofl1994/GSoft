export const LoadData = (page, pageSize, data) =>
  new Promise((resolve) => {
    resolve(data.slice(page * pageSize, (page + 1) * pageSize));
  });

export const isEmptyObject = (obj) =>
  Object.keys(obj).length === 0 && obj.constructor === Object;
