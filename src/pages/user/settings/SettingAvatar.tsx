import { Section } from "@/components/ui/index";
import * as React from "react";
import { Button } from "reactstrap";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import styled from "styled-components";
import { useApiService } from "@/apis";
import { UserService } from "@/apis/UserService";
import { withAlert, WithAlertProps } from "@/components/alert";

const UploadStyled = styled.div`
  width: 100%;
`;

const BoxStyled = styled.div`
  width: 30%;
  margin-top: 15px;
`;

const BorderStyled = styled.div`
  border: 1px solid rgb(125, 125, 125);
`;

interface State {
  src: any;
  cropResult: string;
  loading: boolean;
}

interface Props extends WithAlertProps {
  avatar: string;
}

@withAlert
export default class SettingAvatar extends React.Component<Props, State> {

  state = {
    src: this.props.avatar,
    cropResult: "",
    loading: false,
  };

  cropper ;

  onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.setState({ src: reader.result });
    };
    reader.readAsDataURL(files[0]);
  }

  cropImage = () => {
    if (typeof this.cropper.getCroppedCanvas() === "undefined") {
      return;
    }
    this.setState({
      cropResult: this.cropper.getCroppedCanvas().toDataURL(),
    });
  }

  update = async () => {
    this.setState({
      loading: true,
    });
    const userService = useApiService(UserService);
    const { alert } = this.props;
    try {
      await userService.setAvatar(
        this.state.src,
      );
      this.setState({
        loading: false,
      });
      alert!.success("上传成功");
    } catch (e) {
      alert!.error("出现了错误");
    }
  }

  render() {
    return (
      <Section>
        <h4>
          修改头像
        </h4>
        <UploadStyled>
          <input
            type="file"
            accept="image/jpeg,image/jpg,image/png"
            onChange={this.onChange}
          />
          <Cropper
            style={{ "width": "100%", "max-height": 400 }}
            aspectRatio={9 / 9}
            guides={false}
            src={this.state.src}
            ref={(cropper) => { this.cropper = cropper; }}
            crop={this.cropImage}
          />
        </UploadStyled>
        <BoxStyled>
          预览
          <BorderStyled>
            <img style={{ width: "100%" }} src={this.state.cropResult} alt="cropped image" />
          </BorderStyled>
        </BoxStyled>
        <br style={{ clear: "both" }} />
        <Button
          block={false}
          color="primary"
          size="sm"
          onClick={this.update}
          disabled={this.state.loading}
        >
          { this.state.loading
          ? "上传中"
          : "上传头像"
        }
        </Button>
      </Section>
    );
  }
}
