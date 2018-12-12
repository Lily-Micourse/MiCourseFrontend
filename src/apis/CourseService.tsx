import { HttpService } from "@/apis/HttpService";
import CourseDetailPage from "@/pages/coursedetail/CourseDetailPage";
import { CourseDetail } from "@/models/course/CourseDetail";

export class CourseService extends HttpService {
  async getCourseDetail(courseId: string) {
    return this.fetch<CourseDetail>({
      path: "/course",
      params: { courseId },
    });
  }
}
