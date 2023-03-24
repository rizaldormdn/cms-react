import { TablePagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/icons/threedotted.png";
import { api } from "../../utils/api";
import Button from '../atoms/Button';
import DataCell from '../atoms/table/DataCell';
import HeaderCell from '../atoms/table/HeaderCell';

type Props = {
     slug: string
     title: string
     excerpt: string
     author_name: string
     date: {
          created_at: string
     }
}
const ListProduct = () => {
     const router = useNavigate()

     const [programs, setPrograms] = useState<Props[]>([])
     const [page, setPage] = useState<number>(0)
     const [totalPrograms, setTotalPrograms] = useState<number>(0)
     const [rowsPerPage, setRowsPerPage] = useState<number>(10)
     const [totalPages, setTotalPages] = useState<number>(0)

     const handleProgram = async () => {
          await api.get(`/v1/program?page=${page + 1}`)
               .then((res) => {
                    setPrograms(res.data.data.program)
                    setRowsPerPage(res.data.paging.limit)
                    setTotalPrograms(res.data.paging.total)
                    setTotalPages(res.data.paging.pages);
               })
               .catch((err) => {
                    console.error(err);
               })
     }

     const handleChangePage = async (_e: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
          if (newPage < 0 || newPage > totalPages - 1) {
               return
          }
          setPage(newPage)

     }

     useEffect(() => {
          handleProgram()
     }, [page])

     const [clicks, setClicks] = useState(Array(programs.length).fill(false))
     const [checkedRows, setCheckedRows] = useState(Array(programs.length).fill(false));
     const [checkedHead, setCheckedHead] = useState(false);

     const toggleClick = (index: any) => {
          const togle = [...clicks]
          togle[index] = !togle[index]

          for (let i = 0; i < togle.length; i++) {
               if (i !== index) {
                    togle[i] = false
               }
          }
          setClicks(togle)
     }

     const toggleRowChecked = (index: number) => {
          const togle = [...checkedRows]
          togle[index] = !togle[index]
          setCheckedRows(togle)

     };

     const toggleHeaderChecked = () => {
          setCheckedHead(!checkedHead)
          setCheckedRows(Array(programs.length).fill(!checkedHead))
     };
     return (
          <div>
               <div className='text-right' >
                    <Button
                         title='Create Product'
                         action={() => router('/create-product')}
                         buttonStyle="bg-[#9155FD] text-white p-2 m-4 rounded"
                    />
               </div>
               <table className='w-full'>
                    <thead className='bg-[#d9d9d9]'>
                         <tr>
                              <HeaderCell value={<input
                                   type='checkbox'
                                   onChange={toggleHeaderChecked}
                                   checked={checkedHead}
                              />}
                              />
                              <HeaderCell value={"Title"} />
                              <HeaderCell value={"Author"} />
                              <HeaderCell value={"Size"} />
                              <HeaderCell value={"Date"} />
                              <HeaderCell value={"Action"} />
                         </tr>
                    </thead>
                    <tbody>
                         {programs.map((v, i) => (
                              <tr key={v.slug}>
                                   <DataCell value={<input
                                        type='checkbox'
                                        onChange={(e) => toggleRowChecked(i)}
                                        checked={checkedRows[i]}
                                   />}
                                   />
                                   <DataCell value={v.title} />
                                   <DataCell value={v.author_name} />
                                   <DataCell value={""} />
                                   <DataCell value={new Date(v.date.created_at).toLocaleString("id-ID")} />
                                   <DataCell value={
                                        <figure className="w-full relative flex justify-center cursor-pointer">
                                             <img
                                                  width={5}
                                                  src={icon}
                                                  alt="icon"
                                                  onClick={() => {
                                                       toggleClick(i)
                                                  }}
                                             />
                                             {clicks[i] && (
                                                  <div className="flex flex-col items-start mr-[10rem] bg-[#d9d9d9] px-8 py-2 rounded shadow-2xl absolute">
                                                       <Button
                                                            title="Edit"
                                                            action={() => { }}
                                                       />
                                                       <Button
                                                            title="Delete"
                                                            action={() => { }}
                                                       />
                                                  </div>
                                             )}
                                        </figure>
                                   } />

                              </tr>
                         ))}
                    </tbody>
               </table>
               <div>
                    <TablePagination
                         rowsPerPageOptions={[]}
                         component="div"
                         count={totalPrograms}
                         page={page}
                         onPageChange={handleChangePage}
                         rowsPerPage={rowsPerPage}
                         onRowsPerPageChange={() => { }}
                    />
               </div>
          </div >
     )
}
export default ListProduct