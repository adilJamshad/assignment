import React from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

import { postVolume } from "../../Api/api";
import MainPage from "../../pages/MainPage";

const Main = () => {
  const volumeMutation = useMutation((data) => postVolume(data), {
    onSuccess: () => {
      toast.success("Volume has been added");
    },
    onError: (error) => {
      toast.error(error.message || "An error has occured!");
    },
  });
  return <MainPage volumeMutation={volumeMutation} />;
};

export default Main;
