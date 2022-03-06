import ToKoreanTime from "../util/toKoreanTime";
const GetL2 = (b, cArr) => {
  const L2 = [];
  for (let i = 0; i < cArr.length; i++) {
    if (ToKoreanTime(cArr[i].c) < b) {
      console.log("c, b, L2에 넣었습니다.", ToKoreanTime(cArr[i].c), b);
      L2.push(cArr[i]);
    }
  }
  return L2;
};

export default GetL2;
