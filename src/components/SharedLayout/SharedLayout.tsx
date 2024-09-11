import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Toolbar from "@mui/material/Toolbar";
import styles from "./SharedLayout.styled";

import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import FixedLoader from "../FixedLoader";

const SharedLayout = () => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box sx={styles.wrapper}>
        <Header open={open} toggleDrawer={toggleDrawer} />

        <Sidebar open={open} toggleDrawer={toggleDrawer} />

        <Box component="main" sx={styles.main}>
          <Toolbar />

          <Box sx={{ ...styles.container }}>
            <Suspense fallback={<FixedLoader isLoading={true} />}>
              <Outlet />
            </Suspense>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SharedLayout;
