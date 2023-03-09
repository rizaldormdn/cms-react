type SubPageProps = {
	name: string;
	icon: any;
};

type PageListProps = {
	title: string;
	subPages: SubPageProps[];
};

type PagesListProps = {
	pages: PageListProps[];
};

export const PageList: PagesListProps = {
	pages: [
		{ title: "Dashboard", subPages: [{ name: "Analytical", icon: "" }] },
		{
			title: "App",
			subPages: [{ name: "Users", icon: "" }],
		},
		{
			title: "Content",
			subPages: [
				{ name: "Article", icon: "" },
				{ name: "Program", icon: "" },
			],
		},
	],
};
