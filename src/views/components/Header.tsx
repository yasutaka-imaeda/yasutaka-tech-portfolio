import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { Path } from "../../Routes";

const Header: React.FC = () => {
  return (
    <Box className={styles.root} sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={styles.bar}>
        <Toolbar>
          {/* <img className={styles.icon} src={headericon} /> */}
          <Button
            className={styles.topIcon}
            component={Link}
            to={Path.home}
          ></Button>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Button
            color="inherit"
            component={Link}
            to={Path.about}
            className={styles.btn}
          >
            About
          </Button>
          <Button
            color="inherit"
            component={Link}
            to={Path.skills}
            className={styles.btn}
          >
            Skill
          </Button>
          <Button
            color="inherit"
            component={Link}
            to={Path.works}
            className={styles.btn}
          >
            Works
          </Button>
          <Button
            color="inherit"
            component={Link}
            to={Path.contacts}
            className={styles.btn}
          >
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
