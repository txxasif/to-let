import { Input } from "./ui/input";
export default function InputFiled({ type, placeholder, name, ...props }) {
  return <Input type={type} placeholder={placeholder} name={name} {...props} />;
}
