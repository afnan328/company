export interface NavLink {
    title: string;
    href: string;
    submenu?: NavLink[];
}

export const navLinks: NavLink[] = [
    {
        title: "Home",
        href: "#",
        submenu: [
            {
                title: "Home Demo - 1",
                href: "/",
            },
            {
                title: "Home Demo - 2",
                href: "/home-2",
            },
            {
                title: "Home Demo - 3",
                href: "/home-3",
            },
        ],
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Courses",
        href: "#",
        submenu: [
            {
                title: "Courses",
                href: "/courses",
            },
            {
                title: "Course Details",
                href: "/course-details",
            },
        ],
    },
    {
        title: "Pages",
        href: "#",
        submenu: [
            {
                title: "Team",
                href: "/team",
            },
            {
                title: "Team Details",
                href: "/team-details",
            },
            {
                title: "Blog",
                href: "#",
                submenu: [
                    {
                        title: "Blog",
                        href: "/blog",
                    },
                    {
                        title: "Blog Details",
                        href: "/blog-details",
                    },
                ],
            },
            {
                title: "Login",
                href: "/login",
            },
            {
                title: "Register",
                href: "/register",
            },
            {
                title: "Privacy Policy",
                href: "/privacy-policy",
            },
            {
                title: "Terms & Conditions",
                href: "/terms-conditions",
            },
            {
                title: "404 Error Page",
                href: "/not-found",
            },
        ],
    },
    {
        title: "Contact",
        href: "/contact",
    },
];