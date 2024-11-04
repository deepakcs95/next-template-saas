import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Pricing",
    path: "/pricing",
    newTab: false,
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },

  {
    id: 6,
    title: "More",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Terms of service",
        path: "/terms-of-service",
        newTab: false,
      },
      {
        id: 62,
        title: "Privacy Policy",
        path: "/privacy-policy",
        newTab: false,
      },
      {
        id: 63,
        title: "Refund Policy",
        path: "/refund-policy",
        newTab: false,
      },
    ],
  },
];
export default menuData;
