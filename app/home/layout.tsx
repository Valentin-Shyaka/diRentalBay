import type { Metadata } from "next";
import Footer from "../components/footer";



export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <div className="relative h-40 w-full flex items-center justify-center text-center">
      <img alt='home image' src={'/travel1.jpg'} className='w-full h-full object-cover opacity-30 '/>
        <div className='absolute text-white'>
          <h3 className='font-bold text-2xl text-primary-green'>RENTALPAY</h3>
          <h1 className='font-bold text-xl'>Looking for a reliable and user-friendly house  renting web app?</h1>
          <p className=' text-sm'>With RentalPay, landlords can easily manage their properties, receive rent payments online, and communicate with tenants all in one place. Our platform also offers a range of tools to help landlords screen potential tenants, track expenses, and manage maintenance requests.</p>

        </div>

        

      </div>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
