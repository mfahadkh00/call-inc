import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import styled from "@emotion/styled";
import logo from "../../assets/new-logo.jpg";
import UserMenu from "./userMenu";
const Logo = styled("img")`
  max-height: 90px;
`;

interface NavbarProps {
  userLogout: () => Promise<void>;
  fetchProfile: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  userLogout,
  fetchProfile,
}) => {
  return (
    <AppBar
      position="static"
      color="default"
      sx={{
        backgroundColor: "white",
      }}
    >
      <Toolbar>
        <Logo src={logo} alt="Logo" />
        <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: "bolder" }}>
          Call Inc.
        </Typography>
        <Typography variant="h6" sx={{ flexGrow: 1 }} />
        <UserMenu fetchProfile={fetchProfile} userLogout={userLogout} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
