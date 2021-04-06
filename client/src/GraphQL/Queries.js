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

export const SEARCH_TRAVEL= gql`
  query 
    searchTravel($origin: String!, $date: String!, $price: Float!){  
      searchTravel(origin: $origin, date: $date, price: $price){
        origin
        availability
        destination
        price
        data
      }
    }
`;