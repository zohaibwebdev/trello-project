import React from "react";
import Navbar from "./_components/navbar";
import { Footer } from "./_components/footer";
const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      {/* navbar */}
      <main className="pt-40 pb-20 bg-slate-100">{children}</main>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default MarketingLayout;
