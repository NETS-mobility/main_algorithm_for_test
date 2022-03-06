import { Case1, Case2, Case3, Case4 } from "../case";

const Algo = async () => {
  const testData = {
    dire: "집-병원",
    pickup_x: 127.078202,
    pickup_y: 37.618934,
    drop_x: 0,
    drop_y: 0,
    hos_x: 127.034464,
    hos_y: 37.5068891,
    pickup_time: "14:00:00",
    old_hos_arr_time: "15:00:00",
    old_hos_dep_time: "",
    rev_date: "2022-03-04",
    gowithHospitalTime: 0,
    prev_terminate_time: "2022-03-04 11:00:00",
    post_pickup_time: "2022-03-04 17:00:00",
    prev_last_x: 126.937838,
    prev_last_y: 37.5535483,
    post_first_x: 126.922458,
    post_first_y: 37.5861458,
    service_kind_id: 4,
  };

  let isOverPoint = 0;
  if (testData.gowithHospitalTime > 120) {
    isOverPoint = 1; // 2시간 초과
  }

  if (testData.dire == "집-집") {
    if (isOverPoint) {
      Case4(testData);
    } else {
      Case3(testData);
    }
  } else if (testData.dire == "집-병원") {
    Case1(testData);
  } else if (testData.dire == "병원-집") {
    Case2(testData);
  }
};
export default Algo;
