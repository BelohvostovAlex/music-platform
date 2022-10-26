import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { allActionCreators } from "../redux/allActionCreators";

export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(
    () => bindActionCreators(allActionCreators, dispatch),
    [dispatch]
  );
};
