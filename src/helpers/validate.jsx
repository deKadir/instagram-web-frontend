export const validateFields = (formObject) => {
  const fields = [];
  for (var field in formObject) {
    if (formObject[field] === "") {
      fields.push(field);
    }
  }
  return fields;
};

export var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};
