import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";
import Router from "next/router";
import Link from "next/link";
import { url } from "inspector";

interface Props {
    value: string;
    type: "credit" | "department" | "category"
}

const StyledLabel = styled.a`
    display: inline-block;
    margin: 0 4px 4px 0;
    padding: 0 8px;
    color: #fff!important;
    background: #88C5E1;
    border-radius: 4px;
    cursor:pointer;

    :hover{
        background:#54abd4;
    }
`

export default function Label(props: Props) {
    return (
        <Link href={{ pathname: "/course", query: { queryType:props.type, query:props.value } }}>
            <StyledLabel>{props.value}</StyledLabel>
        </Link>
    )
}