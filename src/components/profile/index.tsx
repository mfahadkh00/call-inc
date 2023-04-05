import React, { useEffect, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import profileImage from "../../assets/new-logo.jpg";
import { ProfileAvatar, ProfileContainer, ProfileField } from "./profileStyles";
import { ProfileRaw, ProfileState } from "../../state/types";
import { PROFILE_ID } from "../../utils/constants";
import NavBarContainer from "../../container/navBarContainer";

interface ProfilelProps {
  updateProfile: (data: ProfileRaw, id: string) => void;
  fetchProfile: (id: string) => void;
  profile: ProfileState;
}

const Profile: React.FC<ProfilelProps> = ({
  updateProfile,
  fetchProfile,
  profile,
}) => {
  const [formData, setFormData] = useState<ProfileRaw>({
    name: "",
    email: "",
    phone: "",
    address: "",
    github: "",
  });
  useEffect(() => {
    fetchProfile(PROFILE_ID);
  }, []);

  useEffect(() => {
    setFormData(profile);
  }, [profile.isLoading]);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateProfile(formData, PROFILE_ID);
  };

  return (
    <>
      <NavBarContainer />
      <form onSubmit={handleSubmit}>
        <ProfileContainer>
          <ProfileAvatar alt="Profile Image" src={profileImage} />
          <ProfileField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            variant="outlined"
            fullWidth
          />
          <ProfileField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            variant="outlined"
            fullWidth
          />
          <ProfileField
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            variant="outlined"
            fullWidth
          />
          <ProfileField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            variant="outlined"
            fullWidth
          />
          <ProfileField
            label="GitHub URL"
            name="githubUrl"
            value={formData.github}
            onChange={handleInputChange}
            variant="outlined"
            fullWidth
          />
          {profile.isLoading ? (
            <CircularProgress />
          ) : (
            <Button
              variant="contained"
              type="submit"
              sx={{ backgroundColor: "#f0316e" }}
            >
              Save Changes
            </Button>
          )}
        </ProfileContainer>
      </form>
    </>
  );
};

export default Profile;
