import { Section } from "@/components/ui/index";
import * as React from "react";
import { Button, Form, FormGroup, Label, Input, CustomInput } from "reactstrap";
import { User } from "@/models/user/User";
import { useApiService } from "@/apis";
import { UserService } from "@/apis/UserService";
import { withAlert, WithAlertProps } from "@/components/alert";

interface State {
  email: string;
  nickname: string;
  department: string;
  grade: string;
  major: string;
  gender: string;
  qq: string;
  loading: boolean;
}

interface Props extends WithAlertProps {
  userInfo: User;
}

@withAlert
export default class SettingBasic extends React.Component<Props, State> {

  department = ["文学院", "历史学院", "哲学系", "新闻传播学院", "法学院", "商学院", "外国语学院", "政府管理学院", "信息管理学院",
    "社会学院", "数学系", "物理学院", "天文与空间科学学院", "化学化工学院", "计算机科学与技术系", "电子科学与工程学院", "现代工程与应用科学学院",
    "环境学院", "地球科学与工程学院", "地理与海洋科学学院", "大气科学学院", "生命科学学院", "医学院", "工程管理学院", "匡亚明学院",
    "海外教育学院", "软件学院", "建筑与城市规划学院", "马克思主义学院", "艺术学院"];

  major = [
    ["文学系", "语言学系", "文献学系", "戏剧影视艺术系", "大学语文部"],
    ["中国历史系", "世界历史系", "考古文物系"],
    ["哲学系"],
    ["新闻与新媒体系", "广播电影电视系", "应用传播系"],
    ["法学院"],
    ["经济学系", "国际经济贸易系", "金融与保险学系", "产业经济学系", "人口研究所", "工商管理系", "会计学系", "营销与电子商务系", "人力资源管理学系"],
    ["英语系", "俄语系", "日语系", "德语系", "法语系", "西班牙语系", "朝鲜语系", "国际商务系"],
    ["政治学系", "行政管理学系", "劳动人事与社会保障系"],
    ["信息管理学院"],
    ["社会学系", "心理学系", "社会工作与社会政策系", "河仁社会慈善学院"],
    ["数学系"],
    ["现代物理系", "物理学系", "光电科学系", "声科学与工程系", "基础物理教学中心"],
    ["天文与空间科学学院"],
    ["化学化工学院"],
    ["计算机科学与技术系"],
    ["电子工程系", "微电子与光电子学系", "信息电子学系", "通信工程系", "电子电工实验教学中心", "微制造与集成工艺中心"],
    ["材料科学与工程系", "量子电子学与光学工程系", "生物医学工程系", "能源科学与工程系"],
    ["环境科学系", "环境工程系", "环境规划与管理系"],
    ["地球科学系", "水科学系", "地质工程与信息技术系"],
    ["国土资源与旅游学系", "地理信息科学系", "海岸海洋科学系"],
    ["气象学系", "大气物理学系"],
    ["生物科学与技术系", "生物化学系"],
    ["医学院"],
    ["管理科学与工程系", "控制与系统工程系", "光通信工程研究中心", "管理-控制-一体化实验教学中心"],
    ["匡亚明学院"],
    ["海外教育学院"],
    ["软件学院"],
    ["建筑系", "城市与区域规划系"],
    ["马克思主义学院"],
    ["艺术学院"],
  ];

  state = {
    email: this.props.userInfo.email,
    nickname: this.props.userInfo.nickname,
    department: this.props.userInfo.department ? this.props.userInfo.department : "",
    grade: this.props.userInfo.grade ? this.props.userInfo.grade : "",
    major: this.props.userInfo.major ? this.props.userInfo.major : "",
    gender: this.props.userInfo.gender ? this.props.userInfo.gender : "",
    qq: this.props.userInfo.qq ? this.props.userInfo.qq : "",
    loading: false,
  };

  departmentOption = this.department.map((item, i) => {
    return <option key={i} value={item}>{item}</option>;
  });

  update = async (e) => {
    this.setState({
      loading: true,
    });
    const userService = useApiService(UserService);
    const { alert } = this.props;
    try {
      await userService.setInfo({
        nickname: this.state.nickname,
        department: this.state.department,
        grade: this.state.grade,
        major: this.state.major,
        gender: this.state.gender,
        qq: this.state.qq,
      });
      this.setState({
        loading: false,
      });
      alert!.success("更新成功");
    } catch (e) {
      alert!.error("出现了错误");
    }
  }

  changeNickname = (e) => {
    this.setState({
      nickname: e.target.value,
    });
  }

  changeGendertoMale = (e) => {
    this.setState({
      gender: "male",
    });
  }

  changeGendertoFemale = (e) => {
    this.setState({
      gender: "female",
    });
  }

  changeGrade = (e) => {
    this.setState({
      grade: e.target.value,
    });
  }

  changeDepartment = (e) => {
    this.setState({
      department: e.target.value,
    });
  }

  changeMajor = (e) => {
    this.setState({
      major: e.target.value,
    });
  }

  changeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  }

  changeQQ = (e) => {
    this.setState({
      qq: e.target.value,
    });
  }

  render() {
    return (
      <Section>
        <h4>
          基本资料
        </h4>
        <Form>
          <FormGroup>
            <Label for="exampleText">昵称</Label>
            <Input type="text" name="text" defaultValue={this.state.nickname} onChange={this.changeNickname}/>
          </FormGroup>
          <FormGroup>
            <Label for="exampleCheckbox">性别</Label>
            <div>
              <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="男♂" onChange={this.changeGendertoMale} defaultChecked={this.state.gender === "male"}/>
              <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="女♀" onChange={this.changeGendertoFemale} defaultChecked={this.state.gender === "female"}/>
            </div>
          </FormGroup>
          <FormGroup>
            <Label for="exampleDate">入学年份</Label>
            <Input type="number" name="date" defaultValue={this.state.grade} onChange={this.changeGrade}/>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">院系</Label>
            <Input type="select" name="select" defaultValue={this.state.department} onChange={this.changeDepartment}>
              {this.departmentOption}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">专业</Label>
            <Input type="select" name="select" defaultValue={this.state.major} onChange={this.changeMajor}>
              {this.major[this.department.indexOf(this.state.department)].map((item, i) => {
                return <option key={i} value={item}>{item}</option>;
              })}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleNumber">QQ号</Label>
            <Input type="number" name="number" defaultValue={this.state.qq} onChange={this.changeQQ}/>
          </FormGroup>
        </Form>
        <Button
          block={false}
          color="primary"
          size="sm"
          onClick={this.update}
          disabled={this.state.loading}
        >
          { this.state.loading
            ? "更新中"
            : "更新"
          }
        </Button>
      </Section>
    );
  }

}
