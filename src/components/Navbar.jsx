import logo from "../assets/logo.svg";

import {
  Bell,
  ChevronDown,
  Heart,
  MessageSquare,
  Search,
  User,
} from "lucide-react";

export default function Navbar({ notificationCount = 5 }) {
  return (
    <nav className="flex w-full items-center justify-between rounded-2xl bg-white px-6 py-3.5 shadow-sm">
      <div className="flex shrink-0 items-center gap-2">
        <svg
          className="h-8 w-8"
          viewBox="0 0 32 32"
          fill="none"
          src={logo}
          aria-label="Trader logo"
          role="img"
        >
          <defs>
            <linearGradient
              id="trader-logo-gradient"
              x1="4"
              y1="4"
              x2="28"
              y2="28"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0B5FFF" />
              <stop offset="1" stopColor="#00C2FF" />
            </linearGradient>
          </defs>
          <path
            d="M4 6h24l-6 7h-4v13h-6V13H8L4 6Z"
            fill="url(#trader-logo-gradient)"
          />
          <path
            d="M4 6h10l-6 7H4V6Zm24 0H18l6 7h4V6Z"
            fill="#00C2FF"
            fillOpacity="0.7"
          />
        </svg>
        <span className="font-sans text-2xl font-bold tracking-tight text-[#141826]">
          Trader
        </span>
      </div>

      <div className="mx-8 hidden h-11 max-w-xl flex-1 items-center rounded-xl bg-[#F1F2F7] px-4 md:flex">
        <Search
          className="h-4.5 w-4.5 shrink-0 text-[#9CA3AF]"
          aria-hidden="true"
        />
        <input
          type="text"
          placeholder="Search in Trader..."
          className="w-full border-0 bg-transparent px-3 text-sm text-[#141826] outline-none placeholder:text-[#9CA3AF]"
          aria-label="Search in Trader"
        />
      </div>

      <div className="flex shrink-0 items-center gap-5 text-[#1F2430]">
        <button
          type="button"
          className="rounded-lg p-1.5 transition-colors hover:bg-slate-100 md:hidden"
          aria-label="Search"
        >
          <Search className="h-5.5 w-5.5" strokeWidth={2} />
        </button>

        <button
          type="button"
          className="relative rounded-lg p-1.5 transition-colors hover:bg-slate-100"
          aria-label={`${notificationCount} notifications`}
        >
          <Bell className="h-5.5 w-5.5" strokeWidth={2} />
          <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-0.5 text-[10px] font-bold leading-none text-white">
            {notificationCount}
          </span>
        </button>

        <button
          type="button"
          className="rounded-lg p-1.5 transition-colors hover:bg-slate-100"
          aria-label="Messages"
        >
          <MessageSquare className="h-5.5 w-5.5" strokeWidth={2} />
        </button>

        <button
          type="button"
          className="rounded-lg p-1.5 transition-colors hover:bg-slate-100"
          aria-label="Favorites"
        >
          <Heart className="h-5.5 w-5.5" strokeWidth={2} />
        </button>

        <span className="h-6 w-px bg-gray-200" aria-hidden="true" />

        <button
          type="button"
          className="flex items-center gap-2 rounded-lg p-1 transition-colors hover:bg-slate-100"
          aria-label="Open user menu"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#14172A] text-white">
            <User className="h-4.5 w-4.5" strokeWidth={2} />
          </span>
          <ChevronDown className="h-4 w-4 text-gray-400" strokeWidth={2} />
        </button>
      </div>
    </nav>
  );
}
