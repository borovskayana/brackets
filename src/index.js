module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 == 1) {
    return false;
  }
  var stack = new Array();
  for (var i = 0; i <= str.length - 1; i++) {
    var find = false;
    for (var n = 0; n < bracketsConfig.length; n++) {
      if (str[i] == bracketsConfig[n][0]) {
        find = true;
        if (bracketsConfig[n][0] == bracketsConfig[n][1]) {
          if (stack[stack.length - 1] == bracketsConfig[n][0]) {
            stack.pop();
            break;
          }
        }
        stack.push(bracketsConfig[n][1]);
        break;
      }
    }
    if (!find) {
      if (stack.length == 0 || str[i] != stack[stack.length - 1]) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length == 0 ? true : false;
};
