export var validateEmail = function (email) {
  var re = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/; //eslint-disable-line
  return re.test(email);
};
