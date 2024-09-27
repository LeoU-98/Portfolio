import ContactForm from './ContactForm';
import image from '../images/contact-img.svg';

function ContactMe() {
  return (
    <section className="contact-bg-gradient mt-10" id="contact">
      <div className="container mx-auto py-16 xl:max-w-screen-xl">
        <h2 className="mb-14 text-center text-3xl text-white">Contact Me</h2>
        <div className="flex flex-col-reverse items-center gap-5 lg:flex-row lg:justify-between">
          <div className="max-w-[450px] basis-1/2">
            <img src={image} className="size-full" alt="contact me" />
          </div>
          <div className="flex basis-1/2 xl:justify-end">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
