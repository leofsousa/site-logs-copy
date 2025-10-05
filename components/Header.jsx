export const Header = () => {
  return (
    <header className="h-12 w-full bg-black/40 border-white flex justify-between">
      <div>
        <h1 className="text-white p-3 text-xl">EIIO</h1>
      </div>
      <div>
        <ul className="m-2">
          <li>
            <a href="#" className="text-white p-2 bg-gray-400/30 rounded-md">
              Home
            </a>
            <a href="#" className="text-white p-4 text-gray-400">
              Solutions
            </a>
            <a href="#" className="text-white p-4 text-gray-400">
              Process
            </a>
            <a href="#" className="text-white p-4 text-gray-400">
              Stories
            </a>
            <a href="#" className="text-white p-4 text-gray-400">
              About us
            </a>
            <a href="#" className="text-white p-4 text-gray-400">
              Resources
            </a>
          </li>
        </ul>
      </div>
      <div>
        <button className="bg-primary mx-4 my-2 py-1 px-2 rounded-md">
          Start Project
        </button>
      </div>
    </header>
  );
};
