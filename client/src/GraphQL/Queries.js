import { gql } from "@apollo/client";

export const GET_TRAVELS = gql`
query {
    travels {
      id
      destination
      origin
      availability
      data
      price
    } 
  }
`;

export const GET_ORIGIN = gql`
query {
  travels {
    destination
  } 
  }
`;