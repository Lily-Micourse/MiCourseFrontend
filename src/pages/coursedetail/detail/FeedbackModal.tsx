import React from "react";
import { Section } from "@/components/ui";
import { Modal, FormGroup, Label, ButtonGroup, Button, Form } from "reactstrap";
import CommentTextArea from "../comment/CommentTextArea";
import ModalHeader from "reactstrap/lib/ModalHeader";
import ModalBody from "reactstrap/lib/ModalBody";
import ModalFooter from "reactstrap/lib/ModalFooter";
import TermSelection from "../comment/TermSelection";
import { prependListener } from "cluster";
import { useApiService } from "@/apis";
import { CourseService } from "@/apis/CourseService";
import { withAlert, WithAlertProps } from "@/components/alert";


interface Option<T> {
  text: string;
  value: T;
}

const rateOptions: Option<number>[] = [
  { text: "5", value: 5 },
  { text: "4", value: 4 },
  { text: "3", value: 3 },
  { text: "2", value: 2 },
  { text: "1", value: 1 },
];

const pressureOptions: Option<string>[] = [
  { text: "毫无压力", value: "low" },
  { text: "压力适中", value: "moderate" },
  { text: "压力山大", value: "high" },
];

const gradeOptions: Option<string>[] = [
  { text: "90+", value: "A" },
  { text: "80-90", value: "B" },
  { text: "70-80", value: "C" },
  { text: "60-70", value: "D" },
  { text: "60-", value: "E" },
];

const checkinOptions: Option<string>[] = [
  { text: "从不", value: "never" },
  { text: "一次", value: "once" },
  { text: "两次", value: "twice" },
  { text: "小于或等于5次", value: "lessThanFive" },
  { text: "大于5次", value: "moreThanFive" }
];

const examineOptions: Option<string>[] = [
  { text: "论文", value: "essay" },
  { text: "签到", value: "checkin" },
  { text: "讨论", value: "discussion" },
]

interface ButtonOptionGroupProps<T> {
  options: Option<T>[];
  value: T | T[];
  onChange(option: Option<T>);
}



function ButtonOptionGroup<T>({ options, onChange, value }: ButtonOptionGroupProps<T>) {
  return (
    <div>
      <ButtonGroup>
        {options.map((x, i) => {
          return (
            <Button
              onClick={() => onChange(x)}
              key={i}
              color="info"
              active={
                Array.isArray(value)
                  ? value.includes(x.value)
                  : value === x.value
              }
            >
              {x.text}
            </Button>
          );
        })}
      </ButtonGroup>
    </div>
  );
}

interface Props extends WithAlertProps {
  terms: string[];
  courseId: string;
  isOpen: boolean;
  toggle(): void;
  refetchDetail(): void;
}


interface State {
  term: string;
  rate: number;
  pressure: string;
  grade: string;
  comment: string;
  examine: string[];
  checkinTimes: string;
}

@withAlert
export default class FeedbackModal extends React.Component<Props, State> {

  state = {
    term: "",
    rate: 5,
    pressure: "low",
    grade: "A",
    comment: "",
    checkinTimes: "never",
    examine: [] as string[]
  } as State;

  onCommentChange = (comment) => {
    this.setState({ comment });
  }

  onCancel = () => {
    this.props.toggle();
  }

  onFeedback = async () => {
    const courseService = useApiService(CourseService);

    await courseService.feedbackCourse(this.props.courseId, this.state as any);

    this.props.toggle();
    this.props.refetchDetail();
    this.props.alert!.success("评价成功");


  }

  onTermSelected = (term: string) => {
    this.setState({ term });
  }

  onRateChange = (rate: Option<number>) => {
    this.setState({ rate: rate.value });
  }

  onPressureChange = (option: Option<string>) => {
    this.setState({ pressure: option.value });
  }

  onGradeChange = (option: Option<string>) => {
    this.setState({ grade: option.value });
  }

  onCheckinTimesChange = (option: Option<string>) => {
    this.setState({ checkinTimes: option.value });
  }


  onExamineChange = (option: Option<string>) => {
    if (this.state.examine.includes(option.value)) {
      // deselect
      this.setState({
        examine: this.state.examine.filter((x) => x !== option.value),
      });
    } else {
      // select
      this.setState({
        examine: [...this.state.examine, option.value],
      });
    }
  }

  render() {
    return (
      <Modal toggle={this.props.toggle} isOpen={this.props.isOpen}>
        <ModalHeader>我上过这门课/反馈</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label>学期</Label>
              <TermSelection
                terms={this.props.terms}
                selectedTerm={this.state.term}
                onChange={this.onTermSelected}
              />
            </FormGroup>
            <FormGroup>
              <Label for="rate">评分</Label>
              <ButtonOptionGroup
                value={this.state.rate}
                options={rateOptions}
                onChange={this.onRateChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>压力指数</Label>
              <ButtonOptionGroup
                value={this.state.pressure}
                options={pressureOptions}
                onChange={this.onPressureChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>总评成绩</Label>
              <ButtonOptionGroup
                value={this.state.grade}
                options={gradeOptions}
                onChange={this.onGradeChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>签到（点名）次数</Label>
              <ButtonOptionGroup
                value={this.state.checkinTimes}
                options={checkinOptions}
                onChange={this.onCheckinTimesChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>考核方式（可多选）</Label>
              <ButtonOptionGroup
                value={this.state.examine}
                options={examineOptions}
                onChange={this.onExamineChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>评论（可选）</Label>
              <CommentTextArea value={this.state.comment} onChange={this.onCommentChange} />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={this.onCancel}>取消</Button>
          <Button onClick={this.onFeedback} color={"primary"}>确认反馈</Button>
        </ModalFooter>

      </Modal>
    )
  }

}
