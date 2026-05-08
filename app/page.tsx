"use client";

import { useState } from "react";

import Footer from "./cmp/Footer";
import Navbar from "./cmp/Navbar";

import { User } from "./types/User";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const [user, setUser] = useState<User | null | undefined>();

  return <>
    <Navbar className="fixed top-0 left-0 z-50 w-full" user={user} setUser={setUser} />
    <Toaster position="top-center" toastOptions={
      {
        duration: 5000,
        style: {
          color: "var(--foreground)",
          background: "var(--background)",
          border: ".25rem solid var(--foreground)"
        }
      }
    } />


    <Footer />

  </>;
}