import { useState } from "react";

import { User } from "../types/User";

export function Auth4Navbar(
    { className, user, setUser }: {
        className?: string,
        user: User | null | undefined,
        setUser: React.Dispatch<React.SetStateAction<User | null | undefined>>
    }
) {

    // const [active, setActive] = useState(false);

    return <div className={`${className}`}>
        {user
            ? <p>Utente collegato</p>
            : <p>Nessun utente connesso</p>}
    </div>;
}

export default function AuthCmp() { }