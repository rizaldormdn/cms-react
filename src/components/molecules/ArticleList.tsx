import React, { useState } from "react";
import { DataGrid, GridCellParams, GridColDef, GridValueGetterParams, GridRowModel, GridAlignment } from "@mui/x-data-grid";
import Button from "../atoms/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MoreVert } from "@mui/icons-material";
import { IconButton } from "@mui/material";

interface RowProps extends GridRowModel {
  id: number;
  title: string;
  author: string;
  subtest: string;
  status: string;
  date: string;
  action: string;
}

function ArticleList() {
  const [click, setClick] = useState(false);

function getStatus (status:string) {
  switch (status) {
    case 'Published':
      return (
        <span className="uppercase py-1 px-2 rounded-2xl text-xs text-[#1E1E1E] bg-[#62FF3A]">
          {status.replaceAll('_', ' ').toLowerCase()}
        </span>
      )
    case 'Draft':
      return (
        <span className="uppercase py-1 px-2 rounded-2xl text-xs text-[#1E1E1E] bg-[#FFD43A]">
          {status.replaceAll('_', ' ').toLowerCase()}
        </span>
      )
    default:
      return (
        <span className="uppercase py-1 px-2 rounded-2xl text-xs text-[#1E1E1E] bg-teal-200">
          {status.replaceAll('_', ' ').toLowerCase()}
        </span>
      )     
  }
}
  const columns: GridColDef[] = [
    {
      field: "title",
      headerName: "TITLE",
      width: 180,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "author",
      headerName: "AUTHOR",
      width: 130,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "subtest",
      headerName: "SUBTEST",
      width: 130,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "status",
      headerName: "STATUS",
      width: 130,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => getStatus(params.value as string)
    },
    {
      field: "date",
      headerName: "DATE",
      type: "number",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
  ];
  const [rows, setRows] = useState<RowProps[]>([
    {
      id: 1,
      title: "lorem ipsum short title",
      author: "Snow",
      subtest: "MIPA",
      status: "Published",
      date: "2023/02/06 at 21:31",
      action: "",
    },
    {
      id: 2,
      title: "lorem ipsum short title",
      author: "Lannister",
      subtest: "MIPA",
      status: "Published",
      date: "2023/02/06 at 21:31",
      action: "",
    },
    {
      id: 3,
      title: "lorem ipsum short title",
      author: "Lannister",
      subtest: "MIPS",
      status: "Draft",
      date: "2023/02/06 at 21:31",
      action: "",
    },
    {
      id: 4,
      title: "lorem ipsum short title",
      author: "Stark",
      subtest: "MIPS",
      status: "Draft",
      date: "2023/02/06 at 21:31",
      action: "",
    },
    {
      id: 5,
      title: "lorem ipsum short title",
      author: "Targaryen",
      subtest: "MIPS",
      status: "Draft",
      date: "2023/02/06 at 21:31",
      action: "",
    },
    {
      id: 6,
      title: "lorem ipsum short title",
      author: "Melisandre",
      subtest: "MIPA",
      status: "Published",
      date: "2023/02/06 at 21:31",
      action: "",
    },
    {
      id: 7,
      title: "lorem ipsum short title",
      author: "Clifford",
      subtest: "MIPS",
      status: "Draft",
      date: "2023/02/06 at 21:31",
      action: "",
    },
    {
      id: 8,
      title: "lorem ipsum short title",
      author: "Frances",
      subtest: "MIPS",
      status: "Published",
      date: "2023/02/06 at 21:31",
      action: "",
    },
    {
      id: 9,
      title: "lorem ipsum short title",
      author: "Roxie",
      subtest: "MIPA",
      status: "Published",
      date: "2023/02/06 at 21:31",
      action: "",
    },
  ]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const actionColumn: GridColDef[] = [{
    field: "action",
    headerName: "ACTION",
    width: 150,
    align: "center" as GridAlignment,
    headerAlign: "center",
    renderCell:(params: GridCellParams) => {
      const handleEdit = () => {
        console.log(`Editing row with id ${params.id}`);
        handleClose();
      };
      const handleDelete = () => {
        console.log(`Deleting row with id ${params.id}`);
        handleClose();
      };
      return (
        <div>
          <IconButton onClick={handleClick}>
            <MoreVert />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleEdit}>Edit</MenuItem>
            <MenuItem onClick={handleDelete}>Delete</MenuItem>
          </Menu>
        </div>
      );
    }}]
  return (
    <>
      <div className="flex place-content-end">
        <div className="text-lg text-center rounded-xl p-1 bg-slate-300 hover:bg-slate-400 ">
          <Button
            title="CREATE ARTICLE"
            action={(e) => {
              alert("Triggered");
            }}
          />
        </div>
      </div>
      <div
        style={{ height: 400, width: "100%" }}
        className="flex mt-2 justify-center items-center text-center"
      >
        <DataGrid
          rows={rows}
          columns={columns.concat(actionColumn)}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </>
  );
}

export default ArticleList;

// import { stat } from "fs/promises";
// import React, { useState } from "react";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

// const ArticleList = () => {
// const [] = useState() 
// const [click, setClick] = useState(false);
// const rows = [
//       {
//         id: 1,
//         title: "lorem ipsum short title",
//         author: "Snow",
//         subtest: "MIPA",
//         status: "Published",
//         date: "2023/02/06 at 21:31",
//         action: "",
//       },
//       {
//         id: 2,
//         title: "lorem ipsum short title",
//         author: "Lannister",
//         subtest: "MIPA",
//         status: "Published",
//         date: "2023/02/06 at 21:31",
//         action: "",
//       },
//       {
//         id: 3,
//         title: "lorem ipsum short title",
//         author: "Lannister",
//         subtest: "MIPS",
//         status: "Draft",
//         date: "2023/02/06 at 21:31",
//         action: "",
//       },
//       {
//         id: 4,
//         title: "lorem ipsum short title",
//         author: "Stark",
//         subtest: "MIPS",
//         status: "Draft",
//         date: "2023/02/06 at 21:31",
//         action: "",
//       },
//       {
//         id: 5,
//         title: "lorem ipsum short title",
//         author: "Targaryen",
//         subtest: "MIPS",
//         status: "Draft",
//         date: "2023/02/06 at 21:31",
//         action: "",
//       },
//       {
//         id: 6,
//         title: "lorem ipsum short title",
//         author: "Melisandre",
//         subtest: "MIPA",
//         status: "Published",
//         date: "2023/02/06 at 21:31",
//         action: "",
//       },
//       {
//         id: 7,
//         title: "lorem ipsum short title",
//         author: "Clifford",
//         subtest: "MIPS",
//         status: "Draft",
//         date: "2023/02/06 at 21:31",
//         action: "",
//       },
//       {
//         id: 8,
//         title: "lorem ipsum short title",
//         author: "Frances",
//         subtest: "MIPS",
//         status: "Published",
//         date: "2023/02/06 at 21:31",
//         action: "",
//       },
//       {
//         id: 9,
//         title: "lorem ipsum short title",
//         author: "Roxie",
//         subtest: "MIPA",
//         status: "Published",
//         date: "2023/02/06 at 21:31",
//         action: "",
//       },
//     ];
// const [selectedItemId, setSelectedItemId] = useState<number | null>(null)
// const handleCheckboxClick = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
//   if (event.target.checked) {
//     setClick(false);
//     setSelectedItemId(id);
//   } else {
//     setSelectedItemId(null);
//   }
// };
// const handleMenuClick = (event: React.MouseEvent<SVGSVGElement>, id: number) => {
//   setClick(true);
//   setSelectedItemId(id);
// };
// const handleMenuClose = () => {
//   setClick(false);
//   setSelectedItemId(null);
// };

// function getStatus (status:string) {
//   switch (status) {
//     case 'Published':
//       return (
//         <span className="uppercase py-1 px-2 rounded-2xl text-xs text-[#1E1E1E] bg-[#62FF3A]">
//           {status.replaceAll('_', ' ').toLowerCase()}
//         </span>
//       )
//     case 'Draft':
//       return (
//         <span className="uppercase py-1 px-2 rounded-2xl text-xs text-[#1E1E1E] bg-[#FFD43A]">
//           {status.replaceAll('_', ' ').toLowerCase()}
//         </span>
//       )
//     default:
//       return (
//         <span className="uppercase py-1 px-2 rounded-2xl text-xs text-[#1E1E1E] bg-teal-200">
//           {status.replaceAll('_', ' ').toLowerCase()}
//         </span>
//       )     
//   }
// }

//   return (
//     <div className="px-4 pt-3 pb-4 rounded-sm border border-gray-300 flex-1">
//       <div className="w-full">
//         <table className="w-full text-center text-lg bg-slate-100">
//           <thead>
//             <tr className="text-[16px] font-bold">
//               <td><input type="checkbox" /></td>
//               <td>Title</td>
//               <td>Author</td>
//               <td>Subtest</td>
//               <td>Status</td>
//               <td>Date</td>
//               <td>Action</td>
//             </tr>
//           </thead>
//           <tbody className="text-[18px] bg-slate-500">
//             {rows.map((row => (
//               <tr key={row.id}>
//                 <td><input type="checkbox"
//                     checked={selectedItemId === null ? false : selectedItemId === row.id}
//                     onChange={(e) => handleCheckboxClick(e, row.id)}/></td>
//                 <td className="p-2">{row.title}</td>
//                 <td>{row.author}</td>
//                 <td>{row.subtest}</td>
//                 <td>{getStatus(row.status)}</td>
//                 <td>{row.date}</td>
//                 <td><MoreVertIcon
//                     onClick={(e) => handleMenuClick(e, row.id)} 
//                     />
//                 </td>
//                 {click && selectedItemId === row.id && (
//                   <div className="absolute bg-white right-[5rem] flex flex-col p-1 w-[120px] gap-2">
//                     <div className="flex gap-3 items-center p-1 capitalize"><input type="radio" /><span>edit</span> </div>
//                     <div className="flex gap-3 items-center p-1 capitalize"><input type="radio" /><span>delete</span> </div>                    
//                   </div>
//                 )}
//               </tr>
//             )))}
//           </tbody>
//         </table>
        
//       </div>
//     </div>
//   )
// }

// export default ArticleList;
