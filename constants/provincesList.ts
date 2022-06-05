import { province } from "../components/MainContentArea/QuickNavigationArea/CitiesList/CitiesList";

const provincesList: Array<province> = [
  {
    provinceName: "اقليم القاهرة الكبرى",
    url: "/provinces/greate-cairo",
    childItems: [
      {
        cityName: "محافظة الجيزة",
        url: "/provinces/greate-cairo/giza",
      },
      {
        cityName: "محافظة القليوبية",
        url: "/provinces/greate-cairo/qaliobia",
      },
      {
        cityName: "محافظة القاهرة",
        url: "/provinces/greate-cairo/cairo",
      },
    ],
  },
  {
    provinceName: "اقليم الدلتا",
    url: "/provinces/delta",
    childItems: [
      {
        cityName: "محافظة المنوفية",
        url: "/provinces/delta/monfia",
      },
      {
        cityName: "محافظة الغربية",
        url: "/provinces/delta/gharbia",
      },
      {
        cityName: "محافظة الدقهلية",
        url: "/provinces/delta/dakhlia",
      },
      {
        cityName: "محافظة دمياط",
        url: "/provinces/delta/domiat",
      },
      {
        cityName: "محافظة كفرالشيخ",
        url: "/provinces/delta/kafr-elshikh",
      },
    ],
  },
  {
    provinceName: "اقليم الاسكندرية",
    url: "/provinces/alexandra",
    childItems: [
      {
        cityName: "محافظة مطروح",
        url: "/provinces/alexandra/matroh",
      },
      {
        cityName: "محافظة البحيرة",
        url: "/provinces/alexandra/bihira",
      },
      {
        cityName: "محافظة الاسكندرية",
        url: "/provinces/alexandra/alex",
      },
    ],
  },
  {
    provinceName: "اقليم شمال الصعيد",
    url: "/provinces/north-saaid",
    childItems: [
      {
        cityName: "محافظة بني سويف",
        url: "/provinces/north-saaid/bani-soef",
      },
      {
        cityName: "محافظة الفيوم",
        url: "/provinces/north-saaid/faioom",
      },
      {
        cityName: "محافظة المنيا",
        url: "/provinces/north-saaid/miniaa",
      },
    ],
  },
  {
    provinceName: "اقليم جنوب الصعيد",
    url: "/provinces/south-saaid",
    childItems: [
      {
        cityName: "محافظة قنا",
        url: "/provinces/south-saaid/qinaa",
      },
      {
        cityName: "محافظة الاقصر",
        url: "/provinces/south-saaid/eloksor",
      },
      {
        cityName: "محافظة اسوان",
        url: "/provinces/south-saaid/aswan",
      },
      {
        cityName: "محافظة سوهاج",
        url: "/provinces/south-saaid/sohag",
      },
      {
        cityName: "محافظة البحر الاحمر",
        url: "/provinces/south-saaid/red-sea",
      },
    ],
  },
  {
    provinceName: "اقليم قناه السويس",
    url: "/provinces/suis-channel",
    childItems: [
      {
        cityName: "محافظة الشرقية",
        url: "/provinces/suis-channel/elsharqia",
      },
      {
        cityName: "محافظة بور سعيد",
        url: "/provinces/suis-channel/borsaid",
      },
      {
        cityName: "محافظة شمال سيناء",
        url: "/provinces/suis-channel/north-sinai",
      },
      {
        cityName: "محافظة جنوب سيناء",
        url: "/provinces/suis-channel/south-sinai",
      },
      {
        cityName: "محافظة الاسماعيلية",
        url: "/provinces/suis-channel/elesmailia",
      },
      {
        cityName: "محافظة السويس",
        url: "/provinces/suis-channel/elswais",
      },
    ],
  },
  {
    provinceName: "اقليم اسيوط",
    url: "/provinces/assuit",
    childItems: [
      {
        cityName: "محافظة اسيوط",
        url: "/provinces/assuit/assuit-gov",
      },
      {
        cityName: "محافظة الوادي الجديد",
        url: "/provinces/assuit/elwady-eljadid",
      },
    ],
  },
];

export default provincesList;
