// 객체 프로퍼티의 타입 추출

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
    age: 22,
  },
};

function printAuthorInfo(author: { id: number; name: string; age: number }) {
  console.log(`${author.id} - ${author.name}`);
}

//객체를 이용한 인덱스드 엑세스 타입
function printAuthorInfo2(author: Post["author"]) {
  //author 가 인덱스에 해당
  console.log(`${author.id} - ${author.name}`);
}

// 배열 요소의 타입 추출

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

// PostList 배열 타입에서 하나의 요소의 타입만 뽑기
const Post2: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
    age: 22,
  },
};

// 튜플의 요소 타입 추출

type Tup = [number, string, boolean];

type Tup0 = Tup[0];
//number

type Tup1 = Tup[1];
//string

type Tup2 = Tup[2];
//boolean

type Tup3 = Tup[number];
// number | string | boolean
