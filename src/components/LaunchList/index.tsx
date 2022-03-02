import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { useLaunchListQuery } from "../../generated/graphql";
import LaunchList from "./LaunchList";

const LaunchListContainer = () => {
  const { data, loading, error } = useLaunchListQuery();

  if (loading) return <div>Loading...</div>;

  if (error || !data) return <div>Error</div>;

  return <LaunchList data={data} />;
};

export default LaunchListContainer;
