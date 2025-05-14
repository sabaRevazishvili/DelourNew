import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

export const navbarList = [
  { title: "მთავარი", path: "/" },
  { title: "სიახლეები", path: "/News" },
  { title: "ტრენინგი", path: "/Training" },
  {
    title: "სერვისები",
    icon: faAngleUp,
    submenu: [
      { title: "FOODPRO", path: "/FOODPRO" },
      { title: "FOODCERT", path: "/FOODCERT" },
      { title: "HORECA START", path: "/HORECA_START" },
      { title: "კრიზის მენეჯმენტი", path: "/crisis_menegment" },
    ],
  },
  {
    title: "პროექტები",
    icon: faAngleUp,
    submenu: [
      { title: "დასრულებული", path: "/completed_projects" },
      { title: "მიმდინარე", path: "/ongoing_projects" },
    ],
  },
];
