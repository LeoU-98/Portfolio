import propTypes from 'prop-types';

function ExperienceCard({ data }) {
  const { title, date, points } = data;
  return (
    <div className="xl:maw-w-[60%] mx-auto flex min-h-72 flex-col gap-3 rounded-lg border-2 border-violet-700 p-6 text-white md:max-w-[80%] lg:max-w-[70%]">
      <h3 className="text-base sm:text-lg">{title}</h3>
      <p className="w-fit rounded-lg bg-gradient-to-r from-violet-600 to-violet-900 p-2 text-sm">
        {date.start} - {date.end}
      </p>
      <ul className="flex list-disc flex-col gap-3 pl-10 text-sm marker:text-violet-700">
        {points.map((point, key) => (
          <li key={key}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceCard;

ExperienceCard.propTypes = {
  data: propTypes.object,
};
