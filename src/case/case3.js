import GetResult from "../algorithm/getResult";
import GetA from "../algorithm/getA";
import GetB from "../algorithm/getB";
import GetC from "../algorithm/getC";
import GetD from "../algorithm/getD";
import GetL1 from "../algorithm/getL1";
import GetL2 from "../algorithm/getL2";

const Case3 = (testData) => {
  const {
    dire,
    pickup_x,
    pickup_y,
    drop_x,
    drop_y,
    hos_x,
    hos_y,
    pickup_time,
    old_hos_arr_time,
    old_hos_dep_time,
    rev_date,
    gowithHospitalTime,
    prev_terminate_time,
    post_pickup_time,
    prev_last_x,
    prev_last_y,
    post_first_x,
    post_first_y,
    service_kind_id,
  } = testData;

  let a, b, cArr, d;
  let L1, L2, L3;
  let L4, dispatch;
  let hos_arr_time = rev_date + "T" + old_hos_arr_time + "+0900";
  let hos_dep_time = rev_date + "T" + old_hos_dep_time + "+0900";
  a = GetA(
    { lon: pickup_y, lat: pickup_x },
    { lon: hos_y, lat: hos_x },
    hos_arr_time
  );
  b = GetB(hos_arr_time, a);
  L1 = GetL1(a, b);
  cArr = GetC(L1, pickup_x, pickup_y);
  L2 = GetL2(b, cArr);
  d = GetA(
    { lon: hos_y, lat: hos_x },
    { lon: drop_y, lat: drop_x },
    hos_dep_time
  );
  L3 = GetD(L2, drop_x, drop_y);
  L4 = GetL2(d, L3);
  dispatch = GetResult(L4, L2);
  return dispatch[0].car_id; //최종 배차된 차의 car_id
};

export default Case3;
