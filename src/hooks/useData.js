import { aboutSection } from '@/data/about';
import { homeSection } from '@/data/home';
import { contactsSection } from '@/data/contacts';
import { services, servicesSection } from '@/data/services';
import { testimonials, testimonialSection } from '@/data/testimonials';

const useData = () => {
  
  return {
    services,
    servicesSection,
    testimonials,
    testimonialSection,
    aboutSection,
    homeSection,
    contactsSection,
  };
};

export default useData;