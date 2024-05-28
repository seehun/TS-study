//partial

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const post1: Partial<Post> = {
  title: "awef",
  content: "awef",
};

type Partial<T> = {
  [key in keyof T]?: T[key];
};

// required

const post2: Required<Post> = {
  title: "awef",
  content: "awef",
  tags: ["awef"],
  thumbnailURL: "wef",
};

type Required<T> = {
  [key in keyof T]-?: T[key];
};

//Readonly

const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글입니다.",
  tags: [],
  content: "",
};

// readonlyPost.title='wef'   -> X

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};
