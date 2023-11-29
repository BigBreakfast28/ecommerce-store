"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavProps {
    data: any
};

const MainNav: React.FC<MainNavProps> = ({
    data
}) => {
    const pathname = usePathname();

    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        route: route.name,
        active: pathname === `/category/${route.id}`
    }));

    return (
       <nav 
       className="mc-6 flex items-center space-x-4 lg:space-x-6"
       >
        {routes.map(() => (
            <Link
            key={routes.href}
            href={routes.href}
            className={}
            >
                {routes.label}
            </Link>
        ))}
       </nav>
    )
}

export default MainNav;