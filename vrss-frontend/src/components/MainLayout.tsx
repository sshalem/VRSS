import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const MainLayout = () => {
  return (
    <section>
      {/* <div className="h-[6rem]"></div> */}
      {/* By adding z-50 , when I scroll all elemets will be behind MainLayoutTitle & Navbar  */}
      {/* <article className="sticky top-0 z-50 h-[89px] border-2 border-violet-500 bg-white">
        <Navbar />
      </article> */}
      <article className="sticky top-0 z-50 h-[53px] bg-white">
        <Navbar />
      </article>
      <Outlet />
    </section>
  );
};

export default MainLayout;
