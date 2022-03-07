const testData1 = {
  dire: "집-병원",
  pickup_x: 127.078202,
  pickup_y: 37.618934,
  drop_x: 0,
  drop_y: 0,
  hos_x: 127.034464,
  hos_y: 37.5068891,
  old_hos_arr_time: "15:00:00",
  old_hos_dep_time: "",
  rev_date: "2022-03-04",
  gowithHospitalTime: 0,
  service_kind_id: 4,
};
const testData2 = {
  dire: "병원-집",
  pickup_x: 0,
  pickup_y: 0,
  drop_x: 127.078202,
  drop_y: 37.618934,
  hos_x: 127.034464,
  hos_y: 37.5068891,
  old_hos_arr_time: "",
  old_hos_dep_time: "14:00:00",
  rev_date: "2022-03-04",
  gowithHospitalTime: 0,
  service_kind_id: 4,
};
const testData3 = {
  dire: "집-집",
  pickup_x: 127.078202,
  pickup_y: 37.618934,
  drop_x: 127.078202,
  drop_y: 37.618934,
  hos_x: 127.034464,
  hos_y: 37.5068891,
  old_hos_arr_time: "15:00:00",
  old_hos_dep_time: "15:50:00",
  rev_date: "2022-03-04",
  gowithHospitalTime: 50,
  service_kind_id: 5,
};
const testData4 = {
  dire: "집-집", //방향 ex)"집-병원", "병원-집", "집-집"
  pickup_x: 127.078202, //픽업장소 x좌표
  pickup_y: 37.618934, //픽업장소 y좌표
  drop_x: 127.078202, //드롭장소 x좌표
  drop_y: 37.618934, //드롭장소 y좌표
  hos_x: 127.034464, //병원 x좌표
  hos_y: 37.5068891, //병원 y좌표
  old_hos_arr_time: "15:00:00", //희망 병원 도착시간
  old_hos_dep_time: "17:30:00", //희망 병원 출발시간
  rev_date: "2022-03-04", //희망 예약날짜
  gowithHospitalTime: 150, //총 병원 동행 시간
  service_kind_id: 5, //서비스 종류 1: 네츠무브 2: 네츠휠체어편도 3: 네츠휠체어왕복 4:네츠휠체어플러스편도 5:네츠휠체어플러스왕복
};

const testDataArr1 = [ {
    dire: "집-집",
    pickup_x: 126.831157,
    pickup_y: 37.573392,
    drop_x: 126.831157,
    drop_y: 37.573392,
    hos_x: 126.886260, // 이대목동병원
    hos_y: 37.538960,
    old_hos_arr_time: "12:00:00",
    old_hos_dep_time: "15:00:00",
    rev_date: "2022-03-04",
    gowithHospitalTime: 180,
    service_kind_id: 3,
  },
  {
    dire: "집-병원",
    pickup_x: 126.911092,
    pickup_y: 37.581616,
    drop_x: 0,
    drop_y: 0,
    hos_x: 126.886260,
    hos_y: 37.538960,
    old_hos_arr_time: "10:00:00",
    old_hos_dep_time: "",
    rev_date: "2022-03-04",
    gowithHospitalTime: 0,
    service_kind_id: 1,
  },
  {
    dire: "병원-집",
    pickup_x: 0,
    pickup_y: 0,
    drop_x: 126.911092,
    drop_y: 37.581616,
    hos_x: 126.940612, // 연세세브란스병원
    hos_y: 37.562976,
    old_hos_arr_time: "",
    old_hos_dep_time: "11:00:00",
    rev_date: "2022-03-04",
    gowithHospitalTime: 0,
    service_kind_id: 2,
  },
  {
    dire: "집-집",
    pickup_x: 126.918114,
    pickup_y: 37.593509,
    drop_x: 126.955002,
    drop_y: 37.537367,
    hos_x: 126.940612,
    hos_y: 37.562976,
    old_hos_arr_time: "15:00:00",
    old_hos_dep_time: "16:30:00",
    rev_date: "2022-03-04",
    gowithHospitalTime: 90,
    service_kind_id: 5,
  },
  {
    dire: "집-병원",
    pickup_x: 126.955002,
    pickup_y: 37.537367,
    drop_x: 0,
    drop_y: 0,
    hos_x: 127.087910, // 삼성서울병원
    hos_y: 37.489587,
    old_hos_arr_time: "14:00:00",
    old_hos_dep_time: "",
    rev_date: "2022-03-04",
    gowithHospitalTime: 0,
    service_kind_id: 1,
  },
  {
    dire: "병원-집",
    pickup_x: 0,
    pickup_y: 0,
    drop_x: 126.955002,
    drop_y: 37.537367,
    hos_x: 127.087910,
    hos_y: 37.489587,
    old_hos_arr_time: "",
    old_hos_dep_time: "17:00:00",
    rev_date: "2022-03-04",
    gowithHospitalTime: 0,
    service_kind_id: 4,
  }
];

export { testData1, testData2, testData3, testData4, testDataArr1 };
