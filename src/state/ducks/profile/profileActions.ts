import { ProfileRaw } from "../../types";
import { updateProfileApi, fetchProfileApi } from "./profileApi";
import {
  getProfileSuccess,
  profileSlice,
  setError,
  setLoading,
  updateProfileSuccess,
} from "./profileSlice";

export const fetchProfile = (id:string) => async (dispatch: any) => {
  dispatch(setLoading(true));
  try {
    const response = await fetchProfileApi(id);
    dispatch(getProfileSuccess(response.data.updatedProfile));
  } catch (error: any) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const updateProfile =
  (updatedProfile: ProfileRaw, id:string) =>
  async (dispatch: any) => {
    dispatch(setLoading(true));
    try {
      await updateProfileApi(updatedProfile, id);
      dispatch(updateProfileSuccess(updatedProfile));
    } catch (error: any) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

export default profileSlice.reducer;
