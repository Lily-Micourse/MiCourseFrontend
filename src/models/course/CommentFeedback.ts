export enum CommentFeedbackAction {
  AGREE = "agree",
  DISAGREE = "disagree",
  CANCEL_VOTE = "cancelVote",
  REPLY = "reply",
}

export interface CommentFeedback {
  action: CommentFeedbackAction;
  content?: string;
}
