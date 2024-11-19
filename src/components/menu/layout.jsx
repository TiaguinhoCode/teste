// Componentes
import { SideNav } from "./sideNav";

export const Layout = ({ children }) => {
  return (
    <div className="bg-gray-100 flex w-full">
      <SideNav />
      <main className="w-full flex px-8 py-3">{children}</main>
    </div>
  );
};
