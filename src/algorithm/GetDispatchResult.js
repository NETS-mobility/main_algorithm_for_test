const GetDispatchResult = (L3) => {
  if (L3.length == 0) {
    return -1;
  }
  const opt = L3.sort(function (a, b) {
    return a.prevArrivalTime - b.prevArrivalTime;
  });

  return opt;
};

export default GetDispatchResult;
