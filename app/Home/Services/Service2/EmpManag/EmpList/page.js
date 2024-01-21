"use client";

import React, {useRef} from 'react';
import { DownloadTableExcel } from 'react-export-table-to-excel';
import { useDownloadExcel } from 'react-export-table-to-excel';


import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
} from "@nextui-org/react";
import { PlusIcon } from "./PlusIcon";
import { VerticalDotsIcon } from "./VerticalDotsIcon";
import { SearchIcon } from "./SearchIcon";
import { ChevronDownIcon } from "./ChevronDownIcon";
import { columns, users, statusOptions } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { capitalize } from "./utils";
import Addnewmodal from "./Addnewmodal";
import Updatemodal from "./UpdateModal";

const statusColorMap = {
  active: "success",
  notactive: "danger",
};

const INITIAL_VISIBLE_COLUMNS = ["id","firstname","lastname", "country", "cityoffice", "role","actions"];

export default function App() {
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(8);
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "startdate",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...users];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.firstname.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.status)
      );
    }

    return filteredUsers;
  }, [users, filterValue, statusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      
      // case "role":
      //   return (
      //     <div className="flex flex-col">
      //       <p className="text-bold text-small capitalize">{cellValue}</p>
      //       <p className="text-bold text-tiny capitalize text-default-400">
      //         {user.team}
      //       </p>
      //     </div>
      //   );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex justify-end items-center gap-2">
            
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faPen}
              color="orange"
              size="lg"
              onClick={() => handleUpd(user)}
            />
          </div>
        );
      default:
        return (
          <div className='min-w-28'>
            {cellValue}
          </div>
        );
    }
  }, []);

  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = React.useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);


  
  const tableRef = useRef(null);
// const handleExport = async () => {
//   // Create a new workbook
//   const workbook = new ExcelJS.Workbook();

//   // Add a worksheet to the workbook
//   const worksheet = workbook.addWorksheet('Sheet1');

//   // Set the column headers in the worksheet
//   headerColumns.forEach((column, index) => {
//     worksheet.getColumn(index + 1).header = column.name;
//     worksheet.getColumn(index + 1).width = 15; // Adjust the column width as needed
//   });

//   // Add data rows to the worksheet
//   filteredItems.forEach((item, rowIndex) => {
//     headerColumns.forEach((column, columnIndex) => {
//       worksheet.getCell(rowIndex + 2, columnIndex + 1).value = item[column.uid];
//     });
//   });

