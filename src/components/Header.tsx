import ContainerLayout from "@/layouts/ContainerLayout";
import dynamic from "next/dynamic";

const Nav = dynamic(() => import("./Nav"), { ssr: false });

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-20">
      <ContainerLayout>
        <Nav />
      </ContainerLayout>
    </header>
  );
};

export default Header;
