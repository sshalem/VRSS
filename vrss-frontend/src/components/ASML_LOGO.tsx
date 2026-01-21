import { useEffect, useState } from "react";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ASML_LOGO = () => {
  const [showLOGO, setShowLOGO] = useState<boolean>(true);
  const navigate = useNavigate();

  const logoShow = () => {
    // console.log(window.innerWidth);
    if (window.innerWidth < 768) {
      setShowLOGO(false);
    } else {
      setShowLOGO(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", logoShow);
    return () => window.removeEventListener("resize", logoShow);
  }, []);

  return (
    <div>
      <section className="absolute">
        {/* <article className="logo-main"> 
                      <div className="logo-parent z-50 w-fit cursor-pointer" onClick={() => navigate("/")}>
                      */}
        <article className="mx-3 my-0 flex px-0 py-2 caret-transparent">
          {showLOGO ? (
            <div
              className="z-50 mr-0 w-fit cursor-pointer p-1 text-white"
              onClick={() => navigate("/")}
            >
              <div className="css-logo-asml"></div>
              <div className="font- select-none py-[0.1rem] text-xs font-semibold italic">
                VR-SS
              </div>
            </div>
          ) : (
            <div className="-z-50 w-14"></div>
          )}
          {/* </div> */}

          <div className="mr-2 p-1 text-white">
            <div className="logo-cci">
              <div>
                <FaLock style={{ padding: "0" }} />
              </div>
              <div>CCI</div>
            </div>
            <div className="select-none pt-[2px] text-[0.75rem] font-semibold">
              2.4.0
            </div>
            {/* <div className="logo-version">2.4.0</div> */}
          </div>
          <div className="h-10 border-l-[1px] border-solid border-[#808080]"></div>
        </article>
      </section>
    </div>
  );
};

export default ASML_LOGO;
