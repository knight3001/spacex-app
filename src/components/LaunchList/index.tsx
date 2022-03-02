import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { useLaunchListQuery } from "../../generated/graphql";
import LaunchList, { OwnProps } from "./LaunchList";

const LaunchListContainer = (props: OwnProps) => {
  const { data, loading, error } = useLaunchListQuery();

  if (loading) return <div>Loading...</div>;

  if (error || !data) return <div>Error</div>;

  return <LaunchList data={data} {...props} />;
};

export default LaunchListContainer;
