import Store from "@/stores/Store";
import { CourseService } from "@/apis/CourseService";
import { useApiService } from "@/apis";
import { Comment, CommentVoting, SubComment } from "@/models/course/CourseComment";
import { CommentFeedbackAction } from "@/models/course/CommentFeedback";
import produce from "immer";

export interface ICommentStore {
  comments: Comment[];
  loading: boolean;
}

const courseService = useApiService(CourseService);

function getComment(comments: Comment[], commentId: string, subCommentId?: string) {
  const comment = comments.find((x) => x.id === commentId)!;
  if (subCommentId) {
    return comment.comments!.find((x) => x.id === subCommentId)!;
  }
  return comment;
}

function restoreToNeutral(comment: Comment | SubComment) {
  if (comment.voting === CommentVoting.AGREE) {
    comment.agree--;
  } else if (comment.voting === CommentVoting.DISAGREE) {
    comment.disagree--;
  }
  comment.voting = CommentVoting.NEUTRAL;
}

export class CommentStore extends Store<ICommentStore> {

  state = {
    comments: [] as Comment[],
    loading: false,
  };

  constructor(public courseId: string) {
    super();

  }

  fetchComments = async () => {
    this.setState({ loading: true });

    const comments = await courseService.getCourseComments(this.courseId);

    this.setState({
      loading: false,
      comments,
    });

  }

  getComment(commentId: string, subCommentId?: string): Comment | SubComment {
    return getComment(this.state.comments, commentId, subCommentId);
  }

  agree = async (commentId: string, subCommentId?: string) => {
    await courseService.feedbackComment({
      action: CommentFeedbackAction.AGREE,
    }, commentId, subCommentId);

    this.setState(produce((draft) => {
      const comment = getComment(draft!.comments!, commentId, subCommentId);

      if (comment.voting === CommentVoting.AGREE) {
        restoreToNeutral(comment);
      } else {
        restoreToNeutral(comment);
        comment.voting = CommentVoting.AGREE;
        comment.agree++;
      }

    }));

  }

  disagree = async (commentId: string, subCommentId?: string) => {
    await courseService.feedbackComment({
      action: CommentFeedbackAction.DISAGREE,
    }, commentId, subCommentId);

    this.setState(produce((draft) => {
      const comment = getComment(draft!.comments!, commentId, subCommentId);

      if (comment.voting === CommentVoting.DISAGREE) {
        restoreToNeutral(comment);
      } else {
        restoreToNeutral(comment);
        comment.voting = CommentVoting.DISAGREE;
        comment.disagree++;
      }
    }));

  }

}
