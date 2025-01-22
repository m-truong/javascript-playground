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

function myTraditionalFunction() {

}

const myArrowFunction = () => {}