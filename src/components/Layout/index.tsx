import Navbar from "./Navbar";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-hidden">
      <Navbar />
      {children}
    </div>
  );
};
