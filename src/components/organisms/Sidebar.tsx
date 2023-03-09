import React from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CollectionsIcon from "@mui/icons-material/Collections";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ArticleIcon from "@mui/icons-material/Article";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AdjustIcon from "@mui/icons-material/Adjust";
import ListItem from "../atoms/ListItem";
import Header from "../molecules/Header";
import SideBarButton from "../atoms/SideBarButton";

type Props = {};

const Sidebar = (props: Props) => {
  const listItems = [
    { src: <LibraryBooksIcon />, title: "Blogs", goTo: "/blogs" },
    { src: <ShoppingBagIcon />, title: "Authors", goTo: "/authors" },
    { src: <CollectionsIcon />, title: "Media", goTo: "/products" },
    { src: <AccountBoxIcon />, title: "Contacts", goTo: "/blogs" },
    { src: <ArticleIcon />, title: "Pages", goTo: "/pages" },
  ];

  return (
    <aside className="flex flex-col min-h-screen">
      <div className="flex justify-items-center w-[50%]">
        <Header
          siteTitle="Materio"
          siteLogoUrl="https://www.pngarts.com/files/3/Logo-PNG-Transparent-Image.png"
        />
        <span className="flex items-center justify-center font-normal">
          LOG
        </span>
        <span className="flex items-center justify-center">
          <AdjustIcon />
        </span>
      </div>
      <SideBarButton />
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
      {listItems.map((value, index) => {
        return (
          <ListItem
            key={index}
            goTo={value.goTo}
            title={value.title}
            src={value.src}
          />
        );
      })}
    </aside>
  );
};

export default Sidebar;
