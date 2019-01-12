import { HttpMethod, HttpService } from "@/apis/HttpService";
import { CourseDetail } from "@/models/course/CourseDetail";
import { CourseListItem } from "@/models/course/Course";
import { CourseQueryType, CourseType } from "@/models/course/CourseQuery";
import { Comment, CommentVotings } from "@/models/course/CourseComment";
import { CourseFeedback } from "@/models/course/CourseFeedback";
import { CommentFeedbackAction, CommentFeedback } from "@/models/course/CommentFeedback";

interface CourseListQuery {
  type?: CourseType;
  query?: string;
  queryType?: CourseQueryType;
  page: number;
  pageSize: number;
}
export interface CourseListResponse {
  count: number,
  data: CourseListItem[]
}


export class CourseService extends HttpService {
  async getCourseDetail(courseId: string) {
    return this.fetch<CourseDetail>({
      path: "/course",
      params: { courseId },
    });
  }

  async feedbackCourse(courseId: string, feedback: CourseFeedback) {
    return this.fetch<void>({
      path: "/course/feedback",
      params: { courseId },
      body: feedback,
    });
  }

  async getCourseComments(courseId: string) {
    return this.fetch<Comment[]>({
      path: "/course/comment",
      params: { courseId },
    });
  }

  async comment(courseId: string, content: string, term: string) {
    await this.fetch({
      path: "/course/comment",
      method: HttpMethod.POST,
      body: { content, term },
      params: { courseId },
    });
  }

  async getAllTerms(courseId: string) {
    return this.fetch<string[]>({
      path: "/course/term",
      params: { courseId },
    });
  }

  async courseHasFeedback(courseId: string) {
    const res = await this.fetch<{ feedback: boolean}>({
      path: "/course/feedback",
      params: { courseId },
    });

    return res.feedback;
  }

  async getCommentVotings(courseId: string) {
    return this.fetch<CommentVotings>({
      path: "/course/comment/voting",
      params: { courseId },
    });
  }

  async getCoursesByType(type: CourseType,
    page: number,
    pageSize: number = 15,
  ): Promise<CourseListResponse> {
    return this.getCourses({ type, page, pageSize });
  }

  async getCoursesByQuery(queryType: CourseQueryType,
    query: string, page: number, pageSize: number = 15): Promise<CourseListResponse> {
    return this.getCourses({ queryType, query, page, pageSize });
  }

  async feedbackComment(feedback: CommentFeedback, commentId: string, subCommentId?: string): Promise<"success" | "conflict"> {
    try {
      await this.fetch({
        path: "/course/comment/feedback",
        method: HttpMethod.POST,
        params: { commentId, subCommentId },
        body: feedback,
      });
      return "success";
    } catch (e) {
      if (e.statusCode === 409) {
        return "conflict";
      } else {
        throw e;
      }
    }

  }

  private async getCourses(query: CourseListQuery): Promise<CourseListResponse> {
    const res = this.fetch<CourseListItem[]>({
      path: "course",
      method: HttpMethod.GET,
      params: query,
    });
    return {count:1,data:[]};
  }
}
