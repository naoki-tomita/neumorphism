export function classnames(params: { [key: string]: boolean }) {
  return Object.entries(params).filter(([,enabled]) => enabled).map(([key]) => key).join(" ");
}
