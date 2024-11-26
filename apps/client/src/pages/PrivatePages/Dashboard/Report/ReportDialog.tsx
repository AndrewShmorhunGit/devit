import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Tabs,
  Tab,
  TabsProps,
  IconButton,
  DialogTitle,
} from "@mui/material";
import { Pagination } from "./Pagination/Pagination";
import { TableView } from "./TableView/TableView";
import { ChartView } from "./ChartView/ChartView";
import styled from "styled-components/macro";
import CloseIcon from "@mui/icons-material/Close";
import { t } from "i18next";

// Styled component for customizing the Tabs
const StyledTabs = styled((props: TabsProps) => <Tabs {...props} />)(
  ({ theme }) => ({
    paddingLeft: 1,
    "& .MuiTabs-flexContainer": {
      gap: theme.spacing(0.5), // Set gap between tabs
    },
    "& .MuiTabs-indicator": {
      display: "none", // Hide the tab indicator
    },
  })
);

// Styled component for customizing each Tab
const StyledTab = styled(Tab)(({ theme }) => ({
  fontStyle: "Roboto",
  fontSize: "18px !important",
  borderRadius: "8px 8px 0 0", // Rounded top corners
  padding: theme.spacing(1.5, 2),

  "&.Mui-selected": {
    backgroundColor: theme.palette.primary.main, // Background color for the active tab
    color: `${theme.palette.primary.contrastText} !important`, // Text color for active tab
    boxShadow: theme.shadows[3], // Add light shadow for active tab
    borderBottom: "none", // Remove bottom border for active tab
  },
  "&:not(.Mui-selected)": {
    border: `1px solid ${theme.palette.divider}`, // Border for inactive tabs
    borderBottom: "none", // Remove bottom border
    color: theme.palette.text.primary, // Text color for inactive tabs
  },
  "&:hover": {
    color: theme.palette.primary.dark, // Darken text color on hover
  },
}));

// Styled component for customizing the Dialog
const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    width: "100%",
    height: "100%",
    maxWidth: "1200px",
    maxHeight: "90vh",
    borderRadius: "12px",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      height: "90%",
      borderRadius: "8px", // Adjust styling for small screen sizes
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "100%",
      borderRadius: "0", // Adjust styling for extra small screen sizes
    },
  },
}));

// ReportDialog component that renders the dialog with tabs and content
export const ReportDialog: React.FC<{ open: boolean; onClose: () => void }> = ({
  open,
  onClose,
}) => {
  // State for handling selected tab and page number for pagination
  const [tabValue, setTabValue] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const rowsPerPage = 15;

  return (
    <StyledDialog open={open} onClose={onClose}>
      {/* Dialog title with close icon */}
      <DialogTitle sx={{ position: "relative" }}>
        <IconButton
          color="inherit"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }} // Position the close button at top-right
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      {/* Tabs for switching between Table and Chart views */}
      <StyledTabs
        value={tabValue}
        onChange={(_, newValue) => setTabValue(newValue)} // Update selected tab
      >
        <StyledTab
          label={t("general.table")}
          sx={{ textTransform: "none !important" }}
        />
        <StyledTab
          label={t("general.chart")}
          sx={{ textTransform: "none !important" }}
        />
      </StyledTabs>

      {/* Dialog content - displays content based on the selected tab */}
      <DialogContent>
        {tabValue === 0 ? (
          <TableView page={page} rowsPerPage={rowsPerPage} />
        ) : (
          <ChartView />
        )}
      </DialogContent>

      {/* Pagination (only for Table view) */}
      {tabValue === 0 && (
        <Pagination
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={
            (_: any, newPage: React.SetStateAction<number>) => setPage(newPage) // Update page number when pagination changes
          }
        />
      )}
    </StyledDialog>
  );
};
