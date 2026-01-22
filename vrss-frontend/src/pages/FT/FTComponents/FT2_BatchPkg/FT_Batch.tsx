import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const FT_Batch = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/ft/ft-batch" ? (
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

export default FT_Batch;
