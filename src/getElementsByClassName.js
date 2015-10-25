// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var result = [];
  function getElements(current) {
  	if(current.classList !== undefined && current.classList.contains(className)) {
  		result.push(current);
  	}
  }
  return result; 
};

