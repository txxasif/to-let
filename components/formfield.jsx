export default function FormFiled({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
  required,
}) {
  return (
    <>
      <input type={type} placeholder={placeholder} {...register(name)} />
      {error && <span className="error-message">{error.message}</span>}
    </>
  );
}
