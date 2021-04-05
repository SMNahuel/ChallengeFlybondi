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

export const SEARCH_ORIGIN = gql`
query{
    searchOrigin 
  }
`;

export const SEARCH_DESTINATION= gql`
    {  
      searchDestination(origin: $origin, date: $date)
    }
`;