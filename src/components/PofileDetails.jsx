import { useState } from "react";
import { CalendarDays, Edit3, Phone, Plus, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import AdCard from "./AdCard";

export default function ProfileDetails({
  user = {},
  ads = [],
  favoriteAds = [],
}) {
  const [activeTab, setActiveTab] = useState("my-ads");
  const activeAdsCount = ads.length;
  const avatar = user.avatar;
  const displayedAds = activeTab === "favorites" ? favoriteAds : ads;

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#F4F5F9] px-4 py-6 sm:px-6 lg:px-8"
    >
      <div
        className="mx-auto flex w-full max-w-7xl flex-col gap-6"
        style={{ fontFamily: "Inter, Poppins, sans-serif" }}
      >
        <section className="flex flex-col items-center gap-6 rounded-2xl bg-white p-6 text-center shadow-sm sm:flex-row sm:items-center sm:text-right sm:p-8">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-full bg-slate-100 text-gray-500">
            {avatar ? (
              <img
                src={avatar}
                alt={user.name ? `${user.name} avatar` : "Profile avatar"}
                className="h-full w-full object-cover"
              />
            ) : (
              <UserRound size={40} aria-hidden="true" />
            )}
          </div>

          <div className="min-w-0 flex flex-1 flex-col items-center gap-1 sm:items-start">
            <h1 className="wrap-break-word text-2xl font-bold text-[#141826]">
              {user.name || "المستخدم"}
            </h1>
            {user.phone && (
              <a
                className="mt-2 inline-flex items-center gap-2 text-sm text-gray-500"
                href={`tel:${user.phone}`}
              >
                <Phone size={16} aria-hidden="true" />
                {user.phone}
              </a>
            )}
            {user.email && (
              <a
                className="mt-1 inline-flex items-center gap-2 text-sm text-gray-500"
                href={`mailto:${user.email}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M4 8h16" />
                  <path d="M4 16h16" />
                </svg>
                {user.email}
              </a>
            )}
            {user.memberSince && (
              <p className="mt-1 inline-flex items-center gap-2 text-sm text-gray-500">
                <CalendarDays size={16} aria-hidden="true" />
                Member since {user.memberSince}
              </p>
            )}
            <p className="mt-3 text-sm font-semibold text-[#141826]">
              {activeAdsCount} إعلانات نشطة
            </p>
          </div>

          <div className="flex w-full shrink-0 flex-col items-center gap-3 sm:w-auto sm:items-end">
            <Link
              to="/add-new-ad"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-red-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              <Plus size={16} aria-hidden="true" />
              إضافة إعلان جديد
            </Link>
            <button
              type="button"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-[#141826] transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              <Edit3 size={16} aria-hidden="true" />
              Edit profile
            </button>
            <button
              type="button"
              className="min-h-10 px-2 text-sm text-gray-500 underline-offset-4 transition-colors hover:text-[#141826] hover:underline focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Sign out
            </button>
          </div>
        </section>

        <section
          aria-labelledby="my-ads-heading"
          className="flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="flex gap-4 flex-row items-center justify-between">
            <h2
              id="my-ads-heading"
              className="text-2xl font-bold text-[#141826]"
            >
              نشاطاتي
            </h2>

            <div className="flex w-full gap-2 overflow-x-auto pb-1 sm:w-auto">
              {[
                { value: "my-ads", label: "إعلاناتي" },
                { value: "favorites", label: "إعلاناتي المفضلة" },
              ].map((tab) => {
                const isSelected = activeTab === tab.value;

                return (
                  <button
                    key={tab.value}
                    type="button"
                    onClick={() => setActiveTab(tab.value)}
                    className={`min-h-11 shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                      isSelected
                        ? "bg-[#141826] text-white"
                        : "bg-slate-100 text-gray-500 hover:bg-slate-200"
                    }`}
                    aria-pressed={isSelected}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {displayedAds.length > 0 ? (
            <div className="mt-5 flex flex-col gap-6 sm:mt-6">
              {displayedAds.map((ad) => (
                <AdCard
                  key={ad.id}
                  title={ad.title}
                  description={ad.description}
                  imageUrl={ad.mainImage}
                  price={ad.price}
                  buttonText="عرض التفاصيل"
                  buttonLink={`/ad-details/${ad.id}`}
                />
              ))}
            </div>
          ) : (
            <div className="mt-5 flex flex-col items-center justify-center rounded-2xl bg-white px-6 py-14 text-center shadow-sm">
              <p className="text-sm text-gray-500">
                {activeTab === "favorites"
                  ? "لا توجد إعلانات مفضلة"
                  : "لا توجد إعلانات نشطة"}
              </p>
              <Link
                to="/add-new-ad"
                className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-red-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                <Plus size={18} aria-hidden="true" />
                أضف إعلاناً
              </Link>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
