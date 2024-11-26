import { FC } from "react";
import { Icon } from "@components/Icons/Icon";
import { IconName } from "@utils/enums/common.enums";

interface PasswordVisibilityButtonProps {
  isVisible: boolean;
  toggleVisibility: () => void;
}

export const PasswordVisibilityButton: FC<PasswordVisibilityButtonProps> = ({
  isVisible,
  toggleVisibility,
}) => {
  return (
    <button
      type="button"
      onClick={toggleVisibility}
      style={{
        border: "none",
        background: "none",
        display: "flex",
        cursor: "pointer",
      }}
    >
      {isVisible ? (
        <Icon name={IconName.EYE} />
      ) : (
        <Icon name={IconName.EYE_CLOSED} />
      )}
    </button>
  );
};
