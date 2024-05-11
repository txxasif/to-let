import formatString from "@/helper/formatString";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const TextInput = ({
  onChange,
  disabled,
  placeHolder,
  name,
  required,
}) => {
  return (
    <Input
      type="text"
      name={name ? name : null}
      id={name ? name : null}
      required={required ? true : false}
      onChange={onChange ? onChange : null}
      disabled={disabled ? true : false}
      placeholder={placeHolder ? placeHolder : null}
    />
  );
};
export const NumberInput = ({
  onChange,
  disabled,
  placeHolder,
  name,
  required,
}) => {
  return (
    <Input
      type="number"
      name={name ? name : null}
      id={name ? name : null}
      required={required ? true : false}
      onChange={onChange ? onChange : null}
      disabled={disabled ? true : false}
      placeholder={placeHolder ? placeHolder : null}
    />
  );
};
export const PasswordInput = ({
  onChange,
  disabled,
  placeHolder,
  name,
  required,
}) => {
  return (
    <Input
      type="password"
      name={name ? name : null}
      id={name ? name : null}
      required={required ? true : false}
      onChange={onChange ? onChange : null}
      disabled={disabled ? true : false}
      placeholder={placeHolder ? placeHolder : null}
    />
  );
};
export const EmailInput = ({
  onChange,
  disabled,
  placeHolder,
  name,
  required,
}) => {
  return (
    <input
      type="email"
      name={name ? name : null}
      id={name ? name : null}
      required={required ? true : false}
      onChange={onChange ? onChange : null}
      disabled={disabled ? true : false}
      placeholder={placeHolder ? placeHolder : null}
    />
  );
};

export const Label = ({ name }) => {
  return (
    <label className="font-medium" htmlFor={name ? name : null}>
      {name ? formatString(name) : null}
    </label>
  );
};
export const SelectOption = ({
  onChange,
  defaultValue,
  values,
  name,
  className,
}) => {
  return (
    <Select
      defaultValue={defaultValue}
      value={defaultValue}
      className={className ? className : null}
      onValueChange={(v) =>
        onChange({ target: { name: name, value: v, type: "text" } })
      }
    >
      <SelectTrigger>
        <SelectValue placeholder="Select A Type" />
      </SelectTrigger>
      <SelectContent>
        {values.map((item, idx) => (
          <SelectItem key={idx} value={item.value}>
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
