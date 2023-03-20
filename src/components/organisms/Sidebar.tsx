import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CollectionsIcon from "@mui/icons-material/Collections";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ArticleIcon from "@mui/icons-material/Article";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import Header from "../molecules/Header";
import { SiteInfo } from "../../data/SiteInfo";
import SideBarItem from "../molecules/SideBarItem";

const Sidebar = () => {
  const listItems = [
    { src: <LibraryBooksIcon />, title: "Blogs", route: "/blogs" },
    { src: <ShoppingBagIcon />, title: "Authors", route: "/authors" },
    { src: <CollectionsIcon />, title: "Media", route: "/products" },
    { src: <AccountBoxIcon />, title: "Contacts", route: "/blogs" },
    { src: <ArticleIcon />, title: "Pages", route: "/pages" },
    { src: <ArticleIcon />, title: "me", route: "/me" },
  ];

  return (
    <aside className="flex flex-col min-h-screen pr-5">
      <div className="flex justify-items-center w-fit">
        <Header />
        <span className="flex items-center justify-center font-normal">
          {SiteInfo.siteTitle}
        </span>
      </div>
      <div className="flex flex-row items-center justify-center mt-[7%] ml-[-40%]">
        <div className="flex justify-items-center w-[50px] h-[1px] bg-slate-400 mr-[10px]"></div>
        <p className="hidden text-[12px] font-sans not-italic font-normal leading-5 text-slate-400 md:flex">
          APPS & PAGES
        </p>
        <p className="flex text-[12px] font-sans not-italic font-normal ml-2 leading-5 text-slate-400 md:hidden">
          PAGES
        </p>
        <div className="flex justify-items-center w-[90px] h-[1px] bg-slate-400 ml-[10px]"></div>
      </div>
      <div className="flex flex-col gap-2">
        {listItems.map((item, index) => {
          return (
            <SideBarItem key={index} goTo={item.route} src={item.src} title={item.title} />
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
