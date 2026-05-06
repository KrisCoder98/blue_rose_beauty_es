"use client";

import { useState } from "react";

import Footer from "./cmp/Footer";
import Navbar from "./cmp/Navbar";

import { User } from "./types/User";

export default function Home() {
  const [user, setUser] = useState<User | null>();

  return <>
    <Navbar className="fixed top-0 left-0 z-50 w-full" user={user} setUser={setUser} />

    <main className="flex flex-col items-center justify-center min-h-screen w-full h-full"></main>

    <Footer />
  </>;
}