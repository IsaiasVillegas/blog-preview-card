const Card = ({
  blogimage,
  category,
  publishdate,
  title,
  description,
  userpic,
  authorname,
}) => {
  return (
    <div className="bg-n-1 p-6 border border-n-3 rounded-[1.25rem] transition-shadow  shadow-cardShadow hover:shadow-cardShadowActive  max-w-[327px] md:max-w-[384px]">
      <div className="overflow-hidden space-y-6">
        <img
          src={blogimage}
          alt="illustration"
          className="rounded-lg w-[279px] md:w-[336px] h-[200px] object-cover"
        />

        <div className="space-y-3">
          <span className="inline-block bg-primary-1 text-n-3 text-xs md:text-sm font-figtree font-extrabold px-3 py-1 rounded-[4px]">
            {category}
          </span>
          <p className="text-n-3 text-xs md:text-sm font-figtree font-medium">
            {publishdate}
          </p>

          <h2 className="text-n-3 text-xl md:text-2xl font-figtree font-extrabold cursor-pointer transition-colors hover:text-primary-1">
            {title}
          </h2>

          <p className="text-n-2 text-sm md:text-base font-figtree font-medium">
            {description}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <img src={userpic} width={32} height={32} alt="image avatar" />
          <p className="text-n-3 text-sm font-figtree font-extrabold">
            {authorname}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