//   // Save the workbook as an Excel file
//   const buffer = await workbook.xlsx.writeBuffer();
//   const excelBlob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
//   saveAs(excelBlob, 'exportedData.xlsx');
// };

  

  
const { onDownload } = useDownloadExcel({
  currentTableRef: tableRef.current,
  filename: 'employees_data',
  sheet: 'employee_table',
  onExportEnd: (excelBlob) => {
    saveAs(excelBlob, 'exportedData.xlsx');
  }
});


  const [isAddNewOPen, setIsAddNewOpen] = React.useState(false);
  const handleAddNew = () => {
    setupdopen(false);
    setIsAddNewOpen(!isAddNewOPen);
  };

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4 bg-white">
        <div className="flex justify-between gap-3 items-center bg-white">
          <Input
            isClearable
            className="w-full mt-2 ml-2 sm:max-w-[44%] shadow-md rounded-md"
            placeholder="Search by name..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />

          <div className="flex gap-3 mr-7">
            
          <Dropdown>
            <DropdownTrigger className="hidden sm:flex">
              <Button
                className='bg-blue-300 p-2'
                endContent={<ChevronDownIcon />}
                variant="flat"
              >
                Filter
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label="Filter Options"
              className="bg-gray-800 text-white"
              closeOnSelect={false}
              // Add three dropdown items with internal dropdowns
            >
              <DropdownItem>
                {/* First Dropdown Item with internal dropdowns */}
                <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  variant="flat"
                >
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                className="text-gray-800 bg-white"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>

              </DropdownItem>
              <DropdownItem>
                {/* Second Dropdown Item with internal dropdowns */}
                
                <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  variant="flat"
                >
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                className="text-gray-800 bg-white"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>

              </DropdownItem>
              {/* <DropdownItem>
                


                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      endContent={<ChevronDownIcon className="text-small" />}
                      variant="flat"
                    >
                      Internal Dropdown 3
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    disallowEmptySelection
                    aria-label="Internal Dropdown 3 Options"
                    className="text-gray-800 bg-white"
                    closeOnSelect={false}
                    // Add options for Internal Dropdown 3
                  >
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                  </DropdownMenu>
                </Dropdown>


              </DropdownItem> */}

            </DropdownMenu>
          </Dropdown>


            {/* <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  variant="flat"
                >
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                className="bg-gray-800 text-white"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown> */}

            {/* <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  variant="flat"
                >
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                className="bg-gray-800 text-white"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown> */}

            

            <Button
              color="primary"
              className="bg-blue-300 ml-3 p-2 rounded-sm shadow-sm"
              endContent={<PlusIcon />}
              onClick={onDownload}
            >
              Export
            </Button>
            
          </div>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onRowsPerPageChange,
    users.length,
    onSearchChange,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="relative flex">
        <div className="py-2 px-2 w-[50%] flex justify-end">
          
          <Pagination
            isCompact
            showControls
            showShadow
            width="100px"
            color="primary"
            page={page}
            total={pages}
            onChange={setPage}
          />
        </div>
        <div className="hidden w-[47%] sm:flex justify-end gap-2 mr-10">
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onPreviousPage}
          >
            Previous
          </Button>
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onNextPage}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  

  const [data, setData] = React.useState();
  const [updopen, setupdopen] = React.useState(false);
  const updOpen = () => {
    setIsAddNewOpen(false);
    setupdopen(true);
  };
  const updclose = () => {
    setupdopen(false);
  };
  const handleUpd = (dt) => {
    console.log(dt, "i am di heere");
    setData(dt);
    updOpen();
  };

  return (
    <div>
      {updopen ? (
        <div className="mx-auto flex justify-center">
          <Updatemodal empdata={data} onclose={updclose} />
        </div>
      ) : isAddNewOPen ? (
        <div className="mx-auto flex justify-center">
          <Addnewmodal onclose={handleAddNew} />
        </div>
      ) : (
        <div>
          <Table
            ref={tableRef}
            aria-label="Example table with custom cells, pagination and sorting"
            isHeaderSticky
            bottomContent={bottomContent}
            bottomContentPlacement="outside"
            classNames={{
              wrapper: "max-h-[400px]",
            }}
            //   selectedKeys={selectedKeys}
            //   selectionMode="multiple"
            sortDescriptor={sortDescriptor}
            topContent={topContent}
            topContentPlacement="outside"
            //   onSelectionChange={setSelectedKeys}
            onSortChange={setSortDescriptor}
          >
            <TableHeader columns={headerColumns}>
              {(column) => (
                <TableColumn
                  className="bg-gray-800 z-5 text-white cursor-pointer"
                  key={column.uid}
                  align={column.uid === "actions" ? "end" : "start"}
                  allowsSorting={column.sortable}
                >
                  {column.name}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody
              emptyContent={"No users found"}
              items={sortedItems}
              className="bg-blue-800"
            >
              {(item) => (
                <TableRow key={item.id} className="">
                  {(columnKey) => (
                    <TableCell>{renderCell(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
          <div className="w-[100%]  flex justify-end">
            <Button
              color="primary"
              className="mr-10 mt-2 bg-blue-300 p-2 rounded-sm shadow-sm"
              endContent={<PlusIcon />}
              onClick={() => handleAddNew()}
            >
              Add New
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}


