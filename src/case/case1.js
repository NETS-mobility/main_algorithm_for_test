import GetResult from "../algorithm/getResult";
import GetA from "../algorithm/getA";
import GetB from "../algorithm/getB";
import GetC from "../algorithm/getC";
import GetD from "../algorithm/getD";
import GetL1 from "../algorithm/getL1";
import GetL2 from "../algorithm/getL2";

const Case1 = async (testData) => {
  const {
    dire,
    pickup_x,
    pickup_y,
    hos_x,
    hos_y,
    old_hos_arr_time,
    rev_date,
    service_kind_id,
  } = testData;

  let a, b, cArr;
  let L1, L2, L3;
  let dispatch;
  let hos_arr_time = rev_date + "T" + old_hos_arr_time + "+0900";

  console.log("hello I'm case1");
  a = await GetA(
    { lon: pickup_y, lat: pickup_x },
    { lon: hos_y, lat: hos_x },
    dire,
    hos_arr_time,
    service_kind_id
  ).then((res) => res);
  console.log("case1 a==", a);

  b = GetB(hos_arr_time, a);
  console.log("case1 b==", b);

  L1 = GetL1(a, b); //백엔드에서 test 필요
  console.log("case1 L1==", L1);

  cArr = await GetC(L1, pickup_x, pickup_y).then((res) => res);
  console.log("case1 cArr==", cArr);

  L2 = GetL2(b, cArr);
  console.log("case1 L2==", L2);

  L3 = await GetD(L2, hos_x, hos_y, hos_arr_time).then((res) => res);
  console.log("case1 L3==", L3);

  dispatch = GetResult(L3, cArr);
  console.log("case1 dispatch==", dispatch);
  if (dispatch == -1) {
    return -1;
  } else {
    return dispatch[0].car_id; //최종 배차된 차의 car_id
  }
};

export default Case1;
