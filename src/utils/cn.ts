export const cn = (...args: any[]) => {
  // const res = args.filter(Boolean).join(" ");
  // console.log(res);
  return args.filter(Boolean).join(" ")
};