export const setUnits = (_, payload) => {
  const { units } = payload.data;

  return units;
};

export const setCountries = (_, payload) => {
  const { countries } = payload.data;

  return countries;
};

export const setFormValue = (state, payload) => {
  const { stateName, value } = payload;

  return {
    ...state,
    [stateName]: value,
  };
};

export const setInfoValue = (state, payload) => {
  const { stateName, index, value } = payload;

  const info = state.map((item, itemIndex) => {
    if (index !== itemIndex) return item;

    return { ...item, [stateName]: value };
  });

  return info;
};

export const setUnitId = (state, payload) => {
  const { index, id } = payload;

  const info = state.map((item, itemIndex) => {
    if (index !== itemIndex) return item;

    return { ...item, id };
  });

  return info;
};

export const addInfoItem = (state, payload) => [...state, payload];

export const deleteInfoItem = (state, _) => {
  const items = [...state];
  items.pop();

  return items;
};

export const addImages = (state, payload) => [...state, ...payload];
