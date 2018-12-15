type ExamineType = "essay" | "checkin" | "discussion";

export interface CourseFeedback {
  rate: number;
  pressure: "low" | "moderate" | "high";
  grade: "A" | "B" | "C" | "D" | "E";
  examine: ExamineType[];
  content?: string;
  term: string;
}
