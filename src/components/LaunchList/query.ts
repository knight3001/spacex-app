import { gql } from "@apollo/client";

export const QUERY_LAUNCH_LIST = gql`
  query GetDogs {
    dogs {
      id
      breed
      displayImage
      subbreeds
    }
  }
`;
