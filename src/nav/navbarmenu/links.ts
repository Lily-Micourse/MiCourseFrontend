export const basicLinks = [
  { href: "/", title: "首页" },
  { href: "/course", title: "课程" },
  { href: "/notice", title: "公告" }];

export const extendedLinksAfterLogin = [
  { href: "/profile", title: "个人主页" },
  { href: "/messages", title: "消息盒子" },
  { href: "/settings", title: "资料设置" }];

export const withoutLoginLinks = [...basicLinks, { href: "/login", title: "登陆" }];

export interface Link {
  href?: string;
  title: string;
  onClick?: () => void;
}
