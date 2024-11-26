import React, { useState } from "react";
import { Pagination as MuiPagination, Input, IconButton } from "@mui/material";
import { FlexBox } from "@/styles/styled/boxes"; // Custom FlexBox component for layout
import styled, { useTheme } from "styled-components/macro"; // Styled-components and theming
import { useAppSelector } from "@/store/store.hooks"; // Hook for accessing Redux state
import { useTranslation } from "react-i18next";

// Styled input component for pagination
const StyledInput = styled(Input)({
  fontSize: "12px",
  padding: "2px",
});

// Props for the Pagination component
export const Pagination: React.FC<{
  page: number; // Current page (0-based index)
  rowsPerPage: number; // Number of rows displayed per page
  onPageChange: (event: unknown, newPage: number) => void; // Callback to handle page changes
}> = ({ page, rowsPerPage, onPageChange }) => {
  const { t } = useTranslation();
  const [inputPage, setInputPage] = useState(""); // State for page input
  const theme = useTheme(); // Access theme properties
  const log = useAppSelector((state) => state.requests.log); // Retrieve data log from Redux store
  const count = log.length; // Total number of items
  const totalPages = Math.ceil(count / rowsPerPage); // Calculate the total number of pages

  // Handle changes in the page input field
  const handlePageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value; // Extract value from input
    const numericValue = Number(value);
    if (numericValue >= 0 || value === "") {
      setInputPage(value); // Update input field state
    }
  };

  // Handle submission of the page input field
  const handlePageInputSubmit = () => {
    const newPage = parseInt(inputPage, 10); // Parse input as integer
    if (!isNaN(newPage) && newPage >= 1 && newPage <= totalPages) {
      onPageChange(null, newPage - 1); // Trigger page change (0-based index)
    }
    setInputPage(""); // Clear the input field
  };

  return (
    <FlexBox
      sx={{ flexDirection: "column", alignItems: "center", gap: 2, pb: 2 }} // Vertical layout with spacing
    >
      {/* Display current page information */}
      <FlexBox
        sx={{
          gap: 2,
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          pl: 4,
          pr: 4,
        }}
      >
        <span>
          {page * rowsPerPage + 1} – {Math.min((page + 1) * rowsPerPage, count)}{" "}
          {t("general.of")} {count}
        </span>

        {/* Input field and button for quick page navigation */}
        <FlexBox sx={{ gap: 2 }} width={"196px"}>
          <StyledInput
            type="number"
            value={inputPage} // Controlled input value
            onChange={handlePageInputChange} // Update state on input change
            placeholder={t("general.page")} // Placeholder text
          />
          <FlexBox>
            <IconButton
              onClick={handlePageInputSubmit} // Trigger page change
              sx={{
                fontSize: "16px",
                background: theme.palette.primary.main,
                borderRadius: "4px",
              }}
            >
              {t("general.go")}
            </IconButton>
          </FlexBox>
        </FlexBox>
      </FlexBox>

      {/* Pagination component from MUI */}
      <MuiPagination
        count={totalPages} // Total pages
        page={page + 1} // Convert 0-based to 1-based index
        onChange={(event, newPage) => onPageChange(event, newPage - 1)} // Convert back to 0-based index
        color="primary" // Primary color for pagination
        size="large" // Large size for better visibility
      />
    </FlexBox>
  );
};
