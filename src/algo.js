import { Case1, Case2, Case3 } from "./case";
import {
  testData1,
  testData2,
  testData3,
  testData4,
} from "./algorithm/tmpData";

const Algo = async () => {
  let isOverPoint = 0;
  if (testData2.gowithHospitalTime > 120) {
    isOverPoint = 1; // 2시간 초과
  }

  if (testData2.dire == "집-집") {
    if (isOverPoint) {
      let dispatch4_1 = await Case1(testData4);
      let dispatch4_2 = await Case2(testData4);
      if (dispatch4_1 != -1 && dispatch4_2 != -1) {
        return { goHospital: dispatch4_1, goHome: dispatch4_2 };
      }
    } else {
      let dispatch3 = Case3(testData3);
      if (dispatch3 != -1) {
        return dispatch3;
      }
    }
  } else if (testData1.dire == "집-병원") {
    let dispatch1 = Case1(testData1);
    if (dispatch1 != -1) {
      return dispatch1;
    }
  } else if (testData2.dire == "병원-집") {
    let dispatch2 = Case2(testData2);
    if (dispatch2 != -1) {
      return dispatch2;
    }
  }
  return "no dispatch";
};
export default Algo;
