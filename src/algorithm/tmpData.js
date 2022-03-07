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

const testDataArr2 = [ {
    dire: "집-집",
    pickup_x: 126.875404, // 경기 광명시
    pickup_y: 37.471648,
    drop_x: 126.875404, // 경기 광명시
    drop_y: 37.471648,
    hos_x: 126.92435, // 서울특별시보라매병원(서울 동작구)
    hos_y: 37.493277,
    old_hos_arr_time: "10:20:00",
    old_hos_dep_time: "12:30:00",
    rev_date: "2022-03-14",
    gowithHospitalTime: 130, // 2시간 초과
    service_kind_id: 5,
  },
  {
    dire: "집-병원",
    pickup_x: 126.740727, // 인천 계양구
    pickup_y: 37.5268,
    drop_x: 0,
    drop_y: 0,
    hos_x: 126.988788, // 인제대학교 서울백병원(서울 중구)
    hos_y: 37.564963,
    old_hos_arr_time: "14:10:00",
    old_hos_dep_time: "",
    rev_date: "2022-03-15",
    gowithHospitalTime: 30, // 2시간 이하(기본)
    service_kind_id: 2,
  },
  {
    dire: "병원-집",
    pickup_x: 0,
    pickup_y: 0,
    drop_x: 126.921322, // 서울 서대문구
    drop_y: 37.567074,
    hos_x: 126.940348, // 세브란스병원(서울 서대문구)
    hos_y: 37.562325,
    old_hos_arr_time: "",
    old_hos_dep_time: "11:35:00",
    rev_date: "2022-03-14",
    gowithHospitalTime: 0, // 네츠 무브
    service_kind_id: 1,
  },
  {
    dire: "집-집",
    pickup_x: 127.12922, // 서울 송파구
    pickup_y: 37.510276,
    drop_x: 127.134581, // 서울 송파구
    drop_y: 37.504999,
    hos_x: 127.102528, // 잠실수가정의학과의원(서울 송파구)
    hos_y: 37.514609,
    old_hos_arr_time: "13:50:00",
    old_hos_dep_time: "15:00:00",
    rev_date: "2022-03-15",
    gowithHospitalTime: 70, // 2시간 이하
    service_kind_id: 3,
  },
  {
    dire: "집-병원",
    pickup_x: 127.045921, // 서울 동대문구
    pickup_y: 37.574907,
    drop_x: 0,
    drop_y: 0,
    hos_x: 127.141218, // 무지개연합의원(경기 구리시)
    hos_y: 37.612598,
    old_hos_arr_time: "14:15:00",
    old_hos_dep_time: "",
    rev_date: "2022-03-14",
    gowithHospitalTime: 60, // 2시간 이하
    service_kind_id: 2,
  },
  {
    dire: "병원-집",
    pickup_x: 0,
    pickup_y: 0,
    drop_x: 127.002565, // 서울 서초구
    drop_y: 37.477085,
    hos_x: 126.965514, // 평촌부부한의원(경기 안양시)
    hos_y: 37.396288,
    old_hos_arr_time: "",
    old_hos_dep_time: "17:25:00",
    rev_date: "2022-03-15",
    gowithHospitalTime: 130, // 2시간 초과
    service_kind_id: 4,
  }
];

export { testData1, testData2, testData3, testData4, testDataArr1, testDataArr2 };
