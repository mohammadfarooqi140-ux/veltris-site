import { FadeInUp } from "@/components/FadeInUp";
import { Mail, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-[#080808] sm:text-4xl">Get in Touch</h2>
          <div className="h-1 w-20 bg-zinc-800 mx-auto mt-6 mb-6"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project? Contact us today for a free consultation and let&apos;s build your dream home.
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeInUp delay={0.2} className="bg-white p-8 border border-gray-100 rounded-sm">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#080808]">Name</label>
                <input type="text" id="name" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-sm shadow-sm focus:ring-zinc-900 focus:border-zinc-900 bg-white" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-sm shadow-sm focus:ring-zinc-900 focus:border-zinc-900 bg-white" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Project Details</label>
                <textarea id="message" rows={5} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-sm shadow-sm focus:ring-zinc-900 focus:border-zinc-900 bg-white" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="button" className="w-full flex justify-center py-4 px-4 border border-transparent rounded-sm shadow-sm text-lg font-medium text-white bg-zinc-900 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 transition-colors">
                Send Message
              </button>
            </form>
          </FadeInUp>

          <FadeInUp delay={0.4} className="flex flex-col justify-center">
            <div className="flex items-start mb-8">
              <div className="w-12 h-12 bg-zinc-200 text-zinc-900 flex items-center justify-center rounded-full shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900">Email Us</h3>
                <p className="mt-1 text-gray-600">Send us details, pictures, or plans.</p>
                <a href="mailto:info@uk-properties.co.uk" className="text-zinc-900 font-semibold hover:underline mt-2 inline-block">info@uk-properties.co.uk</a>
              </div>
            </div>

            <div className="flex items-start mb-8">
              <div className="w-12 h-12 bg-zinc-200 text-zinc-900 flex items-center justify-center rounded-full shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900">Call Us</h3>
                <p className="mt-1 text-gray-600">Mon-Fri from 8am to 5pm.</p>
                <a href="tel:+4401210000000" className="text-zinc-900 font-semibold hover:underline mt-2 inline-block">0121 000 0000</a>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
};
