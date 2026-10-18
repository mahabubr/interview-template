const result1 = () => {
  return {};
};

const result2 = () => {
  return {};
};

const result3 = () => {
  return {};
};

const result4 = () => {
  return {};
};

async function solve() {
  // Start Coding...

  const r1 = result1();
  const r2 = result2();
  const r3 = result3();
  const r4 = result4();

  return { r1, r2, r3, r4 };
}

const result = await solve();

console.log(result);
