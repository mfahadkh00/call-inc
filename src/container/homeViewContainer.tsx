import React from 'react'
import { connect } from "react-redux";
import HomeView from "../components/homeView";
import { fetchCalls } from "../state/ducks/calls/callActions";



const mapDispatchToProps = {
  fetchCalls
};

export default connect(null, mapDispatchToProps)(HomeView);

