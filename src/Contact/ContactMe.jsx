import ContactForm from './ContactForm';
import ContactInfoCard from './ContactInfoCard';
import facebook from '../images/social icons/facebook.png';
import whatsapp from '../images/social icons/whatsapp.png';
import github from '../images/social icons/github.png';
import image from '../assets/img/contact-img.svg';

function ContactMe() {
  return (
    <div className="contact-bg-gradient mt-10">
      <div className="container mx-auto py-12 xl:max-w-screen-xl">
        <h2 className="mb-14 text-center text-3xl text-white">Contact Me</h2>
        <div className="flex flex-col-reverse items-center gap-5 lg:flex-row lg:justify-between">
          <div className="max-w-[450px] basis-1/2">
            <img src={image} className="size-full" />
          </div>
          <div className="flex basis-1/2 xl:justify-end">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
