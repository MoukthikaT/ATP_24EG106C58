import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { useEffect } from "react";
import { useAuth } from "../store/authStore";

function RootLayout() {
  const checkAuth = useAuth((state) => state.checkAuth);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <>
      <Header />
      <div className="mx-8 md:mx-32 py-8 min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default RootLayout;
