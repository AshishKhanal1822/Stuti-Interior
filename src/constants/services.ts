export type ServiceItem = {
    num: string;
    title: string;
};

export type ServiceTab = {
    id: string;
    label: string;
    items: ServiceItem[];
};

export const serviceTabs: ServiceTab[] = [
    {
        id: "furnishing",
        label: "Workspace Furnishing Solutions",
        items: [
            { num: "01", title: "Office partitions (glass / wooden / modular)" },
            { num: "02", title: "Workstations and office tables" },
            { num: "03", title: "Conference and meeting tables" },
            { num: "04", title: "Reception desks" },
            { num: "05", title: "Storage units and drawers" },
            { num: "06", title: "Notice boards and display boards" },
        ],
    },
    {
        id: "modular",
        label: "Modular Furniture and Custom Fabrication",
        items: [
            { num: "01", title: "Custom office furniture" },
            { num: "02", title: "Cabinets and file storage systems" },
            { num: "03", title: "Wall-mounted units" },
            { num: "04", title: "Modular desks" },
            { num: "05", title: "Customized shelving solutions" },
        ],
    },
    {
        id: "planning",
        label: "Interior Space Planning and Layout Support",
        items: [
            { num: "01", title: "Basic layout planning" },
            { num: "02", title: "Space optimization solutions" },
            { num: "03", title: "Functional design suggestions" },
            { num: "04", title: "Material selection guidance" },
        ],
    },
    {
        id: "turnkey",
        label: "Turnkey Infrastructure Setup",
        items: [
            { num: "01", title: "Site measurement and consultation" },
            { num: "02", title: "Material procurement" },
            { num: "03", title: "Installation and finishing" },
            { num: "04", title: "Project supervision" },
            { num: "05", title: "On-time delivery and handover" },
        ],
    },
];
