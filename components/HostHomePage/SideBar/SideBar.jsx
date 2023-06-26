"use client";
import styled from "@emotion/styled";
import DashboardIcon from "@mui/icons-material/Dashboard";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import { dashboardMenu } from "@utils/userdashborad";
import Link from "next/link";

const SideBar = () => {
  return (
    <Stack
      direction={{ sm: "column", md: "row" }}
      sx={{
        borderRight: { md: "1px solid gray" },
        height: { md: "100vh" },
      }}
    >
      <Stack
        direction="row"
        sx={{
          overflowY: "auto",
          height: { sx: "auto", md: "95%" },
          flexDirection: { md: "column" },
          p: 1,
        }}
      >
        {dashboardMenu.map((menu) => (
          <ListItem disablePadding key={menu.link}>
            <Link href={menu.link} prefetch={false}>
              <ListItemButton>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText
                  primary={menu.title}
                  sx={{
                    fontSize: "22px",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </Stack>
    </Stack>
  );
};

export default SideBar;
