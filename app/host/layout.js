import { HostHomeWithOutAuth, PrivateRoute, SideBar } from "@components";
import DashBoardLayOut from "@components/Shared/DashBoardLayOut/DashBoradLayOut";

const layout = ({ children }) => {
  return (
    <div className="scrollbox">
      <PrivateRoute WithOutAuth={HostHomeWithOutAuth}>
        <DashBoardLayOut>{children}</DashBoardLayOut>
      </PrivateRoute>
    </div>
  );
};

export default layout;
