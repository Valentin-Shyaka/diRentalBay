import type { Metadata } from "next";



export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <div className="flex bg-primary-white w-full h-screen ">
      <div className="w-[70%] gap-3 h-full p-6 flex items-center justify-center  ">
           
          <div className="text-center">
            <p className="text-black font-bold"><span className="text-primary-green text-xl">RentalBay</span></p>
          
            {children}
          </div>
          
           


     </div>
      <div className="bg-primary-gray flex items-center justify-center w-full p-10">
        <div className="p-10">
          <p className="text-black font-bold"><span className="text-primary-green">RentalPay </span> is a flexible and powerful application to withHold tenant  and property holder issues. We help conserve clarity and timeliness, everyday! </p>
          <p className="float-right mt-6 text-black">------ <span className="font-bold">SHYAKA Valentin</span>, CEO @RentalPay</p>
        </div>

        
        
      </div>
    </div>
      </body>
    </html>
  );
}
