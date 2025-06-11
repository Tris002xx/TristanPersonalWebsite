interface HeaderProps {
  pageChanger: (
    newPage: "Landing" | "AboutMe" | "Projects" | "Skills" | "ContactMe"
  ) => void;
}

const Header = ({ pageChanger }: HeaderProps) => {
  return (
    <nav className="flex flex-col border-b-1 border-gray-200 p-2 text-black md:flex-row md:justify-between">
      <h1 className="space-grotesk-h1 text-gray-400 hover:text-black flex">
        <button onClick={() => pageChanger("Landing")}>Tristan J Torres</button>
      </h1>
      <ul className="flex flex-col md:flex-row gap-4">
        <li>
          <button
            onClick={() => pageChanger("AboutMe")}
            className="space-grotesk-a text-gray-400 hover:text-black flex"
          >
            About me
          </button>
        </li>
        <li>
          <button
            onClick={() => pageChanger("Projects")}
            className="space-grotesk-a text-gray-400 hover:text-black flex"
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => pageChanger("Skills")}
            className="space-grotesk-a text-gray-400 hover:text-black flex"
          >
            Skills
          </button>
        </li>
        <li>
          <button
            onClick={() => pageChanger("ContactMe")}
            className="space-grotesk-a text-gray-400 hover:text-black flex"
          >
            Contact me
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
