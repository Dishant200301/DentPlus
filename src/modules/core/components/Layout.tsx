import { Outlet } from "react-router-dom";
import { PageLayout } from "./PageLayout";

export const Layout = () => {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
};
