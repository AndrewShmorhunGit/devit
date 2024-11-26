import { FC, HTMLInputTypeAttribute, ReactNode } from "react";
import styled from "styled-components/macro";
import {
  InputAdornment,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";

import {
  FieldType,
  usePasswordVisibility,
} from "@/hooks/usePasswordVisibility.hook";
import { Icon } from "@components/Icons/Icon";
import { IconName } from "@/utils/enums/common.enums";

export const StyledTextField = styled(MuiTextField)<{
  $hasIcon?: boolean;
  $type?: HTMLInputTypeAttribute;
  $backgroundColor?: string;
}>`
  padding: 0px;

  & .MuiInputBase-root {
    background: ${({ $backgroundColor, theme }) =>
      $backgroundColor ? $backgroundColor : theme.palette.background.default};

    border-radius: ${({ theme }) => theme.shape.borderRadius}px;
    ${({ multiline }) => (multiline ? "height: auto;" : "height: 44px;")}
    border: 2px solid ${({ theme }) => theme.palette.primary.light};

    &.Mui-focused {
      border: 2px solid ${({ theme }) => theme.palette.primary.dark};

      box-shadow: 0px 0px 5px 1px ${({ theme }) => theme.palette.grey["50"]};
    }
  }

  & .MuiInputBase-input {
    padding: 8px 12px;
    @media (max-height: 670px) {
      padding: 12px 6px;
    }
  }

  & .MuiInputLabel-root {
    transform: ${({ $hasIcon }) =>
      $hasIcon
        ? "translate(48px, 10px) scale(1)"
        : "translate(12px, 10px) scale(1)"};

    @media (max-height: 670px) {
      transform: ${({ $hasIcon }) =>
        $hasIcon
          ? "translate(48px, 10px) scale(1)"
          : "translate(12px, 10px) scale(1)"};
    }
  }

  & .MuiFilledInput-root {
    padding: 0px 0px;
  }

  & .MuiInputLabel-root.Mui-focused,
  & .MuiInputLabel-root.MuiFormLabel-filled {
    color: ${({ theme }) => theme.palette.text.primary};
    transform: translate(2px, -20px) scale(0.75);
  }

  & .MuiFormHelperText-root {
    margin: 4px 0;
  }

  & .MuiInputAdornment-root {
    cursor: ${({ $type }) =>
      $type === FieldType.TEXT || $type === FieldType.PASSWORD
        ? "pointer"
        : "unset"};
    margin-right: 8px;
    color: ${({ theme }) => theme.palette.primary.light};
  }

  & .MuiInputBase-root::before {
    display: none;
  }

  & .MuiInputBase-root::after {
    display: none;
  }
  & .MuiSvgIcon-root {
    transform: translate(8px, -8px);
    cursor: pointer;
  }

  /* Auto complete fix*/

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    box-shadow: none !important;
    -webkit-box-shadow: none !important;
    transition: background-color 5000s ease-in-out 0s;
    box-shadow: none;
  }
`;

export type TextFieldProps = {
  icon?: ReactNode;
  type?: HTMLInputTypeAttribute;
  button?: ReactNode;
  min?: number;
  isPassword?: boolean;
  backgroundColor?: string;
} & MuiTextFieldProps;

export const TextField: FC<TextFieldProps> = (props) => {
  const { isVisible, fieldType, handleVisibility } = usePasswordVisibility();

  const {
    icon: propsIcon,
    type: propsType,
    isPassword,
    button,
    backgroundColor,
    ...rest
  } = props;

  const type = isPassword ? fieldType : propsType;

  const icon = isPassword ? (
    <PasswordIcon isVisible={isVisible} handleVisibility={handleVisibility} />
  ) : (
    propsIcon
  );

  const hasIcon = !!icon || isPassword;
  // const hasIcon = false;

  return (
    <StyledTextField
      $hasIcon={hasIcon}
      $backgroundColor={backgroundColor}
      $type={type}
      type={type}
      min={props.min}
      multiline={props.multiline}
      rows={props.rows}
      minRows={props.minRows}
      maxRows={props.maxRows}
      helperText={rest.helperText}
      error={rest.error}
      variant="filled"
      slotProps={{
        input: {
          startAdornment: hasIcon && (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),
          endAdornment: button && (
            <InputAdornment position="end">{button}</InputAdornment>
          ),
        },
      }}
      {...rest}
    />
  );
};

const PasswordIcon = ({
  isVisible,
  handleVisibility,
}: {
  isVisible: boolean;
  handleVisibility: VoidFunction;
}) => {
  return (
    <Icon
      name={isVisible ? IconName.EYE_CLOSED : IconName.EYE}
      onClick={handleVisibility}
    />
  );
};
