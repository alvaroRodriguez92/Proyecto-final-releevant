import { useState, useEffect } from "react";
import { useUserContext } from "../../context/UserContext";
//import { Outlet, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Toolbar,
  List,
  Typography,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Menu,
  Tooltip,
  MenuItem,
  Link,
  Modal,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { DrawerHeader } from "./components/DrawerHeader";
import { AppBar } from "../ui/AppBar";
import { Drawer } from "../ui/Drawer";
import { drawerMenu } from "../../const/drawerMenu";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import ToolsIcon from "../../assets/toolsicon.avif";
import { DRAWER_WIDTH } from "../../const/drawerWidth";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
//import { userMenu } from "../../const/userMenu";
//import Link from "../ui/Link";
//import { styleModal } from "../../theme/theme";
//import { useAuthContext } from "../../contexts/AuthContext";

const styleLogin = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function MiniDrawer() {
  const { user, logout } = useUserContext(false);
  const [activar, setActivar] = useState();
  const theme = useTheme();
  const [titleModal, setTitleModal] = useState("");
  const [open, setOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [openLogin, setOpenLogin] = useState(false);
  const [typeMenu, setTypeMenu] = useState(0);
  let logo = "";

  //const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);

  useEffect(() => {
    console.log(user);
    if (!user) {
      setActivar(false);
      logo = ToolsIcon;
    } else {
      setActivar(true);
      logo = `http://localhost:3000/logo/${user.LOGO_NOMBRE}`;
    }
  }, [user]);

  function handleOpenLogin(abrir, title, type) {
    setOpenLogin(abrir);
    setTitleModal(title);
    setTypeMenu(type);
  }
  // const { logout } = useAuthContext();
  // const location = useLocation();

  function handleDrawer() {
    setOpen((currentState) => !currentState);
  }

  function handleCloseUserMenu() {
    setAnchorElUser(null);
  }

  function closeSession() {
    setAnchorElUser(null);
    logout();
    //logout();
  }

  function handleOpenUserMenu(event) {
    setAnchorElUser(event.currentTarget);
  }
  console.log(user);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        open={open}
        drawerWidth={DRAWER_WIDTH}
        sx={{ color: "#000002", backgroundColor: "transparent" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Typography variant="h6" noWrap component="div">
              Encuentra lo que necesitas
            </Typography>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="user avatar" src={logo} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <IconButton
                    disable={!activar}
                    aria-label="Login"
                    sx={{ color: "#000000" }}
                    onClick={() => handleOpenLogin(true, "Inicia sesion", 0)}
                  >
                    <LoginIcon /> <span> Iniciar Sesion</span>
                  </IconButton>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <IconButton
                    disable={!activar}
                    aria-label="Login"
                    sx={{ color: "#000000" }}
                    onClick={() => handleOpenLogin(true, "Registro", 1)}
                  >
                    <HowToRegIcon /> <span> Registro</span>
                  </IconButton>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <IconButton
                    disable={activar}
                    aria-label="Perfil"
                    sx={{ color: "#000000" }}
                  >
                    <LoginIcon /> <span> Perfil</span>
                  </IconButton>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <IconButton
                    disable={activar}
                    aria-label="Logout"
                    sx={{ color: "#000000" }}
                    onClick={closeSession}
                  >
                    <LoginIcon /> <span> Logout</span>
                  </IconButton>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} drawerWidth={DRAWER_WIDTH}>
        <DrawerHeader theme={theme}>
          <IconButton onClick={handleDrawer}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <List disablePadding>
          {drawerMenu.map(({ label, icon, path }) => {
            const Icon = icon;
            return (
              <ListItem
                key={label}
                disablePadding
                sx={{
                  display: "block",
                  backgroundColor:
                    location.pathname === path ? "#11065a" : null,
                }}
                onClick={open && handleDrawer}
              >
                <Link to={path}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <Icon />
                    </ListItemIcon>
                    <ListItemText
                      primary={label}
                      sx={{ opacity: open ? 1 : 0, color: "#000000" }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 7 }}>
        {/* <Outlet /> */}
      </Box>
      <Modal
        open={openLogin}
        onClose={handleCloseLogin}
        aria-labelledby="modal-login-title"
        aria-describedby="modal-login-description"
        aria-loquesea="modal-login-loquesea"
      >
        <Box sx={styleLogin}>
          <Typography
            id="modal-login-title"
            variant="h6"
            component="h2"
            color="#000000"
          >
            {titleModal}
          </Typography>

          <Box id="modal-login-description">
            {typeMenu === 0 ? <LoginForm /> : <RegisterForm />}
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
