// import LandingPage from "./pages/home/page";

import DashBoard from "./pages/dashboard/layout";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <DashBoard>{children}</DashBoard>
    //  <LandingPage />
  );
}
