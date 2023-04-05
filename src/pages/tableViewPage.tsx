import React, { useEffect, useState } from "react";
import Dropdown from "../components/dropdown";
import { Box, Typography } from "@mui/material";
import CallTable from "../components/table";
import { CallResponse, CallStateRaw } from "../state/types";
import TablePagination from "../components/table/tablePagination";
import ModalContainer from "../container/modalContainer";
interface IProps {
  tableData: CallResponse;
  archiveCall: (id: string) => Promise<void>;
  fetchCalls: (currentPage: number) => Promise<void>;
  updateData: (data: CallStateRaw[]) => Promise<void>;
}

const TableViewPage: React.FC<IProps> = ({
  tableData,
  archiveCall,
  fetchCalls,
  updateData,
}) => {
  const [status, setStatus] = useState<boolean | string>("All");
  const [data, setData] = useState<CallStateRaw[]>([]);
  const [visible, setVisible] = useState<boolean>(false);
  const [item, setItem] = useState<CallStateRaw | undefined>();

  useEffect(() => {
    let sortedData = [...tableData.nodes];
    if (status !== "All") {
      sortedData = sortedData.filter((item) => item.is_archived === status);
    }
    sortedData.sort(
      (a, b) =>
        new Date(a.created_at).valueOf() - new Date(b.created_at).valueOf()
    );

    setData(sortedData);
  }, [status, tableData]);

  const fetchMoreData = (page: number) => {
    fetchCalls(page);
  };

  return (
    <Box sx={{ mx: "24px" }}>
      <Typography
        variant="h5"
        sx={{ textAlign: "left", marginBottom: "1rem", fontWeight:"bold" }}
      >
        Call Log Dashboard 
      </Typography>
      <Dropdown status={status} setStatus={setStatus} />
      <CallTable
        tableData={data as CallStateRaw[]}
        setVisible={setVisible}
        setItem={setItem}
        archiveCall={(id) => archiveCall(id)}
      />

      <ModalContainer
        visible={visible}
        setVisible={setVisible}
        data={item as CallStateRaw}
        onClose={() => setVisible(false)}
      />
      <TablePagination
        totalCount={tableData.totalCount}
        hasNextPage={tableData.hasNextPage}
        fetchMoreData={(page: number) => fetchMoreData(page)}
      />
    </Box>
  );
};

export default TableViewPage;
