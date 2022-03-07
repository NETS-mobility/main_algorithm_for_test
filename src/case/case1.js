import GetDispatchResult from "../algorithm/GetDispatchResult";
import GetEstimatedTime from "../algorithm/GetEstimatedTime";
import GetPickupTime from "../algorithm/GetPickupTime";
import GetPrevArrivalTime from "../algorithm/GetPrevArrivalTime";
import GetDispatchAvailableCar from "../algorithm/GetDispatchAvailableCar";
import GetL1 from "../algorithm/GetL1";
import GetL2 from "../algorithm/GetL2";

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

  let estimatedTime, pickupTime, prevArrivalTimeArray;
  let L1, L2, L3;
  let dispatch;
  let hos_arr_time = rev_date + "T" + old_hos_arr_time + "+0900";

  console.log("hello I'm case1");
  estimatedTime = await GetEstimatedTime(
    { lon: pickup_y, lat: pickup_x },
    { lon: hos_y, lat: hos_x },
    dire,
    hos_arr_time,
    service_kind_id
  ).then((res) => res);
  console.log("case1 estimatedTime==", estimatedTime);

  pickupTime = GetPickupTime(hos_arr_time, estimatedTime);
  console.log("case1 pickupTime==", pickupTime);

  L1 = GetL1(estimatedTime, pickupTime); //백엔드에서 test 필요
  console.log("case1 L1==", L1);

  prevArrivalTimeArray = await GetPrevArrivalTime(L1, pickup_x, pickup_y).then(
    (res) => res
  );
  console.log("case1 prevArrivalTimeArray==", prevArrivalTimeArray);

  L2 = GetL2(pickupTime, prevArrivalTimeArray);
  console.log("case1 L2==", L2);

  L3 = await GetDispatchAvailableCar(L2, hos_x, hos_y, hos_arr_time).then(
    (res) => res
  );
  console.log("case1 L3==", L3);

  dispatch = GetDispatchResult(L3);
  console.log("case1 dispatch==", dispatch);
  if (dispatch == -1) {
    return -1;
  } else {
    return dispatch[0].car_id; //최종 배차된 차의 car_id
  }
};

export default Case1;
