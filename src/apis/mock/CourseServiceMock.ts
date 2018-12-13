import { CourseService } from "@/apis/CourseService";
import { CourseListItem } from "@/models/course/Course";
import { CourseQueryType, CourseType } from "@/models/course/CourseQuery";

export class CourseServiceMock extends CourseService {

  async getCourseDetail(courseId: string) {
    return {
      id: "1",
      name: "测试课程",
      description: "哈哈哈",
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

  async getCoursesByType(type: CourseType, page: number, pageSize: number = 15): Promise<CourseListItem[]> {
    return [{
      id: "001",
      name: "第一个课",
      cover: "",
      rate: 3.9,
      credit: 2,
      department: "软件学院",
      category: "通识课",
      commentNum: 10,
    }];
  }

  async getCoursesByQuery(queryType: CourseQueryType,
                          query: string, page: number, pageSize: number = 15): Promise<CourseListItem[]> {
    if (query === "1") {
      return [{
        id: "001",
        name: "最热的课",
        cover: "",
        rate: 3.9,
        credit: 2,
        department: "软件学院",
        category: "通识课",
        commentNum: 10,
      }];
    } else {
      return [{
        id: "001",
        name: "最热的课",
        cover: "",
        rate: 3.9,
        credit: 2,
        department: "软件学院",
        category: "通识课",
        commentNum: 10,
      },
      {
        id: "002",
        name: "最热的课2",
        cover: "",
        rate: 3.9,
        credit: 2,
        department: "软件学院",
        category: "通识课",
        commentNum: 10,
      }];
    }
  }
}
