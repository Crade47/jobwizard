import { Cog, House, LayoutDashboard, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

// config/sidebar-navigation.ts
export type SidebarItem = {
  title: string;
  href: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  requiresAuth: boolean;
};

export const sidebarNavigation: SidebarItem[] = [
  {
    title: "Home",
    href: "/",
    icon: House,
    requiresAuth: false,
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    requiresAuth: true,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Cog,
    requiresAuth: true,
  },
];
