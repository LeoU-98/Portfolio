function ExperienceCard() {
  return (
    <div className="mx-auto flex min-h-72 w-fit max-w-[430px] flex-col gap-3 rounded-lg border-2 border-violet-700 p-6 text-white sm:max-w-none">
      <h3 className="text-lg">Junior Web Developer at Digital Solution</h3>
      <p className="w-fit rounded-lg bg-gradient-to-r from-violet-600 to-violet-900 p-2 text-sm">
        June 2020 - December 2021
      </p>
      <ul className="flex list-disc flex-col gap-3 pl-10 text-sm marker:text-violet-700">
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quas
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quas
        </li>
      </ul>
    </div>
  );
}

export default ExperienceCard;
