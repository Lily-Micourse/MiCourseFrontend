import Store from "@/stores/Store";
import { CommentVotings, Comment, CommentVoting, SubComment } from "@/models/course/CourseComment";
import { useApiService } from "@/apis";
import { CourseService } from "@/apis/CourseService";
import { CommentFeedbackAction } from "@/models/course/CommentFeedback";
import produce from "immer";

interface ICommentStore {
  courseId: string;
  comments: Comment[];
  commentsLoading: boolean;
  votings: CommentVotings;
  votingsLoading: boolean;
}

function getComment(comments: Comment[], commentId: string, subCommentId?: string) {
  const comment = comments.find((x) => x.id === commentId)!;
  if (subCommentId) {
    return comment.comments!.find((x) => x.id === subCommentId)!;
  }
  return comment;
}

function setVoting(votings: CommentVotings, commentId: string, subCommentId: string | undefined, to: CommentVoting) {
  if (subCommentId) {
    votings.subComments[subCommentId] = to;
  } else {
    votings.comments[commentId] = to;
  }
}

const courseService = useApiService(CourseService);

export default class CommentStore extends Store<ICommentStore> {

  constructor(courseId: string) {
    super();
    this.state = {
      courseId,
      comments: [],
      commentsLoading: true,
      votings: { comments: {}, subComments: {} },
      votingsLoading: true,
    };
  }

  fetchAll = () => {
    this.fetchComments();
  }

  fetchComments = async () => {
    this.setState({
      commentsLoading: true,
      votingsLoading: true,
    });
    const [comments, votings] = await Promise.all([
      courseService.getCourseComments(this.state.courseId),
      courseService.getCommentVotings(this.state.courseId),
    ]);
    this.setState({
      commentsLoading: false,
      comments,
      votingsLoading: false,
      votings,
    });
  }

  getComment(commentId: string, subCommentId?: string): Comment | SubComment {
    return getComment(this.state.comments, commentId, subCommentId);
  }

  getVoting(commentId: string, subCommentId?: string): CommentVoting {
    if (!subCommentId) {
      return this.state.votings.comments[commentId];
    } else {
      return this.state.votings.subComments[subCommentId];
    }
  }

  agree = async (commentId: string, subCommentId?: string) => {
    await courseService.feedbackComment({
      action: CommentFeedbackAction.AGREE,
    }, commentId, subCommentId);

    this.setState(produce((draft) => {
      const comment = getComment(draft!.comments!, commentId, subCommentId);

      const voting = this.getVoting(commentId, subCommentId);
      if (voting === CommentVoting.AGREE) {
        comment.agree--;
        setVoting(draft!.votings!, commentId, subCommentId, CommentVoting.NEUTRAL);
      } else if (voting === CommentVoting.DISAGREE) {
        comment.disagree--;
        comment.agree++;
        setVoting(draft!.votings!, commentId, subCommentId, CommentVoting.AGREE);
      } else {
        comment.agree++;
        setVoting(draft!.votings!, commentId, subCommentId, CommentVoting.AGREE);
      }

    }));

  }

  disagree = async (commentId: string, subCommentId?: string) => {
    await courseService.feedbackComment({
      action: CommentFeedbackAction.DISAGREE,
    }, commentId, subCommentId);

    this.setState(produce((draft) => {
      const comment = getComment(draft!.comments!, commentId, subCommentId);

      const voting = this.getVoting(commentId, subCommentId);
      if (voting === CommentVoting.DISAGREE) {
        comment.disagree--;
        setVoting(draft!.votings!, commentId, subCommentId, CommentVoting.NEUTRAL);
      } else if (voting === CommentVoting.AGREE) {
        comment.agree--;
        comment.disagree++;
        setVoting(draft!.votings!, commentId, subCommentId, CommentVoting.DISAGREE);
      } else {
        comment.disagree++;
        setVoting(draft!.votings!, commentId, subCommentId, CommentVoting.DISAGREE);
      }

    }));

  }
}
