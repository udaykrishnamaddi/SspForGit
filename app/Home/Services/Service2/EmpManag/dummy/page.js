'use client'
import React from "react";
import dynamic from 'next/dynamic';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue} from "@nextui-org/react";
import {employees} from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

import Updatemodal from "./UpdateModal";
import Addnewmodal from "./Addnewmodal";

export default function page() {
  // const UWS= useWindowSize()  
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 5;

  const pages = Math.ceil(employees.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return employees.slice(start, end); 
  }, [page, employees]);
  
  const [isAddNewOPen,setIsAddNewOpen]=React.useState(false);
  const handleAddNew = ()=>{
    setupdopen(false)
    setIsAddNewOpen(!isAddNewOPen)
  }

  
  const [data,setData]=React.useState();
  const [updopen,setupdopen]=React.useState(false);
  const updOpen = ()=>{
    setIsAddNewOpen(false)
    setupdopen(true);
  }
  const updclose = () =>{
    setupdopen(false);
  }
  const handleUpd = (dt)=>{
    console.log(dt,"i am di heere");
    setData(dt)
    updOpen();
  }

  
  return (
    <div>
      
      <button onClick={()=>handleAddNew()} className="pl-3 mx-4 border border-2 shadow-md rounded-md cursor-pointer sm:w-[30vw] md:w-[15vw] h-[6vh] mt-4">Add New
      <span><FontAwesomeIcon icon={faPlus} size="lg" className="mx-4"/></span></button>
      {
        updopen? (
          <div className="mx-auto flex justify-center">
            <Updatemodal empdata={data} onclose={updclose}/>
          </div>
        ):(
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
        <TableColumn className="text-center bg-gray-800 text-white" key="empId">Emp ID</TableColumn>
        <TableColumn className="text-center bg-gray-800 text-white" key="name">Emp Name</TableColumn>
        <TableColumn className="text-center bg-gray-800 text-white" key="phoneno">Phone No</TableColumn>
        <TableColumn className="text-center bg-gray-800 text-white" key="email">Email</TableColumn>
        <TableColumn className="text-center bg-gray-800 text-white" key="mana1Id">Manager1Id</TableColumn>
        <TableColumn className="text-center bg-gray-800 text-white" key="mana2Id">Manager2Id</TableColumn>
        <TableColumn className="text-center bg-gray-800 text-white" key="actions">Actions</TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.empId} className=" text-center hover:bg-gray-800 hover:text-white">
            {(columnKey) => (columnKey!="actions")?<TableCell>{getKeyValue(item, columnKey)}</TableCell>:
            (<TableCell>
              <div className="flex items-center justify-center gap-3 space-x-3">
                <FontAwesomeIcon className="cursor-pointer" icon={faPen} color="orange" size="lg" onClick={()=>handleUpd(item)}/>
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
