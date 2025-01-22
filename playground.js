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

// implement partial app function
function partial(fn, ...args) {
  console.log(args);
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
  console.log(...array);

  const newAriana = [];
  for (let e of array) {
    const newE = transform(e);
    newAriana.push(newE);
  }
  console.log(newAriana.length);
  return newAriana;
}

function myTraditionalFunction() {

}

const myArrowFunction = () => {}