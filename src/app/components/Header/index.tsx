type PageKey = "home" | "rgb" | "hex";

interface HeaderProps {
  setCurrentPage: (page: PageKey) => void;
}

const Header = ({ setCurrentPage }: HeaderProps) => {
  return (
    <header className="border-b">
      <div className="flex flex-row justify-between px-6 py-6 w-full max-w-[1200px] mx-auto">
        <h1 className="font-bold uppercase">Color Picker</h1>
        <nav className="flex gap-4 list-none">
          <li className="cursor-pointer font-sans font-semibold" onClick={() => setCurrentPage("home")}>
            HOME
          </li>
          <li className="cursor-pointer font-sans font-semibold" onClick={() => setCurrentPage("rgb")}>
            RGB
          </li>
          <li className="cursor-pointer font-sans font-semibold" onClick={() => setCurrentPage("hex")}>
            HEX
          </li>
        </nav>
      </div>
    </header>
  );
};

export default Header;