import { gql } from '@apollo/client';

export const GET_POST_ON_USER_ID = gql`
  query GetPostsOnUserId($page: Int, $limit: Int, $id: ID!) {
    user(id: $id) {
      posts(options: { paginate: { page: $page, limit: $limit } }) {
        data {
          id
          title
          body
        }
      }
    }
  }
`;
