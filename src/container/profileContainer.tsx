import {
  updateProfile,
  fetchProfile,
} from "../state/ducks/profile/profileActions";
import { connect } from "react-redux";
import Profile from "../components/profile";
import { IApplicationState } from "../state/store";

const mapDispatchToProps = {
  updateProfile,
  fetchProfile,
};
const mapStateToProps = (state: IApplicationState) => ({
  profile:state.profile
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
