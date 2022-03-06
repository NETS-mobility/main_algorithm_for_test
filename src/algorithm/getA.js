import TmapTimeMachine from "./tmapTimeMachine";
import GetArrangeTime from "./getArrangeTime";

const GetA = async (departure, arrival, way, hosTime) => {
  let moveType = "";
  let a = 0;

  if (way == "집-병원") {
    moveType = "arrival";
  } else {
    moveType = "departure";
  }

  console.log("dep==", departure);
  console.log("arr==", arrival);

  // await TmapTimeMachine(
  //   departure?.lon,
  //   departure?.lat,
  //   arrival?.lon,
  //   arrival?.lat,
  //   moveType,
  //   hosTime
  // ).then((tmapTime) => {
  //   a = tmapTime + 20 + GetArrangeTime(); //a1
  // });
  a = a * 60000; //minutes -> milliseconds
  return a;
};

export default GetA;
