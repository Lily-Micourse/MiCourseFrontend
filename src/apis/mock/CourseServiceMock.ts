import { CourseService } from "@/apis/CourseService";
import { CourseDetail } from "@/models/course/CourseDetail";

export class CourseServiceMock extends CourseService {

  async getCourseDetail(courseId: string) {
    return {
      id: "1",
      name: "测试课程",
      rate: 4.5,
      type: "选修课",
      credit: 3,
      department: "计算机科学与技术学院",
      cover: "",
      hasFeedback: true,
      pressureIndexes: {
        low: 30,
        moderate: 10,
        high: 5,
      },
      examineIndexes: {
        essay: 30,
        checkin: 30,
        discussion: 5,
      },
      gradeindexes: {
        A: 30,
        B: 20,
        C: 10,
        D: 5,
        E: 2,
      },
      checkinIndexes: {
        never: 30,
        once: 1,
        twice: 0,
        lessThanFive: 0,
        moreThanFive: 0,
      },
    };
  }
}
