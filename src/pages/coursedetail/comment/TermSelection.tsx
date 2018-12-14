import React from "react";
import { useApiService } from "@/apis";
import { CourseService } from "@/apis/CourseService";
import { Input, FormGroup, Label } from "reactstrap";

interface Props {
  terms: string[];
  selectedTerm: string;
  onChange(term: string): void;
}

export default function TermSelection(props: Props) {
  return (
    <Input
      type="select"
      name="select"
      placeholder="选择一个学期"
      onChange={(e) => props.onChange(e.target.value)}
      value={props.selectedTerm}
    >
      {props.terms.map((x) => <option value={x} key={x}>{x}</option>)}
    </Input>
  );
}
