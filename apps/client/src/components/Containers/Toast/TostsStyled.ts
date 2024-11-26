import { createGlobalStyle } from "styled-components/macro";

export const ToastGlobalStyles = createGlobalStyle`
  .Toastify__toast-container {
    color: ${({ theme }) => theme.palette.text.primary};
    width: 420px;
  }

  .Toastify__toast--default {
    background: transparent;
  }

  .Toastify__toast--success {
    background-color: ${({ theme }) => theme.palette.success.main};
    color: white;
  }

  .Toastify__toast--error {
    background-color: ${({ theme }) => theme.palette.error.main};
    color: white;
  }

  .Toastify__toast--info {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: white;
  }

  .Toastify__toast--warning {
    background-color: ${({ theme }) => theme.palette.warning.main};
    color: black;
  }

  /* Body styling for toast text */
  .custom-toast-body {
    font-size: 1rem;
    line-height: 1.5;
  }

  /* Close button customization */
  .custom-toast-close-button {
    color: white;
    opacity: 0.8;
  }

  /* Animations */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .Toastify__toast {
    animation: fadeInUp 0.5s ease-in-out;
    transition: opacity 0.3s ease-out;
  }

  .Toastify__progress-bar {
    height: 4px;
    // background-color: rgba(255, 255, 255, 0.7);
    border-radius: 0 0 4px 4px;
  }
`;
