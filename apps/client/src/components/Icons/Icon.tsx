import { MouseEventHandler } from "react";
import styled from "styled-components/macro";
import ErrorIcon from "@mui/icons-material/Error";
import { Box, useTheme } from "@mui/material";
import { useDynamicSVGImport } from "@/hooks/useDynamicSVGImport.hook";
import { IconName } from "@utils/enums/common.enums";

export interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  fill?: string;
  stroke?: string;
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
  isDisabled?: boolean;
}

export const DEFAULT_ICON_SIZE = 18;

const EmptyBox = styled(Box)<{ $size: number }>`
  width: ${($size) => `${$size}px`};
  height: ${($size) => `${$size}px`};
`;

/** * This function returns a dynamically loaded SVG Icon or a statically loaded one as placeholder
 * * when the given filename can not be matched to a svg file in assets/icons.
 * * @param {string} name: name of the SVG file
 * * @param {number} size: width and height size
 * * @param {string} color: color which used to fill
 * * @param {string} className: custom className
 * * @param {function} onClick: onClick Callback
 * * @param {boolean} disabled if disabled color changes to "muiTheme.palette.text.secondary"
 * * @param rest: rest of props
 * * @returns ReactElement */

export const Icon = ({
  name,
  size = DEFAULT_ICON_SIZE,
  color,
  fill,
  stroke,
  className,
  onClick,
  isDisabled,
  ...rest
}: IconProps) => {
  const theme = useTheme();
  const iconColor = theme.palette.text.secondary;

  const props = {
    width: size,
    height: size,
    fill: fill,
    stroke: stroke,
    color: iconColor,
    className,
    onClick,
    ...rest,
  };

  const { error, SvgIcon } = useDynamicSVGImport({ name });

  if (error) {
    return <ErrorIcon color="error" fontSize="small" />;
  }

  if (SvgIcon) {
    return <SvgIcon {...props} />;
  }

  return <EmptyBox $size={size} />;
};
