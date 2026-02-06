import {
  Mail,
  Linkedin,
  Github,
  Download,
  Calendar,
} from "lucide-react";

interface ContactProps {
  onOpenContactModal?: () => void;
}

export function Contact({ onOpenContactModal }: ContactProps) {
  const handleContactClick = () => {
    if (onOpenContactModal) {
      onOpenContactModal();
    } else {
      // Fallback to mailto if modal handler is not provided
      window.location.href = "mailto:vardani.product@gmail.com";
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
          Get in Touch
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Let's connect and discuss opportunities
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 lg:p-8">
        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs sm:text-sm text-gray-500 mb-1">
                Email
              </div>
              <a
                href="mailto:vardani.product@gmail.com"
                className="text-sm sm:text-base text-gray-900 hover:text-gray-600 transition-colors break-all"
              >
                vardani.product@gmail.com
              </a>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 sm:pt-6">
            <div className="text-xs sm:text-sm text-gray-500 mb-3">
              Connect
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.linkedin.com/in/kunalvardani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-sm"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              {/* <a
                href="https://github.com/kunaxar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-sm"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a> */}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 sm:pt-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://drive.google.com/file/d/1ac5SUlwzZrOEw0gNLW-ZJAZy_uFGGnIq/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a
                href="mailto:vardani.product@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
              <a
                href="https://cal.com/talk-with-kunal/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
              >
                <Calendar className="w-4 h-4" />
                Schedule a Meeting
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}