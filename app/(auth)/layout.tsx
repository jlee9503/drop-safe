import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="bg-mainTheme p-12 text-white hidden lg:flex w-1/2 xl:w-2/5">
        <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
          <div className="flex items-center gap-5">
            <Image
              src="/favicon.ico"
              alt="logo"
              width={70}
              height={70}
              className="h-auto"
            />
            <div className="text-[38px] font-extrabold">DropSafe</div>
          </div>

          <div className="space-y-5">
            <h1 className="font-h1">Manage your files the best way</h1>
            <p className="font-body">
              This is a place where you can store all your documents
            </p>
          </div>
          <Image
            src="/side-icon.svg"
            alt="side-icon"
            width={340}
            height={340}
            className="transition-all hover:-rotate-2 hover:scale-105"
          />
        </div>
      </section>

      <section className="flex flex-1 flex-col items-center p-4 py-10 bg-white lg:justify-center lg:p-10 lg:py-10">
        <div className="mb-16 lg:hidden">
          <Image
            src="/favicon.ico"
            alt="logo"
            width={200}
            height={82}
            className="h-auto w-[200px] lg:w-[250px]"
          />
        </div>
        {children}
      </section>
    </div>
  );
};

export default Layout;
