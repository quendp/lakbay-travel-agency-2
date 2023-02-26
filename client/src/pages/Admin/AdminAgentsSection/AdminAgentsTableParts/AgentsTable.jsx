import React, { useMemo, useState } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import MOCK_DATA_2 from "../../AdminDataCollection/AdminAgentsTableData/AdminAgentsMOCK_DATA .json";
import { agentsTableColumn } from "../../AdminTablesUIs/AdminTablesColumn";
import AdminGlobalFiltering from "../../AdminTablesUIs/AdminGlobalFiltering";
import AdminTableHeaderGroups from "../../AdminTablesUIs/AdminTableHeaderGroups";
import AdminTablesPagination from "../../AdminTablesUIs/AdminTablesPagination";
import AgentsTableModal from "./AgentsTableModal";

const AgentsTable = () => {
  const columns = useMemo(() => agentsTableColumn, []);
  const data = useMemo(() => MOCK_DATA_2, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <AdminGlobalFiltering filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()} className="admin-table">
        <AdminTableHeaderGroups headerGroups={headerGroups} isBooking={false} />
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} onClick={openModal}>
                {row.cells.map((cell) => {
                  let className = "";
                  if (cell.column.id === "current_tasks") {
                    if (cell.value === 0) {
                      className = "bg-success text-center";
                    } else if (cell.value >= 1 && cell.value <= 3) {
                      className = "bg-warning text-center";
                    } else if (cell.value >= 4 && cell.value <= 5) {
                      className = "agent-cell__orange text-center";
                    } else {
                      className = "bg-danger text-center";
                    }
                  }
                  return (
                    <td className={className} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <AdminTablesPagination
        nextPage={nextPage}
        previousPage={previousPage}
        canNextPage={canNextPage}
        canPreviousPage={canPreviousPage}
        pageIndex={pageIndex}
        pageOptions={pageOptions}
        gotoPage={gotoPage}
        pageCount={pageCount}
        pageSize={pageSize}
        setPageSize={setPageSize}
        pageSizeOptions={[5, 10]}
      />
      <AgentsTableModal showModal={showModal} closeModal={closeModal} />
    </>
  );
};

export default AgentsTable;
