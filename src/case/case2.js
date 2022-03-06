import GetResult from "../algorithm/getResult";
import GetA from "../algorithm/getA";
import GetB from "../algorithm/getB";
import GetC from "../algorithm/getC";
import GetD from "../algorithm/getD";
import GetL1 from "../algorithm/getL1";
import GetL2 from "../algorithm/getL2";

const Case2 = async (testData) => {
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
  } = testData;

  let a, b, cArr;
  let L1, L2, L3;
  let dispatch;
  let hos_dep_time = rev_date + "T" + old_hos_dep_time + "+0900";

  a = await GetA(
    { lon: pickup_y, lat: pickup_x },
    { lon: drop_y, lat: drop_x },
    hos_dep_time
  ).then((res) => res);
  b = hos_dep_time;
  L1 = GetL1(a, b);
  cArr = await GetC(L1, hos_x, hos_y).then((res) => res);
  L2 = GetL2(b, cArr);
  L3 = await GetD(L2, drop_x, drop_y).then((res) => res);
  dispatch = GetResult(L3, cArr);
  return dispatch[0].car_id; //최종 배차된 차의 car_id
};

export default Case2;
