import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 glass-nav px-8 py-4 flex justify-between items-center">
      <Link
        href="/"
        className="text-xl font-bold text-indigo-400 tracking-wide cursor-pointer"
      >
        LinkedIn Analyzer
      </Link>

      <div className="flex items-center gap-6 text-sm font-medium">
        <Link href="/" className="hover:text-indigo-400 transition-colors">
          Home
        </Link>

        <Link href="#features" className="hover:text-indigo-400 transition-colors">
          Features
        </Link>

        <Link href="#about" className="hover:text-indigo-400 transition-colors">
          About
        </Link>

        <Link href="#contact" className="hover:text-indigo-400 transition-colors">
          Contact
        </Link>

        <Link
          href="/login"
          className="btn btn-ghost text-sm font-semibold hover:bg-white/10 text-slate-200"
        >
          Login
        </Link>

        <Link
          href="/signup"
          className="btn btn-primary bg-indigo-600 hover:bg-indigo-500 text-white border-none shadow-lg shadow-indigo-500/30 px-5"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
