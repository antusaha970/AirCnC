import { HostHomeWithOutAuth, PrivateRoute, SideBar } from "@components";
import DashBoardLayOut from "@components/Shared/DashBoardLayOut/DashBoradLayOut";

const layout = ({ children }) => {
  return (
    <PrivateRoute WithOutAuth={HostHomeWithOutAuth}>
      <DashBoardLayOut>{children}</DashBoardLayOut>
    </PrivateRoute>
  );
};

export default layout;
