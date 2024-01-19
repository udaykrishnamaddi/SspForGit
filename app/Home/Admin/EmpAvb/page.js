"use client";
import React from "react";
import dynamic from "next/dynamic";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
} from "@nextui-org/react";
import { employeeLeaves1 } from "./data1";
import { employeeLeaves } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import allemp from "../../../../public/EmpAvb.png";
import { Image } from "@nextui-org/react";

const page = () => {
  const [filter, setFilter] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 5;

  const pages = Math.ceil(employeeLeaves.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return employeeLeaves.slice(start, end);
  }, [page, employeeLeaves]);

  const togglefilter = () => {
    setFilter(!filter);
  };

  return (
    <div>
      <div className="relative">
        <button
          className="pl-3 mx-4 bg-blue-600 border-2 shadow-md rounded-md cursor-pointer sm:w-[30vw] md:w-[15vw] h-[6vh] mt-4"
          onClick={(e) => togglefilter(e)}
        >
          Filter
        </button>
        {filter && (
          <form className="absolute z-20 top-15 left-10 rounded-xl sm:w-[200px] md:w-[370px] bg-gray-800 text-white">
            <div className="flex sm:flex-col md:flex-row">
              <div className="m-3">
                <label htmlFor="startDate" className="mr-4">
                  Start Date :{" "}
                </label>
                <input className="rounded-sm text-black" type="date" id="startDate" />
              </div>
              <div className="m-3">
                <label htmlFor="endDate" className="mr-4">
                  End Date :{" "}
                </label>
                <input className="rounded-sm text-black" type="date" id="endDate" />
              </div>
            </div>
            <button className="m-2 p-2 rounded-md shadow-sm bg-blue-500 text-white">Done</button>
          </form>
        )}
      </div>

      {employeeLeaves.length != 0 ? (
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
            <TableColumn
              className="text-center bg-gray-800 text-white"
              key="empName"
            >
              Emp Name
            </TableColumn>
            <TableColumn
              className="text-center bg-gray-800 text-white"
              key="leaveDate"
            >
              Leave Date
            </TableColumn>
          </TableHeader>

          <TableBody items={items}>
            {(item) => (
              <TableRow
                key={item.id}
                className=" text-center hover:bg-gray-800 hover:text-white"
              >
                {(columnKey) =>
                  columnKey != "actions" ? (
                    <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                  ) : (
                    <TableCell>
                      <div className="flex items-center justify-center gap-3 space-x-3">
                        <FontAwesomeIcon
                          className="cursor-pointer"
                          icon={faPen}
                          color="orange"
                          size="lg"
                        />
                        <FontAwesomeIcon
                          className="cursor-pointer"
                          icon={faTrash}
                          color="red"
                        />
                      </div>
                    </TableCell>
                  )
                }
              </TableRow>
            )}
          </TableBody>
        </Table>
      ) : (
        console.log("hi")
        // <Image src={allemp} width={100} height={100}/>
      )}
    </div>
  );
};

export default page;
