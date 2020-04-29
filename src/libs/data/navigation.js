import { IconLinks } from "../../components/Icons";

export const navLinks = [
  {
    icon: IconLinks.Dashboard,
    text: "Dashboard",
    route: "/dashboard",
  },
  {
    icon: IconLinks.History,
    text: "Manage Books",
    route: "/manage-books",
    activity: 8,
  },
  {
    icon: IconLinks.Analytics,
    text: "Analytics",
    route: "/analytics",
  },
  {
    icon: IconLinks.Wallet,
    text: "Wallet",
    activity: 2,
    route: "/wallet",
  },
  {
    icon: IconLinks.User,
    text: "Account",
    route: "/account",
  },
  {
    icon: IconLinks.Faq,
    text: "Support",
    route: "/support",
  },
];
