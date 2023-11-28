"use client";

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
            main-nav
       </nav>
    )
}

export default MainNav;