import { User } from "../customObject/User";

export function Auth4Navbar({ className, user, setUser }: { className?: string, user: User | null | undefined, setUser: React.Dispatch<React.SetStateAction<User | null | undefined>> }) {
    return <div className={`${className} flex flex-col items-center justify-center space-y-5`}>
        <h2 className="text-2xl font-bold">Accedi al tuo account</h2>
        <input type="text" placeholder="Username" className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-xs" />
        <input type="password" placeholder="Password" className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-xs" />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Login</button>
    </div>
}

export default function AuthCmp() { }