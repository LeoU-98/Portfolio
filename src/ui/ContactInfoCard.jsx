import propTypes from 'prop-types';

function ContactInfoCard({ imageSource, text }) {
  return (
    <div className="flex w-full max-w-[430px] flex-col items-center gap-2 rounded-xl border-2 border-violet-600 px-10 py-6 text-white">
      <div className="size-10 select-none">
        <img src={imageSource} alt="icon" />
      </div>
      <p>{text}</p>
    </div>
  );
}

export default ContactInfoCard;

ContactInfoCard.propTypes = {
  imageSource: propTypes.string,
  text: propTypes.string,
};
