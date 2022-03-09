import { Case1, Case2, Case3 } from "./case";
import { testData1, testData2, testData3, testData4 } from "./tempData/tmpData";

const Algo = async () => {
  let isOverPoint = 0;
  if (testData2.gowithHospitalTime > 120) {
    isOverPoint = 1; // 2시간 초과
  }

  if (testData3.dire == "집-집") {
    if (isOverPoint) {
      //case4의 경우, 인자를 넘겨줄 때 gowithHospitalTime을 0으로 줘야 한다.
      let dispatchResult4_1 = await Case1(testData4, false);
      let dispatchResult4_2 = await Case2(testData4, false);
      if (dispatchResult4_1 != -1 && dispatchResult4_2 != -1) {
        return { goHospital: dispatchResult4_1, goHome: dispatchResult4_2 };
      }
    } else {
      let dispatchResult3 = Case3(testData3);
      if (dispatchResult3 != -1) {
        return dispatchResult3;
      }
    }
  } else if (testData2.dire == "집-병원") {
    let dispatchResult1 = Case1(testData1, true);
    if (dispatchResult1 != -1) {
      return dispatchResult1;
    }
  } else if (testData2.dire == "병원-집") {
    let dispatchResult2 = Case2(testData2, true);
    if (dispatchResult2 != -1) {
      return dispatchResult2;
    }
  }
  return "no dispatch";
};
export default Algo;
