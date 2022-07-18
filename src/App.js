import React, { useEffect, useState } from "react";

// import All the Header Files
import Banner from "./components/Banner";
import Header from "./components/Header";

const App = () => {
  const [navMobile, setNavMobile] = React.useState(false);

  return (
    <div className='relative overflow-hidden before:w-[600px] before:h-[200px] before:bg-circle before:bg-no-repeat before:absolute before:-top-16 before:left-[600px] before:hidden before:lg:flex'>
      <Header setNavMobile={setNavMobile} />
      <Banner />
      {/* mobile nav */}
      <div
        className={`${
          navMobile ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-48 transition-all`}
      >
        <navMobile setNavMobile={setNavMobile} />
      </div>
    </div>
  );
};

export default App;
