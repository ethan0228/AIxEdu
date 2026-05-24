"use client";

import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { navItems, profile } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-blue-100/70 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3 font-bold text-primary" aria-label="回到首頁">
          <span className="grid size-10 place-items-center rounded-2xl bg-primary text-white shadow-sm">
            <Sparkles size={20} />
          </span>
          <span className="text-lg tracking-normal">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-2xl border border-blue-100 text-primary lg:hidden"
          aria-label={open ? "關閉選單" : "開啟選單"}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-blue-100 bg-white px-5 py-4 shadow-sm lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
