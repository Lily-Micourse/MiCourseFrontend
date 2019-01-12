import { CourseService, CourseListResponse } from "@/apis/CourseService";
import { CourseListItem } from "@/models/course/Course";
import { CourseQueryType, CourseType } from "@/models/course/CourseQuery";
import { range } from "@/utils/range";
import { waitForMs } from "@/utils/wait";
import { CourseFeedback } from "@/models/course/CourseFeedback";
import { CommentFeedbackAction, CommentFeedback } from "@/models/course/CommentFeedback";

const terms = ["2018年春季学期", "2017年秋季学期"];

export class CourseServiceMock extends CourseService {


  async getCourseDetail(courseId: string) {
    return {
      id: "1",
      name: "测试课程",
      description: `本课程是软件工程专业的专业核心课程。课程内容包括需求工程的基础知识、软件需求的基础理论、常用的需求获取方法与技术、常用的需求分析方法、常用的需求分析模型与建模技术、需求管理知识和初步的需求工程过程管理知识。课程在整个软件工程的背景下介绍需求工程知识，试图让学生理解需求工程工作可能给后继软件项目工作带来的影响，并在此基础上全面深入的了解软件需求领域的各项方法、技术与工具。
      具体知识要求包括：
      ①	理解功能需求和质量属性需求。
      ②	了解预算、价值实现等软件工程的经济学知识，理解可行性分析方法。
      ③	掌握面谈、原型、观察等常用的需求获取方法与技术，理解其中与涉众交互、不确定性处理等心理学知识。
      ④	掌握目标分析、用例分析、结构化分析、面向对象分析等常用的需求分析方法与技术。
      ⑤	理解形式化语言、半形式化模型、非形式化语言等常用的需求规格说明技术。
      ⑥	理解评审、原型、测试用例开发等常用的需求确认与验证技术。
      ⑦	理解优先级划分、冲突协商等与需求工程相关的软件“工程性”。`,
      rate: 4.5,
      type: "选修课",
      credit: 3,
      department: "计算机科学与技术学院",
      cover: "",
      hasFeedback: false,
      terms,
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

  async getCoursesByType(type: CourseType, page: number, pageSize: number = 15): Promise<CourseListResponse> {
    return this.generateCourseList(page * pageSize, pageSize);
  }

  async getCoursesByQuery(queryType: CourseQueryType,
    query: string, page: number, pageSize: number = 15): Promise<CourseListResponse> {
    return this.generateCourseList(page * pageSize, pageSize);
  }


  generateCourseList(start: number, length: number): CourseListResponse {
    const res: CourseListItem[] = [];
    const covers: string[] = [
      "http://www.micourse.net/Public/img/icons/film.png",
      "http://www.micourse.net/Public/img/icons/art.png",
      "http://www.micourse.net/Public/img/icons/music.png",
      "http://www.micourse.net/Public/img/icons/history.png",
    ];
    const names: string[] = [
      "俄罗斯文学经典的当代意义",
      "西方音乐通论",
      "中国书画鉴赏",
      "科学世界观",
      "艺术原理与艺术经典",
      "中国早期文明：商周至两汉"
    ];
    range(start, start + length).map(x => res.push(
      {
        id: "00" + x,
        name: names[Math.floor(Math.random() * names.length)] + x,
        cover: covers[Math.floor(Math.random() * covers.length)],
        rate: parseFloat(Number(Math.random() * 5).toFixed(1)),
        credit: 2,
        department: "软件学院",
        category: "通识课",
        commentNum: 10,
      }
    ))
    return { count: 13, data: res };
  }

  async getCourseComments(courseId: string) {
    await waitForMs(1000);
    return [
      {
        id: "1",
        userId: "123",
        nickname: "czy",
        avatar: "",
        isNjuer: true,
        content: "这个课好啊。",
        time: "2018.11.23 23:49:10",
        term: "2016年秋季学期",
        comments: [],
        agree: 300,
        disagree: 1024,
        voting: 0 as 0,
      },
    ];
  }

  async feedbackComment(feedback: CommentFeedback, commentId?: string, subCommentId?: string): Promise<"success" | "conflict"> {
    return "success";
  }

  async comment(courseId: string, content: string, term: string) {
    // nothing happens
  }
  async feedbackCourse(courseId: string, feedback: CourseFeedback) {
    // nothing happens
  }
}
