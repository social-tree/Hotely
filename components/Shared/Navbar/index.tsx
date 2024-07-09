import Logo from "@/assets/svg/logo.svg";
import Button from "../Button";

const Navbar = () => {
  return (
    <header className="py-7 flex flex-row justify-center shadow-lg">
      <nav className="flex max-w-screen-xl justify-between w-full">
        <Logo />
        <ul className="flex gap-8">
          <li>
            <Button variant="tertiary" className="font-semibold font-primary">
              Login
            </Button>
          </li>
          <li>
            <Button className="font-semibold">Sign up</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
