import { useState } from "react";

export enum FieldType {
    PASSWORD = "password",
    TEXT = "text"
}

type UsePasswordVisibilityReturns = {
    isVisible: boolean;
    fieldType: FieldType;
    handleVisibility: VoidFunction;
};

type UsePasswordVisibility = () => UsePasswordVisibilityReturns;

export const usePasswordVisibility: UsePasswordVisibility = () => {
    const [isVisible, setIsVisible] = useState(false);

    const fieldType = isVisible ? FieldType.TEXT : FieldType.PASSWORD;

    const handleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return {
        isVisible,
        fieldType,
        handleVisibility
    };
};
