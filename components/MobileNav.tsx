"use client";

import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { HiUserCircle } from "react-icons/hi2";
import { navItems } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import FileUploader from "./FileUploader";
import { Button } from "./ui/button";
import { signOutUser } from "@/lib/firebase/auth";

interface UserData {
  fullName: string | null | undefined;
  email: string | null | undefined;
}

const MobileNav = ({ fullName, email }: UserData) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className="mobile-nav-header">
      <Link href="/">
        <Image
          src="/favicon.ico"
          alt="logo"
          width={50}
          height={20}
          className="h-auto py-1"
        />
      </Link>

      <Sheet>
        <SheetTrigger>
          <FiMenu className="text-2xl text-mainTheme" />
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <div
                className="header-user cursor-pointer"
                onClick={() => {
                  router.push("/sign-in");
                }}
              >
                <HiUserCircle className="text-5xl" />

                {fullName && email ? (
                  <div className="sm:hidden lg:block text-left">
                    <p className="subtitle-2 capitalize">{fullName}</p>
                    <p className="caption">{email}</p>
                  </div>
                ) : (
                  <p className="subtitle-2 capitalize">Sign In</p>
                )}
              </div>
            </SheetTitle>
          </SheetHeader>

          <nav className="mobile-nav">
            <ul className="flex flex-1 flex-col gap-6">
              {navItems.map(({ name, icon, url }) => {
                const Icon = icon;
                const isActive = pathname === url;

                return (
                  <Link key={name} href={url} className="w-full">
                    <li
                      className={cn(
                        "mobile-nav-item",
                        isActive && "shad-active"
                      )}
                    >
                      <Icon
                        className={cn(
                          "nav-icon",
                          isActive && "nav-icon-active"
                        )}
                      />
                      <p>{name}</p>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </nav>

          <div className="flex flex-col justify-between gap-5 pb-5 mt-10">
            <FileUploader />

            <Button
              type="submit"
              className="sign-out-btn"
              onClick={async () => {
                await signOutUser();
              }}
            >
              Log out
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default MobileNav;
