interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "awef",
  content: "awd",
};
// 추출된 타입 : { title : string; content : string }

type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};

const noTitlePost: Omit<Post, "title"> = {
  // title 생략
  content: "",
  tags: [],
  thumbnailURL: "",
};

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

//Record

type Thumbnail = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
};

type Thumbnail2 = Record<"large" | "medium" | "small", { url: string }>;
