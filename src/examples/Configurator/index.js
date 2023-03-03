/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect } from "react";

// @mui material components
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// @mui icons
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from "@mui/icons-material/Facebook";

// Soft UI Dashboard React components
import SoftBox from "../../components/SoftBox";
import SoftTypography from "../../components/SoftTypography";
import SoftButton from "../../components/SoftButton";

// Custom styles for the Configurator
import ConfiguratorRoot from "../../examples/Configurator/ConfiguratorRoot";

// Soft UI Dashboard React context
import {
  useSoftUIController,
  setOpenConfigurator,
  setTransparentSidenav,
  setFixedNavbar,
  setSidenavColor,
} from "../../context";

function Configurator() {
  const [controller, dispatch] = useSoftUIController();
  const { openConfigurator, transparentSidenav, fixedNavbar, sidenavColor } = controller;
  const [disabled, setDisabled] = useState(false);
  const sidenavColors = ["primary", "dark", "info", "success", "warning", "error"];

  // Use the useEffect hook to change the button state for the sidenav type based on window size.
  useEffect(() => {
    // A function that sets the disabled state of the buttons for the sidenav type.
    function handleDisabled() {
      return window.innerWidth > 1200 ? setDisabled(false) : setDisabled(true);
    }

    // The event listener that's calling the handleDisabled function when resizing the window.
    window.addEventListener("resize", handleDisabled);

    // Call the handleDisabled function to set the state with the initial value.
    handleDisabled();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleDisabled);
  }, []);

  const handleCloseConfigurator = () => setOpenConfigurator(dispatch, false);
  const handleTransparentSidenav = () => setTransparentSidenav(dispatch, true);
  const handleWhiteSidenav = () => setTransparentSidenav(dispatch, false);
  const handleFixedNavbar = () => setFixedNavbar(dispatch, !fixedNavbar);

  // sidenav type buttons styles
  const sidenavTypeButtonsStyles = ({
    functions: { pxToRem },
    boxShadows: { buttonBoxShadow },
  }) => ({
    height: pxToRem(42),
    boxShadow: buttonBoxShadow.main,

    "&:hover, &:focus": {
      opacity: 1,
    },
  });

  return (
    <ConfiguratorRoot variant="permanent" ownerState={{ openConfigurator }}>
      <SoftBox
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        pt={3}
        pb={0.8}
        px={3}
      >
        <SoftBox>
          <SoftTypography variant="h5">Faculty Of Engineering</SoftTypography>
        </SoftBox>

        <Icon
          sx={({ typography: { size, fontWeightBold }, palette: { dark } }) => ({
            fontSize: `${20} !important`,
            fontWeight: `${fontWeightBold} !important`,
            stroke: dark.main,
            strokeWidth: "2px",
            cursor: "pointer",
            mt: 2,
          })}
          onClick={handleCloseConfigurator}
        >
          close
        </Icon>
      </SoftBox>

      <Divider />

      <SoftBox pt={1.25} pb={3} px={3}>
        <SoftBox>
          <SoftTypography variant="h6">Special Thanks...</SoftTypography>

             
        </SoftBox>

        <Divider />


        <SoftBox mt={3} textAlign="center">
          <SoftBox mb={0.5}>
            <SoftTypography variant="h6">Thank you for sharing!</SoftTypography>
          </SoftBox>

          <SoftBox display="flex" justifyContent="center">
            <SoftBox mr={1.5}>
              <SoftButton
                component={Link}
                href="#"
                target="_blank"
                rel="noreferrer"
                color="dark"
              >
                <TwitterIcon />
                &nbsp; Tweet
              </SoftButton>
            </SoftBox>
            <SoftButton
              component={Link}
              href="#"
              target="_blank"
              rel="noreferrer"
              color="dark"
            >
              <FacebookIcon />
              &nbsp; Share
            </SoftButton>
          </SoftBox>
        </SoftBox>
      </SoftBox>


      <Divider />

      <SoftBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      color="text"
      fontSize={18}
      px={1.5}
    >
      &copy; {new Date().getFullYear()}, made with
      <SoftBox fontSize={20} color="text" mb={-0.5} mx={0.25}>
        <Icon fontSize="inherit">
          favorite
        </Icon>
      </SoftBox>
      by
      <Link href="https://laughing-darwin-c668f3.netlify.app/" target="_blank">
        <SoftTypography variant="button" fontWeight="medium">
          &nbsp;Jessy Bandya&nbsp;
        </SoftTypography>
      </Link>
      for a better future.
    </SoftBox>
    <SoftBox
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexWrap="wrap"
    color="text"
    fontSize={18}
    px={1.5}
  >
  
  <div style={{display:'flex', alignItems:'center'}}>
  <SoftBox fontSize={20} color="text" mb={-0.5} mx={1.5}>
  <Link href="https://twitter.com/jessybandya" target="__blank">
  <TwitterIcon color="inherit" fontSize="inherit"/>
  </Link>
</SoftBox>
<SoftBox fontSize={20} color="text" mb={-0.5} mx={1.5}>
<Link href="https://www.instagram.com/jessybandya/" target="__blank">
<InstagramIcon color="inherit" fontSize="inherit"/>
</Link>
</SoftBox>
<SoftBox fontSize={20} color="text" mb={-0.5} mx={1.5}>
<Link href="https://www.linkedin.com/in/jessy-bandya-7934a01b4/" target="__blank">
<LinkedInIcon color="inherit" fontSize="inherit"/>
</Link>
</SoftBox>
<SoftBox fontSize={20} color="text" mb={-0.5} mx={1.5}>
<Link href="https://github.com/jessybandya" target="__blank">
<GitHubIcon color="inherit" fontSize="inherit"/>
</Link>
</SoftBox>
  </div>
  </SoftBox>
    </ConfiguratorRoot>
  );
}

export default Configurator;
