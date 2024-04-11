/** @format */

import path from "./path";
import icons from "./icons";
const { BsFillHouseGearFill, MdOutlineDashboard } = icons;

export const sidebar = [
  {
    id: 1,
    path: `${path.LAYOUT}`,
    title: "home",
    icon: <MdOutlineDashboard />,
    type: "SINGLE",
  },
  {
    id: 2,
    path: `${path.COUNTRY}`,
    title: "country",
    icon: <BsFillHouseGearFill />,
    type: "SINGLE",
  },
];

export const countryData = [
  {
    name: "Viet Nam",
    code: "vi",
    description: "Quốc gia Việt Nam",
  },
  {
    name: "Nhat Ban",
    code: "japan",
    description: "Quốc gia Nhật Bản",
  },
  {
    name: "Han Quoc",
    code: "korea",
    description: "Quốc gia Hàn Quốc",
  },
  {
    name: "My",
    code: "us",
    description: "Quốc gia Mỹ",
  },
  {
    name: "Trung Quoc",
    code: "china",
    description: "Quốc gia Trung Quốc",
  },
  {
    name: "Uc",
    code: "australia",
    description: "Quốc gia Úc",
  },
  {
    name: "Anh",
    code: "uk",
    description: "Quốc gia Anh",
  },
  {
    name: "Phap",
    code: "france",
    description: "Quốc gia Pháp",
  },
];
