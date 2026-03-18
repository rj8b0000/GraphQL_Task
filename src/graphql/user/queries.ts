import { gql } from '@apollo/client';

export const GET_ALL_USERS = gql`
  query GetUsers($page: Int, $limit: Int) {
    users(options: { paginate: { page: $page, limit: $limit } }) {
      data {
        id
        name
        email
      }
      meta {
        totalCount
      }
    }
  }
`;
