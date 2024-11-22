"use client";

import { navItems } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiUserCircle } from "react-icons/hi2";

interface UserData {
  fullName: string | null | undefined;
  email: string | null | undefined;
}

const Sidebar = ({ fullName, email }: UserData) => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <Link href="/" className="flex gap-2">
        <Image
          src="/favicon.ico"
          alt="logo"
          width={80}
          height={50}
          className="hidden lg:block h-auto"
        />
        <Image
          src="/favicon.ico"
          alt="logo"
          width={60}
          height={50}
          className="lg:hidden"
        />

        <div className="lg:flex items-center space-x-2 cursor-pointer hover:opacity-80 transition hidden">
          <span className="text-blue-600 font-bold text-2xl tracking-wide">
            Drop
          </span>
          <span className="text-gray-700 font-semibold text-2xl tracking-wide">
            Safe
          </span>
        </div>
      </Link>

      <nav className="sidebar-nav">
        <ul className="flex flex-1 flex-col gap-6">
          {navItems.map(({ name, icon, url }) => {
            const Icon = icon;
            const isActive = pathname === url;

            return (
              <Link key={name} href={url} className="lg:w-full">
                <li
                  className={cn("sidebar-nav-item", isActive && "shad-active")}
                >
                  <Icon
                    className={cn("nav-icon", isActive && "nav-icon-active")}
                  />
                  <p className="hidden lg:block">{name}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>

      <Image
        src="/side-icon.svg"
        alt="side-icon"
        width={500}
        height={400}
        className="w-full hidden lg:block bg-gradient-to-b from-transparent to-mainTheme/10 rounded-xl mb-8"
      />

      <div className="sidebar-user-info cursor-pointer">
        <HiUserCircle className="text-2xl" />

        {fullName && email ? (
          <div className="hidden lg:block">
            <p className="subtitle-2 capitalize">{fullName}</p>
            <p className="caption">{email}</p>
          </div>
        ) : (
          <p className="subtitle-2 capitalize">Sign In</p>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
