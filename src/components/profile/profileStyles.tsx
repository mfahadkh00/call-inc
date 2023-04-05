import { Avatar, Box, TextField } from "@mui/material";
import {styled} from "@mui/system";

export const ProfileContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const ProfileAvatar = styled(Avatar)`
  width: 8rem;
  height: 8rem;
  margin-bottom: 2rem;
`;

export const ProfileField = styled(TextField)`
  margin-bottom: 1.5rem;
  max-width: 30rem;
`;