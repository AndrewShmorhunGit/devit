import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
  Paper,
  TableHead,
  TableSortLabel,
} from "@mui/material";
import styled from "styled-components/macro";
import { useAppSelector } from "@/store/store.hooks";
import { useTranslation } from "react-i18next";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

export const TableView: React.FC<{
  page: number;
  rowsPerPage: number;
}> = ({ page, rowsPerPage }) => {
  const { t } = useTranslation();
  const log = useAppSelector((state) => state.requests.log);
  const [sortColumn, setSortColumn] = useState<
    "index" | "startTime" | "endTime" | "duration" | null
  >(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(
    null
  );

  const start = page * rowsPerPage;

  const sortedLog = [...log].sort((a, b) => {
    if (!sortColumn || !sortDirection) return 0;

    const valueA =
      sortColumn === "duration"
        ? (a.endTime || 0) - (a.startTime || 0)
        : a[sortColumn] || 0;
    const valueB =
      sortColumn === "duration"
        ? (b.endTime || 0) - (b.startTime || 0)
        : b[sortColumn] || 0;

    if (sortDirection === "asc") {
      return valueA > valueB ? 1 : -1;
    }
    return valueA < valueB ? 1 : -1;
  });

  const paginatedLog = sortedLog.slice(start, start + rowsPerPage);

  const handleSort = (
    column: "index" | "startTime" | "endTime" | "duration"
  ) => {
    if (sortColumn === column) {
      setSortDirection(
        sortDirection === "asc"
          ? "desc"
          : sortDirection === "desc"
          ? null
          : "asc"
      );
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader size="small">
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <TableSortLabel
                active={sortColumn === "index"}
                direction={sortDirection || undefined}
                onClick={() => handleSort("index")}
              >
                {t("general.index")}
              </TableSortLabel>
            </StyledTableCell>
            <StyledTableCell>
              <TableSortLabel
                active={sortColumn === "startTime"}
                direction={sortDirection || undefined}
                onClick={() => handleSort("startTime")}
              >
                {t("general.start")}
              </TableSortLabel>
            </StyledTableCell>
            <StyledTableCell>
              <TableSortLabel
                active={sortColumn === "endTime"}
                direction={sortDirection || undefined}
                onClick={() => handleSort("endTime")}
              >
                {t("general.end")}
              </TableSortLabel>
            </StyledTableCell>
            <StyledTableCell>
              <TableSortLabel
                active={sortColumn === "duration"}
                direction={sortDirection || undefined}
                onClick={() => handleSort("duration")}
              >
                {t("general.duration")}
              </TableSortLabel>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedLog.map((item) => (
            <TableRow key={item.index}>
              <TableCell>{item.index}</TableCell>
              <TableCell>{item.startTime || "n/a"}</TableCell>
              <TableCell>{item.endTime || "n/a"}</TableCell>
              <TableCell>
                {item.endTime && item.startTime
                  ? `${item.endTime - item.startTime} ms`
                  : "In progress"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
