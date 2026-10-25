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
  const results = {
    result1: result1(),
    result2: result2(),
    result3: result3(),
    result4: result4(),
  };

  return results;
}

solve().then(console.log).catch(console.error);
