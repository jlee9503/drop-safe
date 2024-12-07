"use client";

import Header from "@/components/Header";
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { getCurrentUser } from "@/lib/hooks/getCurrentUser";
import { redirect } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const currUser = getCurrentUser();

  // if (!currUser) {
  //   return redirect("/sign-in");
  // }

  return (
    <main className="flex h-screen">
      <Sidebar fullName={currUser?.displayName} email={currUser?.email} />

      <section className="flex h-full flex-1 flex-col">
        <MobileNav fullName={currUser?.displayName} email={currUser?.email} />
        <Header />
        <div className="main-content">{children}</div>
      </section>
    </main>
  );
};

export default Layout;
