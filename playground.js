// playground for JS challenges

// implement filter
function myFilter(array, test) {
  const filtered = [];
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    if (test(value)) {
      filtered.push(value);
    }
    console.log(filtered)
  }
  return filtered;
}

// implement partial app function - pre-fill args of a function to be invoked later
function partial(fn, ...args) {
  // console.log(args);
  const newFn = (...remainingArgs) => fn(...args, ...remainingArgs);
  return newFn;
}

// implement the binding of a function to specific context
function simpleBind(fn, context, ...args) {
  // This binds the function to the given context and preset arguments
  const fixedThisBinderFunc = fn.bind(context, ...args);
  return fixedThisBinderFunc;
}

// implement map functionality
function myMap(array, transform) {
  // console.log(...array);
  const newAriana = [];
  for (let e of array) {
    const newE = transform(e);
    newAriana.push(newE);
  }
  console.log(newAriana.length);
  return newAriana;
}

// write traditional JS function with spread/rest operator in-place of args
function myTraditionalFunction(...args) {
  const words = [...args];
  const string = words.toString();
  return `Hello ${words}`;
}

// write modern ES6 modern arrow expression with an 'un-bound' lexical scope
const myArrowFunction = (arg1, arg2) => {arg2 * arg2}

// JS functions have .length property, which reflects the number of declared parameters
// ...in the function's definition
function example(a, b, c) {}
console.log(example.length); // Output: 3