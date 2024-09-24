function zipList(list1: unknown[], list2: unknown[]): unknown[] {
  const result: unknown[] = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i], list2[i]);
  }
  return result;
}

function zipListTheSimpleWay(list1: unknown[], list2: unknown[]): unknown[] {
  const result: unknown[] = [];
  list1.forEach((element, index) => {
    result.push(element, list2[index]);
  });
}

console.log(zipList([1, 2, 3], ['a', 'b', 'c']));
console.log(zipListTheSimpleWay([1, 2, 3], ['a', 'b', 'c']));
