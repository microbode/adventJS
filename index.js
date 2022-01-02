import checkIsSameTree from "./24.js";

const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null },
};

console.log(checkIsSameTree(tree, tree));
