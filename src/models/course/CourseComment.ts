export enum CommentVoting {
  AGREE = 1,
  NEUTRAL = 0,
  DISAGREE = -1,
}

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
}

export interface CommentVotings {
  comments: { [commentId: string]: CommentVoting };
  subComments: { [subcommentId: string]: CommentVoting };
}
