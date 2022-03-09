import GetDispatchResult from "../algorithm/getDispatchResult";
import GetEstimatedTime from "../algorithm/getEstimatedTime";
import GetPickupTime from "../algorithm/getPickupTime";
import GetPrevArrivalTime from "../algorithm/getPrevArrivalTime";
import GetDispatchAvailableCar from "../algorithm/getDispatchAvailableCar";
import GetL1 from "../algorithm/getL1";
import GetL2 from "../algorithm/getL2";
import AddMinuteToDate from "../util/addMinuteToDate";
import ToKoreanTime from "../util/toKoreanTime";

const Case1 = async (testData, isCase1) => {
  const {
    dire,
    pickup_x,
    pickup_y,
    hos_x,
    hos_y,
    old_hos_arr_time,
    gowithHospitalTime,
    rev_date,
    service_kind_id,
  } = testData;

  let pickupTime, prevArrivalTimeArray;
  let L1, L2, L3;
  let hos_arr_time = rev_date + "T" + old_hos_arr_time + "+0900";
  let gowithTime = 0;
  if (isCase1) {
    gowithTime = gowithHospitalTime;
  }

  let estimatedData = await GetEstimatedTime(
    { lon: pickup_y, lat: pickup_x },
    { lon: hos_y, lat: hos_x },
    dire,
    hos_arr_time,
    service_kind_id
  ).then((res) => res);

  let estimatedTime = estimatedData.time;
  let estimatedDist = estimatedData.dist;

  console.log("case1 estimatedTime==", estimatedTime);

  pickupTime = GetPickupTime(hos_arr_time, estimatedTime);
  console.log("case1 pickupTime==", pickupTime);

  L1 = GetL1(estimatedTime, pickupTime); //백엔드에서 test 필요
  console.log("case1 L1==", L1);

  prevArrivalTimeArray = await GetPrevArrivalTime(
    L1,
    pickup_x,
    pickup_y,
    ToKoreanTime(new Date(pickupTime))
  ).then((res) => res);
  console.log("case1 prevArrivalTimeArray==", prevArrivalTimeArray);

  L2 = GetL2(prevArrivalTimeArray);
  console.log("case1 L2==", L2);

  L3 = await GetDispatchAvailableCar(
    L2,
    hos_x,
    hos_y,
    AddMinuteToDate(new Date(hos_arr_time), gowithTime)
  ).then((res) => res);
  console.log("case1 L3==", L3);

  const ResultData = {
    dispatch: GetDispatchResult(L3),
    expect_pickup_time: pickupTime, //pickupTime
    expect_terminate_service_time: ToKoreanTime(
      AddMinuteToDate(new Date(hos_arr_time), gowithTime)
    ),
    expect_move_distance: estimatedDist / 1000, //GetEstimatedTime돌렸을 때 나온 총 거리
    expect_move_time: estimatedTime / 60000, //estimatedTime
  };

  console.log("case1 dispatch==", ResultData.dispatch);
  if (ResultData.dispatch == -1) {
    return -1;
  } else {
    console.log(ResultData);
    return ResultData.dispatch[0].car_id;
  } //최종 배차된 차의 car_id
};

export default Case1;
