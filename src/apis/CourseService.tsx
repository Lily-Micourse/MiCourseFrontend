import { HttpMethod, HttpService } from "@/apis/HttpService";
import CourseDetailPage from "@/pages/coursedetail/CourseDetailPage";
import { CourseDetail } from "@/models/course/CourseDetail";
import { CourseListItem } from "@/models/course/Course";

interface CourseListQuery {
  type?: "hot" | "recommand" | "latest";
  query?: string;
  queryType?: "string" | "credit" | "department" | "category";
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

  async getCoursesByType(type: "hot" | "recommand" | "latest", page: number, pageSize: number = 15): Promise<CourseListItem[]> {
    return this.getCourses({ type, page, pageSize });
  }

  async getCourseByQuery(queryType: "string" | "credit" | "department" | "category",
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
