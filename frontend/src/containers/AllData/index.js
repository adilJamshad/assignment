import React from "react";
import { useQuery } from "react-query";
import { getVolumes } from "../../Api/api";
import AllDataPage from "../../pages/AllDataPage";

const AllData = () => {
  const { data: queryAllData, isLoading } = useQuery("volumes", getVolumes);
  return <AllDataPage queryAllData={queryAllData} isLoading={isLoading} />;
};

export default AllData;
