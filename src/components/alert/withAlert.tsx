import { withAlert, InjectedAlertProp } from "react-alert";

export interface WithAlertProps {
  alert?: InjectedAlertProp;
}

export default (WrappedComponent) => withAlert(WrappedComponent) as any;
