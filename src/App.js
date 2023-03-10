import { useState, useEffect, useMemo } from "react";

import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

import SoftBox from "./components/SoftBox";

import Sidenav from "./examples/Sidenav";
import Configurator from "./examples/Configurator";

import theme from "./assets/theme";
import themeRTL from "./assets/theme/theme-rtl";

import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import routesAuth from "./routes";
import routesNoAuth from "./routes1";
import { useSelector, useDispatch } from 'react-redux'


// EBESA React contexts
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "./context";

// Images
import brand from "./assets/images/logo-ct.png";
import { auth } from "./firebase";
import SignUp from "./layouts/authentication/sign-up";
import Admin from "./pages/Admin";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Profile from "./pages/Profile";
import Album from "./pages/Gallery/Album";
import Event from './pages/Events/Event'

export default function App() {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();
  const authId = useSelector((state) => state.authId);

  // Cache for the rtl
  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  const configsButton = (
    <SoftBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.5rem"
      height="3.5rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="default" color="inherit">
        settings
      </Icon>
    </SoftBox>
  );

  return  (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {authId ?(
        <>
        {layout === "dashboard" && (
          <>
            <Sidenav
              color={sidenavColor}
              brand={"UoN-Logo.jpg"}
              brandName="FACULTY OF ENGINEERING"
              routes={routesAuth}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
              style={{zIndex:1}}
            />
            <Configurator />
            {configsButton}
          </>
        )}
        <Routes>
          {getRoutes(routesAuth)} 
          <Route path="*" element={<Navigate to="/home" />} />
          <Route exact path="/authentication/sign-up" element={<SignUp />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/article/:bool/:articleID/:ownerID" element={<Article />} />
          <Route exact path="/profile/:bool/:ownerID" element={<Profile />} />
          <Route exact path="/album/:albumId/:uid" element={<Album />} />
          <Route exact path="/event/:bool/:id" element={<Event />} />
        </Routes>
        </>
      ):(
        <>
        {layout === "dashboard" && (
          <>
            <Sidenav
              color={sidenavColor}
              brand={"UoN-Logo.jpg"}
              brandName="FACULTY OF ENGINEERING"
              routes={routesNoAuth}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
              style={{zIndex:1}}
            />
            <Configurator />
            {configsButton}
          </>
        )}
        <Routes>
          {getRoutes(routesNoAuth)}
          <Route path="*" element={<Navigate to="/home" />} />
          <Route exact path="/authentication/sign-up" element={<SignUp />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/profile/:bool/:ownerID" element={<Profile />} />
          <Route exact path="/article/:bool/:articleID/:ownerID" element={<Article />} />
          <Route exact path="/album/:albumId/:uid" element={<Album />} />
          <Route exact path="/event/:bool/:id" element={<Event />} />
        </Routes>
        </>
      )}
    </ThemeProvider>
  );
}
