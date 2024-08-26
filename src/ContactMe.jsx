import ContactForm from './ui/ContactForm';
import ContactInfoCard from './ui/ContactInfoCard';
import facebook from './images/social icons/facebook.png';
import whatsapp from './images/social icons/whatsapp.png';
import github from './images/social icons/github.png';

const contactInfo = [
  {
    image: github,
    text: 'LeoU-98',
  },
  {
    image: whatsapp,
    text: '+20 01022736402',
  },
  {
    image: facebook,
    text: 'mo7amedmedo888@yahoo.com',
  },
];

function ContactMe() {
  return (
    <div className="py-12">
      <h2 className="mb-8 text-3xl text-white">Contact Me</h2>

      <div className="lg:justify-start-60 flex flex-col-reverse gap-5 sm:flex-row">
        <div className="lg: flex flex-col items-center gap-2 sm:basis-4/12 md:basis-1/2 lg:items-start xl:items-start">
          {contactInfo.map((el) => (
            <ContactInfoCard
              imageSource={el.image}
              text={el.text}
              key={el.text}
            />
          ))}
        </div>
        <div className="flex sm:basis-8/12 md:basis-1/2 xl:justify-end">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
