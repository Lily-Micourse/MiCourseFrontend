import { Section } from "@/components/ui/index";
import * as React from "react";
import { Button, Form, FormGroup, Label, Input, CustomInput } from "reactstrap";

export default function SettingAvater() {

  const update = () => {

  }

  return (
    <Section>
      <h4>
        修改头像
      </h4>
      <Button
        block={false}
        color="primary"
        size="sm"
        onClick={update}
      >选择头像
      </Button>
    </Section>
  );

}
