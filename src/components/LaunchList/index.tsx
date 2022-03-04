import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
  memo,
} from "react";
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import { useGetDogsQuery } from "../../generated/graphql";
import LaunchList, { OwnProps } from "./LaunchList";
import { QUERY_LAUNCH_LIST } from "./query";

interface Props extends OwnProps {
  breed: string | null;
}

const LaunchListContainer = (props: Props) => {
  const [fetchDogs, { data, loading, error }] = useLazyQuery(
    QUERY_LAUNCH_LIST,
    {
      onCompleted: ({ dogs }) => {
        !props.breed &&
          props.handleChange(dogs && dogs.length > 0 ? dogs[0]!.breed : "");
      },
    }
  );

  useEffect(() => {
    fetchDogs();
  }, [fetchDogs]);

  if (loading) return <div>Loading...</div>;

  if (error || !data) return <div>Error</div>;

  return <LaunchList data={data} {...props} />;
};

export default memo(LaunchListContainer);
