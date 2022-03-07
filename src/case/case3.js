import GetResult from "../algorithm/getResult";
import GetA from "../algorithm/getA";
import GetB from "../algorithm/getB";
import GetC from "../algorithm/getC";
import GetD from "../algorithm/getD";
import GetL1 from "../algorithm/getL1";
import GetL2 from "../algorithm/getL2";
import AddMinuteToDate from "../util/addMinuteToDate";

const Case3 = async (testData) => {
  const {
    pickup_x,
    pickup_y,
    drop_x,
    drop_y,
    hos_x,
    hos_y,
    old_hos_arr_time,
    old_hos_dep_time,
    rev_date,
    service_kind_id,
  } = testData;

  let a, b, cArr, d;
  let L1, L2, L3;
  let dispatch;
  let hos_arr_time = rev_date + "T" + old_hos_arr_time + "+0900";
  let hos_dep_time = rev_date + "T" + old_hos_dep_time + "+0900";

  a = await GetA(
    { lon: pickup_y, lat: pickup_x },
    { lon: hos_y, lat: hos_x },
    "집-병원",
    hos_arr_time,
    service_kind_id
  ).then((res) => res);
  console.log("case3 a==", a);

  b = GetB(hos_arr_time, a);
  console.log("case3 b==", b);

  L1 = GetL1(a, b);
  console.log("case3 L1==", L1);

  cArr = await GetC(L1, pickup_x, pickup_y).then((res) => res);
  console.log("case3 cArr==", cArr);

  L2 = GetL2(b, cArr);
  console.log("case3 L2==", L2);

  d = await GetA(
    { lon: hos_y, lat: hos_x },
    { lon: drop_y, lat: drop_x },
    "병원-집",
    hos_dep_time,
    service_kind_id
  ).then((res) => res);
  console.log("case3 d==", d);

  L3 = await GetD(
    L2,
    drop_x,
    drop_y,
    AddMinuteToDate(new Date(hos_dep_time), d / 60000)
  ).then((res) => res);
  console.log("case3 L3==", L3);

  dispatch = GetResult(L3, cArr);
  console.log("case3 dispatch==", dispatch);

  if (dispatch == -1) {
    return -1;
  } else {
    return dispatch[0].car_id; //최종 배차된 차의 car_id
  }
};

export default Case3;
