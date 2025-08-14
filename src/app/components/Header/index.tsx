type PageKey = "home" | "rgb" | "hex";

interface HeaderProps {
  setCurrentPage: (page: PageKey) => void;
}

const Header = ({ setCurrentPage }: HeaderProps) => {
  return (
    <header className="bg-amber-200">
      <div className="flex flex-row justify-between px-0 py-6 w-full max-w-[1200px] mx-auto">
        <h1>Color Picker</h1>
        <nav className="flex gap-4 list-none">
          <li className="cursor-pointer" onClick={() => setCurrentPage("home")}>
            HOME
          </li>
          <li className="cursor-pointer" onClick={() => setCurrentPage("rgb")}>
            RGB
          </li>
          <li className="cursor-pointer" onClick={() => setCurrentPage("hex")}>
            HEX
          </li>
        </nav>
      </div>
    </header>
  );
};

export default Header;