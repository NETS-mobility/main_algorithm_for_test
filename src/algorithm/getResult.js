const GetResult = (L3, cArr) => {
  if (L3.length == 0) {
    return -1;
  }
  console.log("L3==", L3);
  // console.log("carr=", cArr);
  // L3.forEach((data) => console.log("L3==", data.car_id));
  // const filteredArr = await cArr.filter(
  //   (i) => i.car_id == L3.forEach((data) => data.car_id)
  // );

  // cArr = [{ car_id: 11 }, { car_id: 22 }, { car_id: 33 }, { car_id: 44 }];
  // L3 = [{ car_id: 11 }, { car_id: 22 }, { car_id: 33 }, { car_id: 44 }];
  // console.log("f=====", filteredArr);
  const opt = L3.sort(function (a, b) {
    return b.c - a.c;
  });

  return opt;
};

export default GetResult;
