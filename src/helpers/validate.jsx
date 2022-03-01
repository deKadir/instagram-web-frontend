export const validateFields = (formObject) => {
  const fields = [];
  for (var field in formObject) {
    if (formObject[field] === "") {
      fields.push(field);
    }
  }
  return fields;
};
