import { FadeInUp } from "@/components/FadeInUp";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-[#080808] sm:text-4xl">Get in Touch</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 mb-4"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project? Contact us today for a free consultation and let&apos;s build your dream home.
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeInUp delay={0.2} className="bg-gray-50 p-8 border border-gray-100 rounded-sm">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#080808]">Name</label>
                <input type="text" id="name" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-sm shadow-sm focus:ring-blue-600 focus:border-blue-600 bg-white" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#080808]">Email</label>
                <input type="email" id="email" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-sm shadow-sm focus:ring-blue-600 focus:border-blue-600 bg-white" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#080808]">Message</label>
                <textarea id="message" rows={5} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-sm shadow-sm focus:ring-blue-600 focus:border-blue-600 bg-white" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="button" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-sm shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-colors">
                Send Message
              </button>
            </form>
          </FadeInUp>

          <FadeInUp delay={0.4} className="space-y-8 flex flex-col justify-center">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 flex items-center justify-center rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#080808]">Email Us</h3>
                <p className="text-gray-600 mt-1">Send us your plans or pictures.</p>
                <a href="mailto:info@uk-properties.co.uk" className="text-blue-600 font-semibold hover:underline mt-2 inline-block">info@uk-properties.co.uk</a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 flex items-center justify-center rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#080808]">Call Us</h3>
                <p className="text-gray-600 mt-1">Available Mon-Fri, 9am - 5pm.</p>
                <a href="tel:+4401210000000" className="text-blue-600 font-semibold hover:underline mt-2 inline-block">0121 000 0000</a>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
};
