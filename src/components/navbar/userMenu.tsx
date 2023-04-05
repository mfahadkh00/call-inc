import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { PROFILE_ID } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

interface UserMenuProps {
  fetchProfile: (id: string) => void;
  userLogout: () => Promise<void>;
}

const UserMenu: React.FC<UserMenuProps> = ({ fetchProfile, userLogout }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton color="inherit" onClick={handleMenuOpen}>
        <MenuIcon fontSize="large" />
      </IconButton>
      <Menu
        id="customized-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "customized-menu",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem
          sx={{
            minWidth: "200px",
            "&:hover": {
              backgroundColor: "#f0316e",
              color: "white",
            },
          }}
          onClick={() => {
            handleMenuClose();
            navigate("/");
          }}
        >
          Home
        </MenuItem>
        <MenuItem
          sx={{
            minWidth: "200px",
            "&:hover": {
              backgroundColor: "#f0316e",
              color: "white",
            },
          }}
          onClick={() => {
            handleMenuClose();
            fetchProfile(PROFILE_ID);
            navigate("/profile");
          }}
        >
          Profile
        </MenuItem>
        <MenuItem
          sx={{
            minWidth: "200px",
            "&:hover": {
              backgroundColor: "#f0316e",
              color: "white",
            },
          }}
          onClick={() => {
            handleMenuClose();
            userLogout();
            navigate("/login");
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
