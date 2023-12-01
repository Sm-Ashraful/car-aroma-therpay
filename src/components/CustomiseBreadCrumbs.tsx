"use client";
import React from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { usePathname } from "next/navigation";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: "black",
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

export default function CustomizedBreadcrumbs() {
  const pathname = usePathname();
  const paths = pathname.split("/");

  function handleClick(event: any) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  return (
    <div className=" bg-white" role="presentation" onClick={handleClick}>
      <Breadcrumbs maxItems={3} aria-label="breadcrumb" className="py-3">
        <StyledBreadcrumb
          component="a"
          href="#"
          label="Home"
          icon={<HomeIcon />}
          className="text-sm md:text-lg"
        />
        {paths
          .filter((path) => path.trim() !== "") // Remove paths that are empty or contain only whitespace
          .map((path, idx) => (
            <StyledBreadcrumb
              key={idx}
              component="a"
              href="#"
              label={path}
              className="text-sm md:text-lg"
            />
          ))}
      </Breadcrumbs>
    </div>
  );
}
