import { gql } from "@apollo/client";

export const QUERY_LAUNCH_PROFILE = gql`
  query DogProfile($breed: String!) {
    dog(breed: $breed) {
      id
      breed
      subbreeds
      displayImage
      images {
        url
        id
      }
    }
  }
`;
