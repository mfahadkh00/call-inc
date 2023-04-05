import {
  updateProfile,
  fetchProfile,
} from "../state/ducks/profile/profileActions";
import { userLogout } from "../state/ducks/auth/authActions";

import { connect } from "react-redux";
import { IApplicationState } from "../state/store";
import Navbar from "../components/navbar";

const mapDispatchToProps = {
  fetchProfile,
  userLogout,
};
const mapStateToProps = (state: IApplicationState) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
