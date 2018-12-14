import React from "react";
import styled from "styled-components";

interface Props {
  value: string;
  onChange(value: string): void;
}

const Textarea = styled.textarea`
  margin-top: 0px;
  margin-bottom: 2px;
  height: 51px;
  width: 100%;
  height: 38px;
  margin: 0 0 2px 0;
  resize: vertical;
  transition: all 0.25s ease-in-out;

  padding: 6px 10px;
  background: #f5f5f5;
  border: 1px solid #f5f5f5;
  border-radius: 2px;
  box-shadow: none;
  color: #777;
`;


export default function CommentTextArea(props: Props) {
  return <Textarea
    placeholder={"来一发吐槽~~"}
    onChange={(e) => props.onChange(e.target.value)}
    value={props.value}
  />;
}
