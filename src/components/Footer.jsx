import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-emerald-500 font-extrabold text-xl tracking-tight">JirDhis</span>
            <p className="text-sm text-slate-500 mt-1">Caafimaadkaaga gacantaada</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link to="/privacy" className="hover:text-emerald-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-emerald-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/delete-account" className="hover:text-emerald-400 transition-colors">
              Delete Account
            </Link>
            <a
              href="mailto:ismailbulbul381@gmail.com"
              className="hover:text-emerald-400 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 text-center space-y-1">
          <p className="text-sm text-slate-500">© 2025 JirDhis. All rights reserved.</p>
          <p className="text-xs text-slate-600">Made with ❤️ for the Somali community</p>
        </div>
      </div>
    </footer>
  )
}
