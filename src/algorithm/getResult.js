const GetResult = (L3, cArr) => {
  if (L3.length == 0) {
    return -1;
  }
  const opt = L3.sort(function (a, b) {
    return b.c - a.c;
  });

  return opt;
};

export default GetResult;
