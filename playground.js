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
// new term Arity means the total # of arguments a function accepts
// Traditional JS functions implicitly return 'undefined'
function example(a, b, c) {
  return a*b*c;
}
console.log(example.length); // Output: 3

// Does not count default or rest parameters.
function example(a, b = 42, ...rest) {}
console.log(example.length); // Output: 1 (only `a` is counted)

// Practical Advice
// 	•	Readable Code: It’s best to choose descriptive names that make the function’s purpose clear.
// 	•	Short vs. Long: Use shorter names for general-purpose functions and longer, more descriptive names for domain-specific functions.
// 	•	Avoid Overly Generic Names: Avoid names like data, info, or value unless their meaning is clear from the context.

/**
 * Rules for Naming Parameters
	1.	Valid JavaScript Identifiers:
	•	Parameter names must follow the rules for variable naming:
	•	Must start with a letter, _, or $.
	•	Cannot start with a number.
	•	Cannot use reserved keywords (like class, return, etc.).
	•	No special characters (e.g., @, #, etc., are not allowed).
 */

  /**
   * Postfix (x++ or x--)
   * 	•	The operation increments or decrements the value of x after the current expression is evaluated.
   * vs. Prefix (++x or --x)
   * The operation increments or decrements the value of x before the current expression is evaluated.
   */

  // Practice JS functional-programming 'Currying technique'
// Currying is a technique in functional programming where a function that takes multiple arguments is transformed into a series of functions, each taking a single argument.
// Yes, return ends the current function’s execution, but in currying, each function returns another function until the chain is complete.
// •	Currying relies on functions returning other functions to continue the chain of calls.
// •	Execution only truly ends when a final result (not a function) is returned.

/**
 * A closure is created when:
	1.	A function is defined inside another function.
	2.	The inner function remembers and has access to the variables and parameters of the outer function, even after the outer function has completed execution.
 */

  // Implement a recursive callback sequence of functions that'll IMPLICITLY pool
  // ...and pre-fill arguments until all argumentsfrom the original fn()
  // ...are completely collected, and then call the original fn()
function curry(fn, arity = fn.length) {
  return function curried(...args) {
    if (args.length >= arity) {
      // If enough arguments are provided, execute the function
      return fn(...args);
    } else {
      // Otherwise, return a new function to collect more arguments
      return (...nextArgs) => curried(...args, ...nextArgs);
    }
  };
}