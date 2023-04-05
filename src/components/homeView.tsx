import React, { useEffect } from "react";
import TableViewContainer from "../container/tableViewContainer";

import NavBarContainer from "../container/navBarContainer";

interface IProps {
  fetchCalls: (currentPage: number) => Promise<void>;
}

const HomeView: React.FC<IProps> = ({ fetchCalls }) => {
  useEffect(() => {
    fetchCalls(0);
  }, []);

  return (
    <>
      <NavBarContainer />
      <TableViewContainer />
    </>
  );
};

export default HomeView;
