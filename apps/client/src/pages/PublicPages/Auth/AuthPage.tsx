import styled, { keyframes } from "styled-components/macro";
import { FlexBox } from "@/styles/styled/boxes";
import { AuthForm } from "./AuthForm/AuthForm";
import { AuthFormVariant } from "@/utils/enums/common.enums";

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.5); opacity: 0.9; }
`;

const shapeChange = keyframes`
  0%, 100% { border-radius: 50%; }
  50% { border-radius: 0%; }
`;

const moveUpDown = keyframes`
  0%, 100% { transform: translateY(-120px ); }
  50% { transform: translateY(120px); }
`;

const AuthPageContainer = styled(FlexBox)`
  color: ${({ theme }) => theme.palette.text.primary};
  position: relative;

  /* Left Circle */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -25vw;
    width: 300px;
    height: 300px;
    overflow: hidden;
    background: radial-gradient(
      circle,
      ${({ theme }) => theme.palette.primary.main} 0%,
      transparent 60%
    );
    opacity: 0.5;
    z-index: 0;
    animation: ${pulse} 12s infinite ease-in-out,
      ${moveUpDown} 6s infinite ease-in-out,
      ${shapeChange} 7s infinite ease-in-out;
  }

  /* Right Circle */
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: -25vw;
    width: 300px;
    height: 300px;

    background: radial-gradient(
      circle,
      ${({ theme }) => theme.palette.secondary.main} 0%,
      transparent 60%
    );
    z-index: 0;
    opacity: 0.5;
    animation: ${pulse} 10s infinite ease-in-out,
      ${moveUpDown} 7s infinite ease-in-out,
      ${shapeChange} 8s infinite ease-in-out;
  }
`;

type AuthProps = {
  formVariant: AuthFormVariant;
};

export default function Auth({ formVariant }: AuthProps) {
  return (
    <AuthPageContainer>
      <AuthForm variant={formVariant} />
    </AuthPageContainer>
  );
}
