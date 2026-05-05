"use client";

import { useState } from "react";

import Footer from "./cmp/Footer";
import Navbar from "./cmp/Navbar";

import { User } from "./customObject/User";

export default function Home() {
  const [user, setUser] = useState<User | null>();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">

      <div className="fixed top-0 left-0 h-full p-2">
        <div className="flex flex-col justify-between h-[90%]">
          <Navbar user={user} setUser={setUser} />
        </div>
      </div>

      <Footer />

    </main>
  );
}