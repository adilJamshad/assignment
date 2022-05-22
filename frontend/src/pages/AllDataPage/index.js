import { Box, Typography } from "@material-ui/core";
import React from "react";
import CustomButton from "../../components/Button";
import DataTable from "../../components/DataTable";

const columns = [
  { field: "volume", headerName: "Observed Volume", width: 500 },
  {
    field: "Actual Volume",
    headerName: "Actual Volume",
    width: 300,
    valueGetter: () => "100",
  },
];

const AllDataPage = ({ queryAllData, isLoading }) => {
  const handleDownload = () => {
    if (queryAllData?.data?.volumes) {
      const element = document.createElement("a");

      const file = new Blob([
        `volumes= ${JSON.stringify(
          queryAllData?.data?.volumes.map((item) => item.volume).join(" ")
        )} \nmean=${queryAllData?.data?.mean} \n standard deviation=${
          queryAllData?.data?.standardDeviation
        } \nPercentage Accuracy=${
          queryAllData?.data?.accuracy
        }% \nPercentage Precision=${queryAllData?.data?.precision}% `,
      ]);
      element.href = URL.createObjectURL(file);
      element.download = "ExperimentalData.txt";
      document.body.appendChild(element);
      element.click();
    }
  };

  return (
    <Box width="100%" display="flex" justifyContent="center" my={5}>
      <Box
        bgcolor="#fff"
        width="70%"
        display="flex"
        flexDirection="column"
        p={7}
      >
        <Box width="100%" display="flex" justifyContent="space-between">
          <Typography variant="h6" style={{ width: "inherit" }}>
            All Data
          </Typography>
          <Box width="50%" display="flex" justifyContent="flex-end">
            <CustomButton
              title="Download File"
              variant="contained"
              onClick={() => handleDownload()}
            />
          </Box>
        </Box>
        <DataTable
          columns={columns}
          rows={queryAllData?.data?.volumes || []}
          loading={isLoading}
        />
        <Box width="100%" display="flex" justifyContent="space-between">
          <Typography>Mean: {queryAllData?.data?.mean}</Typography>
          <Typography>
            Standard Dev: {queryAllData?.data?.standardDeviation}
          </Typography>
        </Box>
        <Box width="100%" display="flex" justifyContent="space-between">
          <Typography>Accuracy: {queryAllData?.data?.accuracy} %</Typography>
          <Typography>Percision: {queryAllData?.data?.precision} %</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AllDataPage;
