import Image from "next/image";
import { FadeInUp } from "@/components/FadeInUp";

const services = [
  {
    title: "Kitchens",
    description: "No doubt you have an image in your head of the cabinets you'd like, the colour scheme, the layout, and all the other essentials that make a kitchen feel like the centre of the home.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Bathrooms",
    description: "Next to the kitchen, the bathroom is probably the room we like to have looking its best. Apart from hygiene, a smart bathroom looks great for guests when they use it, and feels good for us to use each day, too.",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "House Extensions",
    description: "Many properties have untapped potential, renovations and extensions can make a home more enjoyable to live in as well as adding to its market value. We can help you build towards a lifestyle that flows better for you and your family.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export const ServicesGrid = () => {
  return (
    <section id="services" className="py-16 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FadeInUp key={index} delay={index * 0.1}>
              <div className="bg-[#222] border border-[#333] flex flex-col h-full">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold text-[#8eb2e6] mb-4 hover:underline cursor-pointer">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
};
