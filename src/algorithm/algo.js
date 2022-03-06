import { Case1, Case2, Case3, Case4 } from "../case";
import { testData1, testData2 } from "./tmpData";

const Algo = async () => {
  let isOverPoint = 0;
  if (testData2.gowithHospitalTime > 120) {
    isOverPoint = 1; // 2시간 초과
  }

  if (testData2.dire == "집-집") {
    if (isOverPoint) {
      Case4(testData2);
    } else {
      Case3(testData2);
    }
  } else if (testData1.dire == "집-병원") {
    Case1(testData1);
  } else if (testData2.dire == "병원-집") {
    Case2(testData2);
  }
};
export default Algo;
