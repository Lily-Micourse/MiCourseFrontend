import { HttpMethod, HttpService } from "@/apis/HttpService";
import { CourseDetail } from "@/models/course/CourseDetail";
import { CourseListItem } from "@/models/course/Course";
import { CourseQueryType, CourseType } from "@/models/course/CourseQuery";
import { Comment } from "@/models/course/CourseComment";

interface CourseListQuery {
  type?: CourseType;
  query?: string;
  queryType?: CourseQueryType;
  page: number;
  pageSize: number;
}

export class CourseService extends HttpService {
  async getCourseDetail(courseId: string) {
    return this.fetch<CourseDetail>({
      path: "/course",
      params: { courseId },
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

  async getCoursesByType(type: CourseType,
                         page: number,
                         pageSize: number = 15,
                         ): Promise<CourseListItem[]> {
    return this.getCourses({ type, page, pageSize });
  }

  async getCoursesByQuery(queryType: CourseQueryType,
                          query: string, page: number, pageSize: number = 15): Promise<CourseListItem[]> {
    return this.getCourses({ queryType, query, page, pageSize });
  }

  private async getCourses(query: CourseListQuery): Promise<CourseListItem[]> {
    return this.fetch<CourseListItem[]>({
      path: "course",
      method: HttpMethod.GET,
      params: query,
    });
  }
}
