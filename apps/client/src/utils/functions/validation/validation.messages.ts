import { t } from "i18next";

export const translatedValidationMessage = (
  message: string
): string | undefined => {
  const translateKey = `validationMessages.${message}`;
  const translatedMessage = t(translateKey);
  const isValidTranslation = translatedMessage !== translateKey;

  if (isValidTranslation) {
    return translatedMessage;
  }
};
