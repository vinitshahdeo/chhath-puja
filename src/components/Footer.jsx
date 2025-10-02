import React from "react";
import { Heart, Sun } from "lucide-react";

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
              For all of us far from home in Bengaluru—a
              bittersweet reminder of devotion, family bonds, the comfort of
              Sharda Sinha’s songs, and the deep-rooted traditions that bind us.
              Just show up at the Ghat, let the echoes of{" "}
              <span className="text-marigold-600">“Ugha He Suruj Dev”</span> feel like home, and savor
              the taste of Thekua. This is where we find our roots and each other, even thousands of miles away.
            </p>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-display font-semibold text-lg text-gray-900 mb-3">
              Community Guidelines
            </h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>• Respect local customs and traditions</li>
              <li>• Follow environmental guidelines</li>
              <li>• Participate with devotion and joy</li>
              <li>• Help maintain cleanliness at venues</li>
              <li>• Be Courteous and Offer Help</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg text-gray-900 mb-3">
              Submit Your Event
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Hosting a Chhath celebration? Help others find their way home by 
              <a href="https://forms.gle/RDoXHfEvTTwQRpin7" target="_blank" rel="noopener noreferrer" className="text-marigold-600 hover:text-marigold-700 underline mx-1">adding your event</a>
              to this list. Together, we can bring the warmth of tradition to every corner of Bengaluru, 
              ensuring no one has to celebrate alone this year.
            </p>
            <p className="text-sm text-gray-500">
              Crafted with love in Bengaluru—by <span className="text-marigold-500"><a href="https://vinitshahdeo.com" target="_blank" rel="noopener noreferrer">Vinit Shahdeo</a></span>, with blessings.
            </p>
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
