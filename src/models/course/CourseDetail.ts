export interface CourseIndexes {
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

export interface CourseDetail extends CourseIndexes {
  id: string;
  name: string;
  description: string;
  rate: number;
  type: string;
  credit: number;
  department: string;
  cover: string;
  hasFeedback: boolean;
}
