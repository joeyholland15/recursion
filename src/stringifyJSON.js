// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  	if(typeof obj === "number" || typeof obj === "boolean" || obj === null) {
  	  	return '' + obj + '';
    } else if(typeof obj === "string") {
    	return '"' + obj + '"'
    }
    if(Array.isArray(obj)) {
    	if(obj.length === 0) {
    		obj = '[]';
    	} else {
    		var stringified = [];
    		for(var i = 0; i < obj.length; i++) {
    			stringified.push(stringifyJSON(obj[i]));
    		};
    		var values = stringified.join(",");
    		return '[' + values + ']';
    	}
    } else if (typeof obj === "object") {
    	var keys = [];
    	for(var key in obj) {
    		keys.push(key);
    	};
    	if(keys.length === 0) {
    		return '{}'
    	} else {
    		var stringy = '';
    		for(var i = 0; i < keys.length; i++) {
    			if(typeof obj[keys[i]] !== "function" && keys[i] !== undefined && obj[keys[i]] !== undefined) {
    				if(i < keys.length - 1) {
    					stringy += stringifyJSON(keys[i]) + ":" + stringifyJSON(obj[keys[i]]) + ",";
    				} else {
    					stringy += stringifyJSON(keys[i]) + ":" + stringifyJSON(obj[keys[i]]);
    				}
    			}
    		};	
    		if(stringy === '') {
    			return '{}';
    		} else {
    			return '{' + stringy + '}';	
    		}
    	}	
    }
    return obj;
};
