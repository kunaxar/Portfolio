import { Download, Mail, Menu } from "lucide-react";

interface NavbarProps {
  onContactClick: () => void;
  onMenuClick: () => void;
}

export function Navbar({ onContactClick, onMenuClick }: NavbarProps) {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div>
            <h1 className="font-semibold text-gray-900 text-sm sm:text-base">
              Kunal Vardani
            </h1>
            <p className="text-xs sm:text-sm text-gray-600">
              Product Manager
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://drive.google.com/file/d/1ac5SUlwzZrOEw0gNLW-ZJAZy_uFGGnIq/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span className="hidden md:inline">Download Resume</span>
            <span className="md:hidden">Resume</span>
          </a>
          <a
            href="https://drive.google.com/file/d/1ac5SUlwzZrOEw0gNLW-ZJAZy_uFGGnIq/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden p-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Download className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
}