import UploadIcon from "@mui/icons-material/Upload";
import { format } from "date-fns";

import {
  Button,
  List,
  ListItem,
  ListItemText,
  styled,
  Typography,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import {
  useSortBy,
  useTable,
  useGlobalFilter,
  TableOptions,
  Column,
  useRowSelect,
} from "react-table";

import { tableData, tableColumn } from "../../../fakeData";
import { TableDataType } from "./type";

import { CheckBoxComponent } from "./CheckBoxComponent";

const StyledWrapper = styled("div")(({ theme }) => ({
  height: "1200px",
  backgroundColor: "white",
  marginTop: theme.spacing(3),

  ".title": {
    ".MuiListItemText-primary": {
      fontWeight: "bolder",
    },
  },

  ".import-button": {
    color: theme.palette.grey[700],
    textTransform: "capitalize",
    fontWeight: "600",
  },

  table: {
    // marginLeft: theme.spacing(1),
    borderCollapse: "collapse",
    width: "100%",
    fontSize: "0.7rem",

    th: {
      position: "relative",
      textAlign: "left",
      padding: theme.spacing(2),
      backgroundColor: theme.palette.grey[200],
      color: theme.palette.grey[700],
    },

    td: {
      borderBottom: "1px solid #ddd",
      padding: theme.spacing(2),
    },

    tr: {
      ":hover": { backgroundColor: theme.palette.grey[100] },
    },
  },
}));

function Firmware() {
  // table data
  const data: TableDataType[] = useMemo(() => tableData, []);

  // table column
  const columnLRPadding = 14;
  const columns: Column<TableDataType>[] = useMemo(
    () => [
      {
        Header: "Version",
        accessor: "version",
      },
      {
        Header: "File Size",
        accessor: "fileSize",
      },
      {
        Header: "Qty of inventory",
        accessor: "qtyOfInventory",
      },
      {
        Header: "Project type in use",
        accessor: "ProjectTypeInUse",
      },
      {
        Header: "Upload time",
        accessor: "uploadTime",

        // Cell:({value})=>{return format(new Date(value), 'dd/MM/yyyy')}
      },
    ],
    []
  );

  // table option
  const option: TableOptions<TableDataType> = { data, columns };

  // useTable
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    selectedFlatRows,
    getToggleAllRowsSelectedProps,
  } = useTable(option, useGlobalFilter, useSortBy, useRowSelect,);
  // Component return
  return (
    <StyledWrapper>
      <List>
        <ListItem>
          <ListItemText primary="Firmware" className="title" />
          <Button className="import-button" startIcon={<UploadIcon />} sx={{}}>
            Import
          </Button>
        </ListItem>
      </List>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps({
                    style: {
                      paddingLeft: columnLRPadding,
                      paddingRight: columnLRPadding,
                    },
                  })}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps({
                        style: {
                          paddingLeft: columnLRPadding,
                          paddingRight: columnLRPadding,
                        },
                      })}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </StyledWrapper>
  );
}

export default Firmware;
