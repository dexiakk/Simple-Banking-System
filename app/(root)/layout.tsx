export const dynamic = 'force-dynamic'

import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await getLoggedInUser()

  if(!loggedIn) redirect('/sign-in')

  return (
    <main className="flex w-full h-screen font-inter">
        <Sidebar user={loggedIn}/>

        <div className="size-full flex flex-col">
          <div className="root-layout">
              <Image src={"/icons/logo.svg"} width={30} height={30} alt="logo" />
              <div>
                <MobileNavbar user={loggedIn}/>
              </div>
          </div>
        {children}
        </div>
    </main>
  );
}