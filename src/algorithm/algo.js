import GetResult from "./getResult";
import GetA from "./getA";
import GetB from "./getB";
import GetC from "./getC";
import GetD from "./getD";
import GetL1 from "./getL1";
import GetL2 from "./getL2";

const Algo = async () => {
  const dire = "집-병원";
  const pickup_x = 127.078202;
  const pickup_y = 37.618934;
  const drop_x = 0;
  const drop_y = 0;
  const hos_x = 127.034464;
  const hos_y = 37.5068891;
  const pickup_time = "14:00:00";
  const old_hos_arr_time = "15:00:00";
  const old_hos_dep_time = "";
  const rev_date = "2022-03-04";
  const gowithHospitalTime = 0;
  const prev_terminate_time = "2022-03-04 11:00:00";
  const post_pickup_time = "2022-03-04 17:00:00";
  const prev_last_x = 126.937838;
  const prev_last_y = 37.5535483;
  const post_first_x = 126.922458;
  const post_first_y = 37.5861458;
  const service_kind_id = 4;

  let isOverPoint = 0;
  if (gowithHospitalTime > 120) {
    isOverPoint = 1; // 2시간 초과
  }

  let hos_arr_time = rev_date + "T" + old_hos_arr_time + "+0900";
  let hos_dep_time = rev_date + "T" + old_hos_dep_time + "+0900";

  let a, b, cArr, d;
  let L1, L2, L3;
  let a1, b1, L11, L21, L31, cArr1, a2, b2, L12, cArr2, L22, L32, L4, dispatch;

  console.log("dire===,", dire);

  if (dire == "집-집") {
    if (isOverPoint) {
      //case 4
      a1 = GetA(
        { lon: pickup_y, lat: pickup_x },
        { lon: hos_y, lat: hos_x },
        hos_arr_time
      );
      b1 = GetB(hos_arr_time, a1);
      L11 = GetL1(a1, b1);
      cArr1 = GetC(L11, pickup_x, pickup_y);
      L21 = GetL2(b1, cArr1);
      L31 = GetD(L21, drop_x, drop_y);

      a2 = GetA(
        { lon: pickup_y, lat: pickup_x },
        { lon: drop_y, lat: drop_x },
        hos_dep_time
      );
      b2 = hos_dep_time;
      L12 = GetL1(a2, b2);
      cArr2 = GetC(L12, hos_x, hos_y);
      L22 = GetL2(b2, cArr2);
      L32 = GetD(L22, drop_x, drop_y);

      if (L31.length != 0 && L32.length != 0) {
      }
    } else {
      //case 3
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
    }
  } else if (dire == "집-병원") {
    //case 1
    a = await GetA(
      { lon: pickup_y, lat: pickup_x },
      { lon: hos_y, lat: hos_x },
      dire,
      hos_arr_time,
      service_kind_id
    ).then((res) => res);

    b = GetB(hos_arr_time, a);
    L1 = GetL1(a, b); //백엔드에서 test 필요
    cArr = await GetC(L1, pickup_x, pickup_y).then((res) => res);
    // L2 = GetL2(b, cArr);
    // L3 = GetD(L2, drop_x, drop_y);
    // dispatch = GetResult(L3, cArr);
    // return dispatch[0].car_id; //최종 배차된 차의 car_id
  } else if (dire == "병원-집") {
    //case 2
    a = GetA(
      { lon: pickup_y, lat: pickup_x },
      { lon: drop_y, lat: drop_x },
      hos_dep_time
    );
    b = hos_dep_time;
    L1 = GetL1(a, b);
    cArr = GetC(L1, hos_x, hos_y);
    L2 = GetL2(b, cArr);
    L3 = GetD(L2, drop_x, drop_y);
    dispatch = GetResult(L3, cArr);
    return dispatch[0].car_id; //최종 배차된 차의 car_id
  }
};
export default Algo;
