import { profile } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-white/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="font-semibold text-slate-700">{profile.fullName}</p>
        <p>{profile.theme}</p>
        <p>Copyright © {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
