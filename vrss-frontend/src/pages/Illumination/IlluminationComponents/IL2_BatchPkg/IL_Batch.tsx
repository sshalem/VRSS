import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const SW_Batch = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/waferstage/batch" ? (
        <Subject title="Batch ...">
          <div></div>
        </Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};

export default SW_Batch;
