'use client'
import React from "react";
import dynamic from 'next/dynamic';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue} from "@nextui-org/react";
import {Assets} from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import useWindowSize from "../../../customHooks/useWindownSize";
import UpdateModal from './UpdateModal';
import Addnewmodal from "./Addnewmodal"
export default function page() {
  const UWS= useWindowSize()  
  const [datajson,setdatajson]=React.useState()
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 5;

  const pages = Math.ceil(Assets.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return Assets.slice(start, end);
  }, [page, Assets]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const handleOpenModal = () => {
    setIsAddNewOpen(false)
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const updatedjsondata=(val)=>{
    setdatajson(val)
    handleOpenModal()
  }

  const [isAddNewOPen,setIsAddNewOpen]=React.useState(false);
  const handleAddNew = ()=>{
    setIsModalOpen(false)
    setIsAddNewOpen(!isAddNewOPen)
  }
//   if(UWS.width>768){
//   return (
//     <div>
      
//       <button className="pt-1 mx-4  border-2 shadow-md rounded-md cursor-pointer w-[15vw] h-[6vh] mt-4">Add New
//       <span><FontAwesomeIcon icon={faPlus} size="lg" className="mx-4"/></span></button>
      
//     <Table 
//       aria-label="Example table with client side pagination"
//       className="mt-4 w-calc(100vw)"
//       bottomContent={
//         <div className="flex w-full justify-center">
//           <Pagination
//             isCompact
//             showControls
//             showShadow
//             color="secondary"
//             page={page}
//             total={pages}
//             onChange={(page) => setPage(page)}
//           />
//         </div>
//       }
//       classNames={{
//         wrapper: "min-h-[222px]",
//       }}
//     >
//       <TableHeader className="flex flex-col text-center">
//         <TableColumn className="text-center bg-gray-800 text-white" key="asstID">Asset ID</TableColumn>
//         <TableColumn className="text-center bg-gray-800 text-white" key="asstName">Asset Name</TableColumn>
//         <TableColumn className="text-center bg-gray-800 text-white" key="empId">Employee ID</TableColumn>
//         <TableColumn className="text-center bg-gray-800 text-white" key="empName">Employee Name</TableColumn>
//         <TableColumn className="text-center bg-gray-800 text-white" key="actions">Actions</TableColumn>
//       </TableHeader>
//       <TableBody items={items}>
//         {(item) => (
//           <TableRow key={item.asstID} className=" text-center hover:bg-gray-800 hover:text-white">
//             {(columnKey) => (columnKey!="actions")?<TableCell>{getKeyValue(item, columnKey)}</TableCell>:
//             (<TableCell>
//               <div className="flex items-center justify-center gap-3 space-x-3">
//                 <FontAwesomeIcon className="cursor-pointer" icon={faPen} color="orange" size="lg"/>
//                 <FontAwesomeIcon className="cursor-pointer" icon={faTrash} color="red"/>
            
//               </div>
//             </TableCell>)
//             }
//           </TableRow>
//         )}
//       </TableBody>
//     </Table>
//     </div>
//   );
// }
// else if(UWS.width>425 && UWS.width<=768){
//   return (
//     // <div>
//     //   <h1>hi</h1>
//     // </div>
//     <div>
//       <button className="pt-1 col-span-4 mx-4 border-2 shadow-md rounded-md cursor-pointer w-[30vw] h-[10vh] mt-4">
//         Add New
//         <span>
//           <FontAwesomeIcon icon={faPlus} size="lg" className="mx-4" />
//         </span>
//       </button>

//       <Table
//         aria-label="Example table with client side pagination"
//         className="mt-4 w-calc(100vw)"
//         bottomContent={
//           <div className="flex w-full justify-center">
//             <Pagination
//               isCompact
//               showControls
//               showShadow
//               color="secondary"
//               page={page}
//               total={pages}
//               onChange={(page) => setPage(page)}
//             />
//           </div>
//         }
//         classNames={{
//           wrapper: "min-h-[222px]",
//         }}
//       >
//         <TableHeader className="flex flex-col text-center col-span-12 z-20">
//             {/* <div className="flex flex-col">
//               <div className="flex flex-row justify-between">
//                 <TableColumn
//                   className="text-center bg-gray-800 text-white"
//                   key="asstID"
//                 >
//                   Asset ID
//                 </TableColumn>
//                 <TableColumn
//                   className="text-center bg-gray-800 text-white"
//                   key="asstName"
//                 >
//                   Asset Name
//                 </TableColumn>
//               </div>
//               <div className="flex flex-row justify-between">
//                 <TableColumn
//                   className="text-center bg-gray-800 text-white"
//                   key="empId"
//                 >
//                   Employee ID
//                 </TableColumn>
//                 <TableColumn
//                   className="text-center bg-gray-800 text-white"
//                   key="empName"
//                 >
//                   Employee Name
//                 </TableColumn>
//               </div>

//               <TableColumn
//                 className="text-center bg-gray-800 text-white"
//                 key="actions"
//               >
//                 Actions
//               </TableColumn>
//             </div> */}
//                     <TableColumn className="col-span-3 text-center bg-gray-800 text-white" key="asstID">Asset ID</TableColumn>
//         <TableColumn className="col-span-2 text-center bg-gray-800 text-white" key="asstName">Asset Name</TableColumn>
//         <TableColumn className=" col-span-2 text-center bg-gray-800 text-white" key="empId">Employee ID</TableColumn>
//         <TableColumn className=" col-span-2 text-center bg-gray-800 text-white" key="empName">Employee Name</TableColumn>
//         <TableColumn className=" col-span-3 text-center bg-gray-800 text-white" key="actions">Actions</TableColumn>
//         </TableHeader>
//         <TableBody items={items}>
//         {(item) => (
//           <TableRow key={item.asstID} className="col-span-2 text-center hover:bg-gray-800 hover:text-white">
//             {(columnKey) => (columnKey!="actions")?<TableCell>{getKeyValue(item, columnKey)}</TableCell>:
//             (<TableCell>
//               <div className="flex items-center justify-center gap-3 space-x-3">
//                 <FontAwesomeIcon className="cursor-pointer" icon={faPen} color="orange" size="lg"/>
//                 <FontAwesomeIcon className="cursor-pointer" icon={faTrash} color="red"/>
            
//               </div>
//             </TableCell>)
//             }
//           </TableRow>
//         )}
//       </TableBody>
//       </Table>
//     </div>
//   );

// } 

return (
  <div>
    
    <button onClick={()=>handleAddNew()} className="pl-3 mx-4  border-2 shadow-md rounded-md cursor-pointer sm:w-[30vw] md:w-[15vw] h-[6vh] mt-4">Add New
    <span><FontAwesomeIcon icon={faPlus} size="lg" className="mx-4"/></span></button>
    {
      isModalOpen ? ( <div className="mx-auto flex justify-center">
        <UpdateModal empdata={datajson} onclose={handleCloseModal}/>
        </div>
      ):
      (
        <></>
      )
    }
    {
      isAddNewOPen ? ( <div className="mx-auto flex justify-center">
        <Addnewmodal onclose={handleAddNew}/>
        </div>
      ):
      (
        <></>
      )
    }
  <Table 
    aria-label="Example table with client side pagination"
    className="mt-4 w-calc(100vw)"
    bottomContent={
      <div className="flex w-full justify-center">
        <Pagination
          isCompact
          showControls
          showShadow
          color="secondary"
          page={page}
          total={pages}
          onChange={(page) => setPage(page)}
        />
      </div>
    }
    classNames={{
      wrapper: "min-h-[222px]",
    }}
  >
    <TableHeader className="flex flex-col text-center">
      <TableColumn className="text-center bg-gray-800 text-white" key="asstID">Asset ID</TableColumn>
      <TableColumn className="text-center bg-gray-800 text-white" key="asstName">Asset Name</TableColumn>
      <TableColumn className="text-center bg-gray-800 text-white" key="empId">Employee ID</TableColumn>
      <TableColumn className="text-center bg-gray-800 text-white" key="empName">Employee Name</TableColumn>
      <TableColumn className="text-center bg-gray-800 text-white" key="actions">Actions</TableColumn>
    </TableHeader>
    <TableBody items={items}>
      {(item) => (
        <TableRow key={item.asstID} className=" text-center hover:bg-gray-800 hover:text-white">
          {(columnKey) => (columnKey!="actions")?<TableCell>{getKeyValue(item, columnKey)}</TableCell>:
          (<TableCell>
            <div className="flex items-center justify-center gap-3 space-x-3">
              <FontAwesomeIcon className="cursor-pointer" icon={faPen} color="orange" size="lg" onClick={()=>updatedjsondata(item)}/>
              <FontAwesomeIcon className="cursor-pointer" icon={faTrash} color="red"/>
            </div>
          </TableCell>)
          }
        </TableRow>
      )}
    </TableBody>
  </Table>
  </div>
);
}
