import GetResult from "../algorithm/getResult";
import GetA from "../algorithm/getA";
import GetC from "../algorithm/getC";
import GetD from "../algorithm/getD";
import GetL1 from "../algorithm/getL1";
import GetL2 from "../algorithm/getL2";
import ToKoreanTime from "../util/toKoreanTime";
import AddMinuteToDate from "../util/addMinuteToDate";

const Case2 = async (testData) => {
  const {
    dire,
    drop_x,
    drop_y,
    hos_x,
    hos_y,
    old_hos_dep_time,
    rev_date,
    service_kind_id,
  } = testData;

  let a, b, cArr;
  let L1, L2, L3;
  let dispatch;
  let hos_dep_time = rev_date + "T" + old_hos_dep_time + "+0900";

  a = await GetA(
    { lon: hos_y, lat: hos_x },
    { lon: drop_y, lat: drop_x },
    dire,
    hos_dep_time,
    service_kind_id
  ).then((res) => res);
  console.log("case2 a==", a);

  b = ToKoreanTime(new Date(hos_dep_time));
  console.log("case2 b==", b);

  L1 = GetL1(a, b);
  console.log("case2 L1==", L1);

  cArr = await GetC(L1, hos_x, hos_y).then((res) => res);
  console.log("case2 cArr==", cArr);

  L2 = GetL2(b, cArr);
  console.log("case2 L2==", L2);

  L3 = await GetD(
    L2,
    drop_x,
    drop_y,
    AddMinuteToDate(new Date(hos_dep_time), a / 60000)
  ).then((res) => res);
  console.log("case2 L3==", L3);

  dispatch = GetResult(L3, cArr);
  console.log("case2 dispatch==", dispatch);

  return dispatch[0].car_id; //최종 배차된 차의 car_id
};

export default Case2;
