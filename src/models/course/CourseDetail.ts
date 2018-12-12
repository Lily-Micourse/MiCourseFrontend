export interface CourseDetail {
  id: string;
  name: string;
  rate: number;
  type: string;
  credit: number;
  department: string;
  cover: string;
  hasFeedback: boolean;
  pressureIndexes: {
    low: number;
    moderate: number;
    high: number;
  };
  examineIndexes: {
    essay: number;
    checkin: number;
    discussion: number;
  };
  gradeindexes: {
    A: number;
    B: number;
    C: number;
    D: number;
    E: number;
  };
  checkinIndexes: {
    never: number;
    once: number;
    twice: number;
    lessThanFive: number;
    moreThanFive: number;
  };
}
