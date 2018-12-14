
export enum CourseQueryType {
  STRING = "string",
  CREDIT = "credit",
  DEPARTMENT = "department",
  CATEGORY = "category",
}

export enum CourseType {
  HOT = "hot",
  LATEST = "latest",
  RECOMMEND = "recommend",

}

export interface CourseListQuery {
  query?: string;
  queryType?: CourseQueryType;
  page?: number;
}
