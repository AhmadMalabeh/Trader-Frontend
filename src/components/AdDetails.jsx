import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clock3,
  MapPin,
  Phone,
  UserRound,
} from "lucide-react";

function resolveImageUrl(imagePath, apiBaseUrl) {
  if (!imagePath) return "";

  if (
    /^(?:[a-z]+:)?\/\//i.test(imagePath) ||
    /^(?:data|blob):/i.test(imagePath)
  ) {
    return imagePath;
  }

  if (!apiBaseUrl) return imagePath;

  return `${apiBaseUrl.replace(/\/$/, "")}/${imagePath.replace(/^\//, "")}`;
}

export default function AdDetails({ ad = {}, apiBaseUrl = "" }) {
  const imageSources = [ad.mainImage, ...(ad.secondaryImages || [])]
    .filter(Boolean)
    .map((imagePath) => resolveImageUrl(imagePath, apiBaseUrl));
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const selectedImage =
    selectedImageIndex < imageSources.length ? selectedImageIndex : 0;
  const activeImage = imageSources[selectedImage] || imageSources[0];
  const seller = ad.seller || {};
  const avatarUrl = resolveImageUrl(seller.avatar, apiBaseUrl);
  const specs = Array.isArray(ad.specs) ? ad.specs : [];

  function showPreviousImage() {
    setSelectedImageIndex((currentIndex) =>
      currentIndex <= 0 ? imageSources.length - 1 : currentIndex - 1,
    );
  }

  function showNextImage() {
    setSelectedImageIndex((currentIndex) =>
      currentIndex >= imageSources.length - 1 ? 0 : currentIndex + 1,
    );
  }

  return (
    <article
      className="mx-auto flex w-full max-w-7xl flex-col gap-6 rounded-2xl bg-white p-4 shadow-sm sm:p-6 lg:flex-row lg:gap-8"
      style={{ fontFamily: "Inter, Poppins, sans-serif" }}
    >
      <section className="min-w-0 flex-1 lg:w-[60%]" aria-label="Ad images">
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-slate-100">
          {activeImage ? (
            <img
              src={activeImage}
              alt={ad.title || "Ad listing"}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-gray-500">
              No image available
            </div>
          )}

          {imageSources.length > 1 && (
            <>
              <button
                type="button"
                onClick={showNextImage}
                aria-label="Next image"
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#141826] shadow-sm transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                <ChevronLeft size={24} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={showPreviousImage}
                aria-label="Previous image"
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#141826] shadow-sm transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                <ChevronRight size={24} aria-hidden="true" />
              </button>
            </>
          )}
        </div>

        {imageSources.length > 1 && (
          <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
            {imageSources.map((image, imageIndex) => {
              const isSelected = imageIndex === selectedImage;

              return (
                <button
                  key={`${image}-${imageIndex}`}
                  type="button"
                  onClick={() => setSelectedImageIndex(imageIndex)}
                  className={`h-22.5 w-22.5 shrink-0 overflow-hidden rounded-xl border-2 transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                    isSelected ? "border-red-500" : "border-transparent"
                  }`}
                  aria-label={`View image ${imageIndex + 1}`}
                  aria-pressed={isSelected}
                >
                  <img
                    src={image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        )}
      </section>

      <section className="min-w-0 flex-1 space-y-5 lg:w-[40%]">
        <div>
          <h1 className="wrap-break-words text-2xl font-bold text-[#141826]">
            {ad.title}
          </h1>
          <p className="mt-2 text-xl font-bold text-red-500">{ad.price}</p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500">
            {ad.location && (
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={16} aria-hidden="true" />
                {ad.location}
              </span>
            )}
            {ad.postedAt && (
              <span className="inline-flex items-center gap-1.5">
                <Clock3 size={16} aria-hidden="true" />
                {ad.postedAt}
              </span>
            )}
          </div>
        </div>

        <section
          className="rounded-2xl border border-slate-100 p-4"
          aria-label="Seller"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-slate-100 text-gray-500">
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt={seller.name ? `${seller.name} avatar` : "Seller avatar"}
                  className="h-full w-full object-cover"
                />
              ) : (
                <UserRound size={22} aria-hidden="true" />
              )}
            </div>
            <div className="min-w-0">
              <p className="truncate font-semibold text-[#141826]">
                {seller.name || "Seller"}
              </p>
              {seller.phone && (
                <p className="mt-0.5 inline-flex items-center gap-1 text-sm text-gray-500">
                  <Phone size={14} aria-hidden="true" />
                  {seller.phone}
                </p>
              )}
            </div>
          </div>
          <a
            href={seller.phone ? `tel:${seller.phone}` : undefined}
            className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#141826] px-4 py-3 text-center font-semibold text-white transition-colors hover:bg-[#252b3d] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Contact seller
          </a>
        </section>

        {ad.description && (
          <p className="whitespace-pre-line wrap-break-words text-sm leading-7 text-gray-600">
            {ad.description}
          </p>
        )}

        {specs.length > 0 && (
          <section
            className="rounded-xl bg-slate-100 p-4"
            aria-label="Specifications"
          >
            <h2 className="mb-3 font-semibold text-[#141826]">Specs</h2>
            <dl className="grid grid-cols-2 gap-x-4 gap-y-3">
              {specs.map((spec, index) => (
                <div key={`${spec.label}-${index}`} className="min-w-0">
                  <dt className="truncate text-xs text-gray-500">
                    {spec.label}
                  </dt>
                  <dd className="wrap-break-words text-sm font-semibold text-[#141826]">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}
      </section>
    </article>
  );
}
