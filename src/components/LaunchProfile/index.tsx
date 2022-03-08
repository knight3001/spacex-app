import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { useDogProfileQuery } from "../../generated/graphql";
import {
  NetworkStatus,
  useQuery,
  useLazyQuery,
  useReactiveVar,
} from "@apollo/client";
import LaunchProfile from "./LaunchProfile";
import { cartItemsVar } from "../../cache";

interface OwnProps {
  breed: string;
}

const LaunchProfileContainer = (props: OwnProps) => {
  const { data, error, loading, refetch, networkStatus } = useDogProfileQuery({
    variables: { breed: props.breed },
    notifyOnNetworkStatusChange: true,
  });

  const cartItems = useReactiveVar(cartItemsVar);

  useEffect(() => {
    refetch({ breed: props.breed });
  }, [props.breed, refetch]);

  if (networkStatus === NetworkStatus.refetch) return <>Refetching!</>;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <div>Select a flight from the panel</div>;
  }

  return (
    <>
      <button
        onClick={() =>
          refetch({
            breed: "affenpinscher", // Always refetches a dalmatian instead of original breed
          })
        }
      >
        Refetch!
      </button>
      <div>
        <button onClick={() => cartItemsVar([...cartItemsVar(), props.breed])}>
          Add to Cart
        </button>
      </div>
      {cartItems.map((productId) => (
        <div key={productId}>{productId}</div>
      ))}
      <LaunchProfile data={data} />
    </>
  );
};

export default LaunchProfileContainer;
