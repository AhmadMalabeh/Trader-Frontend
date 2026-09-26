export default function AdCard({
  title,
  description,
  image,
  imageUrl,
  price,
  buttonText = "عرض التفاصيل",
  buttonLink,
  onClick,
}) {
  const imageSource = imageUrl || image;
  const handleClick = onClick || (() => alert(`You clicked on ${title}`));

  const buttonContent = (
    <span className="inline-flex items-center rounded-md bg-[#129FF5] px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0b8ddd] md:text-base">
      {buttonText}
    </span>
  );

  return (
    <article className="flex min-h-90 flex-col-reverse gap-4 overflow-hidden bg-[#F7F9FB] shadow-sm md:flex-row">
      <div className="flex flex-1 flex-col justify-between p-4 md:w-[48%] md:p-8">
        <div>
          <h2 className="text-3xl font-bold leading-tight text-[#141826] md:text-[40px]">
            {title}
          </h2>
          <p className="mt-4 text-base font-normal leading-relaxed text-[#667085]">
            {description}
          </p>
          {price !== undefined && (
            <p className="mt-3 text-base font-semibold text-[#141826]">
              {price} JOD
            </p>
          )}
        </div>

        <div className="mt-4 md:mt-auto md:pt-12">
          {buttonLink ? (
            <a href={buttonLink}>{buttonContent}</a>
          ) : (
            <button type="button" onClick={handleClick}>
              {buttonContent}
            </button>
          )}
        </div>
      </div>

      <div className="aspect-4/3 w-full shrink-0 overflow-hidden md:w-[52%]">
        <img
          src={imageSource}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
    </article>
  );
}
