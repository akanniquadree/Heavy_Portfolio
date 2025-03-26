import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

const drawerWidth = 260;

export default function Navbar(props) {
  const { sectionRefs } = props;
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } // Adjusted for better accuracy
    );

    // Observe each section
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs]);
  const handleClick = (item) => {
    if (sectionRefs[item]?.current) {
      sectionRefs[item].current.scrollIntoView({ behavior: "smooth" });
      setActiveSection(item); // Set active section immediately
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsScrollingDown(currentScrollPos > prevScrollPos);
      setPrevScrollPos(currentScrollPos);
      setIsAtTop(currentScrollPos === 0); // True when at top
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const container =
    props.window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <a
          to="#"
          style={{ display: "flex", gap: "10px", alignItems: "center" }}
        >
          <img
            src="/Images/intro-bg.jpg"
            alt=""
            style={{
              objectFit: "cover",
              borderRadius: "50%",
              height: "50px",
              width: "50px",
            }}
          />
          <span style={{ fontWeight: 700 }}>Habeeb</span>
        </a>
      </Typography>
      <Divider />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {Object.keys(sectionRefs).map((item, index) => (
          <ListItemButton
            key={index}
            onClick={() => handleClick(item)}
            sx={{ width: "100%" }}
          >
            <ListItemText
              primary={
                <Typography
                  sx={{ color: activeSection === item ? "#ff014f" : "inherit" }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Typography>
              }
            />
          </ListItemButton>
        ))}
        {/* <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link to={''} style={{ color: "red", textAlign:'center' }}>
                <ListItemText primary='Dash Board' sx={{ textAlign: "center" }}/>
              </Link>
            </ListItemButton>
          </ListItem> */}
      </List>
    </Box>
  );
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          elevation={isAtTop ? 0 : 4}
          sx={{
            backgroundColor: isAtTop ? "transparent" : "white",
            color: isAtTop ? "white" : "black",
            transition:
              "background-color 0.9s ease-in-out, box-shadow 0.9s ease-in-out",
            transitionDelay: isAtTop ? "0s" : "0.9s",
            // display: isScrollingDown ? "none" : "flex",
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" component="div">
              <a
                to="#"
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <img
                  src="/Images/intro-bg.jpg"
                  alt=""
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                    height: "50px",
                    width: "50px",
                  }}
                />
                <span style={{ fontWeight: 700 }}>Habeeb</span>
              </a>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
              {Object.keys(sectionRefs).map((item, index) => (
                <Button
                  key={index}
                  sx={{
                    color: activeSection === item ? "#ff014f" : "inherit",
                    "&:hover": {
                      color: "#ff014f", // Change background color on hover
                      boxShadow: " #ff014f", // Add shadow effect on hover
                      transition:
                        "background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    },
                  }}
                  className="butHover butActive"
                  onClick={() => {
                    handleClick(item);
                    console.log(activeSection, item);
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Button>
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                fontSize="large"
                onClick={handleDrawerToggle}
                sx={{ display: { sm: "block", md: "none" } }}
              >
                <MenuIcon htmlColor="inherit" />
              </IconButton>
              {/* <a href=''></a><Facebook />
              <a href=''></a><Instagram /> */}
              <a href='https://www.linkedin.com/in/habeeb-akanni-874434101/'><LinkedIn /></a>
              <a href='https://github.com/akannih'><GitHub /></a>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {/* The Mobile View Menu */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      {/* <Toolbar /> */}
    </>
  );
}
