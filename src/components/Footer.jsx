import React from "react";
import { Heart, Sun, Sunset, Sunrise } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-sunrise-100 to-marigold-50 border-t border-marigold-100">
      {/* Decorative rangoli pattern */}
      <div className="border-b border-marigold-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-center">
            <div className="flex items-center space-x-2 text-marigold-400">
              <div className="w-2 h-2 bg-marigold-400 rounded-full"></div>
              <div className="w-3 h-3 bg-saffron-400 rounded-full"></div>
              <div className="w-4 h-4 bg-marigold-500 rounded-full"></div>
              <Sun className="h-6 w-6 text-saffron-500" />
              <div className="w-4 h-4 bg-marigold-500 rounded-full"></div>
              <div className="w-3 h-3 bg-saffron-400 rounded-full"></div>
              <div className="w-2 h-2 bg-marigold-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-display font-semibold text-lg text-gray-900 mb-3">
              A Call From Home
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              For all of us far from home in Bengaluru—a bittersweet reminder of
              devotion, family bonds, the comfort of Sharda Sinha’s songs, and
              the deep-rooted traditions that bind us. Just show up at the Ghat,
              let the echoes of{" "}
              <span className="text-marigold-600">“Ugha He Suruj Dev”</span>{" "}
              feel like home, and savor the taste of Thekua. This is where we
              find our roots and each other, even thousands of miles away.
            </p>
          </div>

          {/* Important Timings */}
          <div>
            <h3 className="font-display font-semibold text-lg text-gray-900 mb-3">
              Important Timings
            </h3>
            <div className="space-y-4 text-sm">
              <p className="text-gray-600 text-sm">
                Four sacred days of devotion, from October 25-28, 2025
              </p>
              <div className="flex items-start space-x-3 pb-2 border-b border-gray-200">
                <Sunset className="h-4 w-4 text-orange-500" />
                <div>
                  <p className="font-medium text-gray-800 mb-1">
                    Sandhya Arghya
                  </p>
                  <p className="text-gray-600 text-xs">
                    Monday, Oct 27 • 5:30-6:00 PM
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 pb-2">
                <Sunrise className="h-4 w-4 text-yellow-500" />
                <div>
                  <p className="font-medium text-gray-800 mb-1">Usha Arghya</p>
                  <p className="text-gray-600 text-xs">
                    Tuesday, Oct 28 • 6:00-6:30 AM
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-500 italic pt-2 border-t border-gray-100">
                *Confirm exact timings with local organizers
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg text-gray-900 mb-3">
              Submit Your Event
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Hosting a Chhath celebration? Help others find their way home by
              <a
                href="https://forms.gle/RDoXHfEvTTwQRpin7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-marigold-600 hover:text-marigold-700 underline mx-1"
              >
                adding your event
              </a>
              to this list. Together, we can bring the warmth of tradition to
              every corner of Bengaluru, ensuring no one has to celebrate alone
              this year.
            </p>
            <p className="text-sm text-gray-500 mb-3">
              Crafted with love in Bengaluru—by{" "}
              <span className="text-marigold-500">
                <a
                  href="https://vinitshahdeo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vinit Shahdeo
                </a>
              </span>
              , with blessings.
            </p>
            <div className="flex items-center space-x-2">
              <a
                href="https://github.com/vinitshahdeo/chhath-puja"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center space-x-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-900 text-white text-xs rounded-full transition-colors duration-200"
                aria-label="View source on GitHub"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Open Source</span>
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  View source code on GitHub
                </div>
              </a>

              <a
                href="https://instagram.com/vinitshahdeo"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center space-x-2 px-3 py-1.5 bg-marigold-500 hover:bg-marigold-600 text-white text-xs rounded-full transition-colors duration-200"
                aria-label="Suggest changes on Instagram"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Suggest Changes</span>
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  DM on Instagram for suggestions or corrections
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t border-marigold-200">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-3">
              <Sun className="h-6 w-6 text-marigold-500" />
              <div>
                <p className="font-display font-semibold text-gray-900">
                  <span className="text-marigold-600">छठ पूजा</span> in
                  Bengaluru
                </p>
                <p className="text-xs text-gray-600">
                  Community Celebrations Platform
                </p>
              </div>
            </div>

            <div className="text-center sm:text-right">
              <p className="text-sm text-gray-600 mb-1">
                Made with <Heart className="h-4 w-4 text-red-500 inline mx-1" />{" "}
                for the community
              </p>
              <p className="text-xs text-gray-500">
                © {currentYear} • Please verify details with organizers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="relative">
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          className="relative block w-full h-6"
          fill="url(#footer-wave-gradient)"
        >
          <defs>
            <linearGradient
              id="footer-wave-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="rgba(245, 158, 11, 0.3)" />
              <stop offset="50%" stopColor="rgba(251, 191, 36, 0.3)" />
              <stop offset="100%" stopColor="rgba(20, 184, 166, 0.3)" />
            </linearGradient>
          </defs>
          <path d="M0,20 C300,40 600,0 900,20 C1050,30 1150,10 1200,20 L1200,60 L0,60 Z" />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
