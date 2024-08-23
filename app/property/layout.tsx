import type { Metadata } from "next";
import Footer from "../components/footer";
import Sidebar from "../components/Sidebar";



export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <div className="flex items-center justify-between w-full h-fit bg-white text-black gap-4">
        <Sidebar/>
        {children}
      </div>
      </body>
    </html>
  );
}