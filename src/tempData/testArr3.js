//김지수
export const testCar3 = [
  {
    //car_id = 3-1
    //prev: 연세대학교 신촌세브란스병원
    //post: 여의도공원
    prev_terminate_time: "2022-03-04T11:00:00+0900",
    post_pickup_time: "2022-03-04T18:20:00+0900",
    prev_last_x: 126.94103179168812,
    prev_last_y: 37.56268383011834,
    post_first_x: 126.92151844732145,
    post_first_y: 37.52587518239515,
  },
  {
    //car_id = 3-2
    //prev: 명지병원
    //post: 연신내역
    prev_terminate_time: "2022-03-04T12:00:00+0900",
    post_pickup_time: "2022-03-04T19:40:00+0900",
    prev_last_x: 126.82896180962184,
    prev_last_y: 37.646893316065714,
    post_first_x: 126.92000901050096,
    post_first_y: 37.61896005077948,
  },
  {
    //car_id = 3-3
    //prev: 상계주공16단지 아파트
    //post: 개화산역 근처
    prev_terminate_time: "2022-03-04T15:00:00+0900",
    post_pickup_time: "2022-03-04T21:00:00+0900",
    prev_last_x: 127.05209935813014,
    prev_last_y: 37.66871697881065,
    post_first_x: 126.808773,
    post_first_y: 37.5732841,
  },
  {
    //car_id = 3-4
    //prev: LH 판교제2테크노밸리 기업성장센터
    //post: 가톨릭 성모 병원
    prev_terminate_time: "2022-03-04T09:00:00+0900",
    post_pickup_time: "2022-03-04T18:00:00+0900",
    prev_last_x: 127.09525516980818,
    prev_last_y: 37.41073497356564,
    post_first_x: 127.00478767344177,
    post_first_y: 37.50774002611129,
  },
];

const testDataArr3 = [
  {
    //rev_id = 3-1
    //pickup: 다산반도유보라메이플타운
    //hos: 서울의료원
    dire: "집-병원",
    pickup_x: 127.15376323911244,
    pickup_y: 37.62944467379483,
    drop_x: 0,
    drop_y: 0,
    hos_x: 127.09793177092291,
    hos_y: 37.614098661574225,
    old_hos_arr_time: "17:20:00",
    old_hos_dep_time: "",
    rev_date: "2022-03-04",
    gowithHospitalTime: 0,
    service_kind_id: 4,
  },
  {
    //rev_id = 3-2
    //hos: 가톨릭대학교 은평성모병원
    //drop: 이화여자대학교
    dire: "병원-집",
    pickup_x: 0,
    pickup_y: 0,
    drop_x: 126.94688465761708,
    drop_y: 37.5622787848778,
    hos_x: 126.91650195091388,
    hos_y: 37.63545538728852,
    old_hos_arr_time: "",
    old_hos_dep_time: "09:40:00",
    rev_date: "2022-03-04",
    gowithHospitalTime: 0,
    service_kind_id: 2,
  },
  {
    //rev_id = 3-3
    //hos: 서울대학교 어린이병원
    //drop: 뚝섬역
    dire: "병원-집",
    pickup_x: 0,
    pickup_y: 0,
    drop_x: 127.04740101569232,
    drop_y: 37.547219663278824,
    hos_x: 127.0008598138042,
    hos_y: 37.58711319920492,
    old_hos_arr_time: "",
    old_hos_dep_time: "13:00:00",
    rev_date: "2022-03-04",
    gowithHospitalTime: 0,
    service_kind_id: 4,
  },
  {
    //rev_id = 3-4
    //pickup: 홍제역
    //hos: 서울대학교 어린이병원
    //drop: 홍제역
    dire: "집-집",
    pickup_x: 126.94413759328273,
    pickup_y: 37.588831385163964,
    drop_x: 126.94413759328273,
    drop_y: 37.588831385163964,
    hos_x: 127.0008598138042,
    hos_y: 37.58711319920492,
    old_hos_arr_time: "10:00:00",
    old_hos_dep_time: "11:00:00",
    rev_date: "2022-03-04",
    gowithHospitalTime: 60,
    service_kind_id: 5,
  },
  {
    //rev_id = 3-5
    //pickup: 신림현대아파트
    //hos: 서울특별시 보라매병원
    //drop: 부천 휴먼시아 2단지
    dire: "집-집",
    pickup_x: 126.93241922244533,
    pickup_y: 37.47556938830176,
    drop_x: 126.80493824690787,
    drop_y: 37.513593405248,
    hos_x: 126.92374325931239,
    hos_y: 37.495186788462746,
    old_hos_arr_time: "11:00:00",
    old_hos_dep_time: "13:00:00",
    rev_date: "2022-03-04",
    gowithHospitalTime: 120,
    service_kind_id: 3,
  },
  {
    //rev_id = 3-6
    //pickup: 다산반도유보라메이플타운
    //hos: 한양대학교 구리병원
    //drop: 다산반도유보라메이플타운
    dire: "집-집",
    pickup_x: 127.15376121672266,
    pickup_y: 37.629561506557145,
    drop_x: 127.15376121672266,
    drop_y: 37.629561506557145,
    hos_x: 127.13252716586848,
    hos_y: 37.60226981422886,
    old_hos_arr_time: "14:00:00",
    old_hos_dep_time: "14:40:00",
    rev_date: "2022-03-04",
    gowithHospitalTime: 40,
    service_kind_id: 5,
  },
];

export default testDataArr3;
