import { CourseService } from "@/apis/CourseService";
import Store from "@/stores/Store";
import { CourseDetail } from "@/models/course/CourseDetail";
import { useApiService } from "@/apis";

interface ICourseDetailStore {
  courseLoading: boolean;
  detail: CourseDetail | null;
  hasFeedback: boolean;
  hasFeedbackLoading: boolean;
}

const courseService = useApiService(CourseService);

export default class CourseDetailStore extends Store<ICourseDetailStore> {

  constructor(detail: CourseDetail | null) {
    super();
    this.state = {
      courseLoading: !detail,
      detail,
      hasFeedback: false,
      hasFeedbackLoading: true,
    };
  }

  fetchAll = async () => {
    return Promise.all([
      this.fetchCourseDetail(),
      this.fetchHasFeedback(),
    ]);
  }

  get courseId() {
    return this.state.detail!.id;
  }

  fetchCourseDetail = async () => {
    this.setState({ courseLoading: true });
    const detail = await courseService.getCourseDetail(this.courseId);
    this.setState({
      courseLoading: false,
      detail,
    });
  }

  fetchHasFeedback = async () => {

    await this.setState({ hasFeedbackLoading: true });

    const hasFeedback = await courseService.courseHasFeedback(this.courseId);
    this.setState({
      hasFeedbackLoading: false,
      hasFeedback,
    });
  }

}
