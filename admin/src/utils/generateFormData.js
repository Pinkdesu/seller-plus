export function generateFormData(data) {
  const formData = new FormData();

  const keys = Object.keys(data);

  keys.forEach((key) => {
    const property = data[key];
    const value =
      typeof property !== 'object' ? property : JSON.stringify(property);

    formData.append(key, value);
  });

  return formData;
}
