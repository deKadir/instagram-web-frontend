export var validateEmail = function (email) {
  var re = /.+@.+\.[A-Za-z]+$/;
  return re.test(email);
};
