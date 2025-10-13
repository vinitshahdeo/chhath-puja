import React from 'react';
import { MessageCircle, Instagram, Users, Heart, Facebook } from 'lucide-react';

const CommunityConnect = () => {
  const communities = [
    {
      name: "Bihar Parivar",
      whatsapp: "https://chat.whatsapp.com/KERwXuHZw9fFsEYGJLKQTk",
      instagram: null,
      members: "1K+"
    },
    {
      name: "Chhath Puja Association - GM ECity",
      whatsapp: "https://chat.whatsapp.com/GIMpOTzFELOAre7kHhk6Ou", 
      instagram: "https://www.instagram.com/gmiet_chathpuja/",
      instagramHandle: "@gmiet_chathpuja",
      members: "600+"
    },
    {
      name: "Mithila Chhath Puja Samiti",
      whatsapp: "https://chat.whatsapp.com/JiOF4sGRQXI3QKLBa0vUxE",
      instagram: "https://www.instagram.com/mithilachhathpujasamiti/",
      instagramHandle: "@mithilachhathpujasamiti",
      members: "300+"
    },
    {
      name: "Chhath Puja - Art of Living",
      whatsapp: "https://chat.whatsapp.com/EibVVygIZzeLa1y3n5TGhv",
      facebook: "https://www.facebook.com/people/Chhath-Puja-at-the-Art-of-Living-Bangalore/61564832832879/",
      instagram: "https://www.instagram.com/chhathartoflivingblr",
      instagramHandle: "@chhathartoflivingblr",
      members: "1K+"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-marigold-50 via-sunrise-50 to-saffron-50 py-16 border-t border-marigold-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-marigold-400 to-saffron-500 rounded-full mb-6">
            <Users className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
            Stay Connected with Your Community
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join WhatsApp groups, follow Instagram pages, and connect on Facebook with various communities 
            in Bengaluru for real-time updates, event announcements, and to connect 
            with fellow devotees.
          </p>
        </div>

        {/* Community Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {communities.map((community, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6 border border-marigold-100">
              <div className="text-center">
                <h3 className="font-display font-semibold text-lg text-gray-900 mb-2">
                  {community.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4 flex items-center justify-center">
                  <Users className="h-4 w-4 mr-1" />
                  {community.members} members
                </p>
                
                <div className="space-y-3">
                  {/* WhatsApp Button - Show only if community has WhatsApp */}
                  {community.whatsapp && (
                    <a
                      href={community.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full group relative inline-flex items-center justify-center space-x-2 px-4 py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                      aria-label={`Join ${community.name} WhatsApp group`}
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.61-.01-.23 0-.60.086-.916.422-.354.415-.916.916-.916 2.207 0 1.29.916 2.542 1.052 2.718.136.174 1.881 2.872 4.554 4.028.636.275 1.132.439 1.519.562.639.203 1.221.174 1.681.105.513-.076 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.051 3.488z"/>
                      </svg>
                      <span>Join WhatsApp</span>
                      <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                        Join community group for updates
                      </div>
                    </a>
                  )}

                  {/* Instagram Button - Show only if community has Instagram */}
                  {community.instagram && (
                    <a
                      href={community.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full group relative inline-flex items-center justify-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                      aria-label={`Follow ${community.name} on Instagram`}
                    >
                      <Instagram className="h-4 w-4" />
                      <span>Follow Instagram</span>
                      <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                        {community.instagramHandle || 'Follow for updates'}
                      </div>
                    </a>
                  )}

                  {/* Facebook Button - Show only if community has Facebook */}
                  {community.facebook && (
                    <a
                      href={community.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full group relative inline-flex items-center justify-center space-x-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                      aria-label={`Follow ${community.name} on Facebook`}
                    >
                      <Facebook className="h-4 w-4" />
                      <span>Follow Facebook</span>
                      <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                        Follow page for updates
                      </div>
                    </a>
                  )}

                  {/* Show placeholder if community has no social channels */}
                  {!community.whatsapp && !community.instagram && !community.facebook && (
                    <div className="w-full px-4 py-2.5 bg-gray-100 text-gray-500 text-sm font-medium rounded-lg text-center">
                      Channels coming soon
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-2xl shadow-sm border border-marigold-200 p-8 text-center">
          <Heart className="h-12 w-12 text-marigold-500 mx-auto mb-4" />
          <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">
            Can't Find Your Community?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Help us build a stronger network! If your community isn't listed here, 
            reach out to us and we'll help you connect with fellow devotees in Bengaluru.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/UAVTiY8ewEy4cXcn8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-marigold-500 hover:bg-marigold-600 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Submit Your Community
            </a>
            <a
              href="https://x.com/vinit_shahdeo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-marigold-500 text-marigold-600 hover:bg-marigold-50 font-medium rounded-lg transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Corrections? Reach out <a href='https://x.com/vinit_shahdeo' target="_blank" rel="noopener noreferrer"><span className='text-marigold-500 hover:text-marigold-600'>@vinitshahdeo</span></a> • Stay tuned for updates
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunityConnect;