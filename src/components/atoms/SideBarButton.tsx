import React from 'react'
import DashboardIcon from "@mui/icons-material/Dashboard";

const SideBarButton = () => {
  return (
    <div className="flex items-center">
    <button
      className={`hidden flex-row items-center justify-center text-white font-sans not-italic text-[16px] leading-6 origin-left font-medium text-xl  bg-gradient-to-r from-violet-300 to-purple-700 hover:duration-500 hover:from-purple-700 hover:to-violet-300 p-1  ml-[-15%] mt-0 w-[242px] h-[42px] rounded-full shadow-slate-900 duration-300 md:flex`}
    >
      <DashboardIcon className={`cursor-pointer mr-2 duration-500`} />
      Dashboard
    </button>
  </div>
  )
}

export default SideBarButton