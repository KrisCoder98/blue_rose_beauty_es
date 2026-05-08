import { useState } from "react";

import { User } from "../types/User";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Auth4Navbar(
    { className, user, setUser }: {
        className?: string,
        user: User | null | undefined,
        setUser: React.Dispatch<React.SetStateAction<User | null | undefined>>
    }
) {

    return <div className={`${className}`}>
        {user
            ? <LoggedUser className="text-lg" user={user} />
            : <LoginForm className="text-lg" />}
    </div>;
}

function LoggedUser({ className, user }: { className?: string, user: User }) {
    return <div className={`${className}`}>
        <p>{user.name}</p>
    </div>;
}

function LoginForm({ className }: { className?: string }) {

    const [showForm, setShowForm] = useState(false);
    const [type, setType] = useState<"login" | "register">("login");

    return <div className={`${className}`}>
        {showForm ? (
            <div
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-(--background-secondary) text-(--foreground-secondary) shadow-lg rounded-lg z-50"
            >
                <FontAwesomeIcon
                    icon={faXmark}
                    className="absolute -top-5 -right-5 cursor-pointer text-(--foreground) bg-(--background) p-2 rounded-full border-2"
                    onClick={() => setShowForm(false)}
                />

                <p className="flex flex-row items-center justify-around ">
                    <span className={`text-lg text-center px-3 pt-3 rounded-full cursor-pointer flex-1 bg-(--background-secondary) text-(--foreground-secondary)
                            ${type === "login"
                            ? "font-bold underline underline-offset-8 rounded-bl-lg rounded-br-lg"
                            : "text-lg text-center"}`}
                        onClick={() => setType("login")}>
                        Form di login
                    </span>
                    <span className={`text-lg text-center px-3 pt-3 rounded-full cursor-pointer flex-1
                            ${type === "register"
                            ? "font-bold underline underline-offset-8 bg-(--background-secondary) text-(--foreground-secondary) rounded-bl-lg rounded-br-lg"
                            : "text-lg text-center"}`}
                        onClick={() => setType("register")}>
                        Form di registrazione
                    </span>
                </p>

                <form className="grid gap-3 grid-cols-2 mt-2 text-center p-5
                        [&>input]:p-2 [&>input]:rounded [&>input]:border [&>input]:border-gray-300 [&>input]:focus:outline-none [&>input]:focus:ring-2 [&>input]:focus:ring-(--background)">
                    {type === "register" && <>

                        <p className="col-span-2 text-lg font-bold">Dati anagrafici</p>
                        <input type="text" placeholder="Nome" />
                        <input type="text" placeholder="Cognome" />
                        <input type="date" placeholder="Data di nascita" />
                        <select className="p-2 rounded border border-gray-300" defaultValue="U">
                            <option value="U" disabled>Genere</option>
                            <option value="M">Maschio</option>
                            <option value="F">Femmina</option>
                            <option value="U">Non specificato</option>
                        </select>

                        <p className="col-span-2 text-lg font-bold">Dati di registrazione</p>
                        <input type="email" placeholder="Email" />
                        <input type="email" placeholder="Conferma Email" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Conferma Password" />
                    </>}
                    {type === "login" && <>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                    </>}

                    <p className="w-full col-span-2">
                        <button type="submit" className="bg-(--background)/70 text-(--foreground) px-5 py-2 rounded-lg hover:bg-(--background) cursor-pointer transition duration-300">{type === "login" ? "Accedi" : "Registrati"}</button>
                    </p>
                </form>
            </div>
        ) : (
            <p className="text-right">Sei già iscritto?<br /> Allora <span className="underline cursor-pointer" onClick={() => setShowForm(true)}>accedi!</span></p>
        )}
    </div>;
}

export default function AuthCmp() { }