export interface Users {
  id: string;
  name: string;
  email: string;
}
export interface Posts {
  id: string;
  title: string;
  body: string;
}
export type GetPostsResponse = {
  user: {
    posts: {
      data: {
        id: string;
        title: string;
        body: string;
      }[];
    };
  };
};
export type GetUserResponse = {
  users: {
    data: {
      id: string;
      name: string;
      email: string;
    }[];
  };
};
