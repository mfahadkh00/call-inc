import axios from "axios";
import { PROFILE_ENDPOINT } from "../../../utils/constants";
import { ProfileRaw } from "../../types";

export const fetchProfileApi = async (id:string) => {
  return await axios.get(`${PROFILE_ENDPOINT}/profile/${id}`);
};

export const updateProfileApi = async (updatedProfile: ProfileRaw, id:string) => {
  return await axios.put(`${PROFILE_ENDPOINT}/profile/${id}`, { updatedProfile });
};
