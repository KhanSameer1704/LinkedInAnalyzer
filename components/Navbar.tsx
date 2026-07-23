export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      {/* Logo */}
      <div className="flex-1">
        <a className="text-2xl font-bold text-primary cursor-pointer">
          LinkedIn Analyzer
        </a>
      </div>

      {/* Navigation Menu + Buttons */}
      <div className="flex-none flex items-center gap-4">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>

        <button className="btn btn-ghost">
          Login
        </button>

        <button className="btn btn-primary">
          Get Started
        </button>
      </div>
    </div>
  );
}