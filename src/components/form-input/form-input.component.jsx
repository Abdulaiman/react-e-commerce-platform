import { Group, Input, FormInputLabeb } from "./form-input.styles";
const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabeb shrink={otherProps.value.length}>
          {label}
        </FormInputLabeb>
      )}
    </Group>
  );
};
export default FormInput;
