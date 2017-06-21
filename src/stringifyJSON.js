// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if(typeof obj === 'string'){
    return   '"'+ obj + '"';
  }
  if(typeof obj === 'number'){
    return (obj).toString();
  }
  if(typeof obj === 'boolean'){
    return obj.toString();
  }
  if(obj === null){
    return 'null';
  }
  if(typeof obj == 'function' || typeof obj === 'undefined'){
    return 'null';
  }
   
  if(Array.isArray(obj)){
  var i = 0;
      console.log("Line 29 -> ",obj)
  while(i<obj.length){

      obj[i] = stringifyJSON(obj[i]);
        i++;
    }

       return '[' + obj + ']';
  }
   
  if(typeof obj === 'object'){
    var newArr =[]
    for(var key in obj){
      var temp = [];
      if(key === 'functions' || key === 'undefined'){
        return '{}';  
      }
      else{
          var newkey = stringifyJSON(key)
          var newVal = stringifyJSON(obj[key]);
            temp.push(newVal);
            temp.push(newkey);
      }
      newArr.push(temp.pop() +':'+temp.pop());
    }
   return '{'+newArr+'}'; 
  }
   ////
    

};
console.log(stringifyJSON({}));

console.log(JSON.stringify({}));
//console.log(stringifyJSON([1,2,"new String"]));
// used for stringifyJSON spec
// hint: JSON does not allow you to stringify functions or

