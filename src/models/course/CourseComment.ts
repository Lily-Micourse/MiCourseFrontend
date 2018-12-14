export interface Comment {
  id: string;
  userId: string;
  nickname: string;
  avatar: string;
  isNjuer: boolean;
  content: string;
  time: string;
  term: string;
  comments: SubComment[];
  agree: number;
  disagree: number;
  voting: -1 | 0 | 1;
}

export interface SubComment {
  id: string;
  replyToCommentId: string;
  userId: string;
  nickname: string;
  avatar: string;
  isNjuer: boolean;
  content: string;
  time: string;
  subcomments: SubComment[];
  agree: number;
  disagree: number;
  voting: -1 | 0 | 1;
}
