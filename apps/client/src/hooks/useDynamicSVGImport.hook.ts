import { FC, SVGProps, useEffect, useRef, useState } from "react";

import {
  INITIAL_ERROR,
  INITIAL_IS_LOADING,
} from "@utils/constants/common.constants";

interface UseDynamicSVGImportProps {
  name: string;
  options?: UseDynamicSVGImportOptions;
}

interface UseDynamicSVGImportReturns {
  error: Error | undefined;
  isLoading: boolean;
  SvgIcon: FC<SVGProps<SVGSVGElement>> | undefined;
}

export interface UseDynamicSVGImportOptions {
  onCompleted?: (
    name: string,
    SvgIcon: FC<SVGProps<SVGSVGElement>> | undefined
  ) => void;
  onError?: (err: Error) => void;
}

/** * This hook loads a SVG dynamically.
 * * Hint: The path name of the asset for the import call can not start with a dynamic path
 * * @param name filename * @param options UseDynamicSVGImportOptions
 * * @param onCompleted
 * * @param onError
 * * @returns UseDynamicSVGImportReturns */

export const useDynamicSVGImport = ({
  name,
  options: { onCompleted, onError } = {},
}: UseDynamicSVGImportProps): UseDynamicSVGImportReturns => {
  const ImportedIconRef = useRef<FC<SVGProps<SVGSVGElement>>>();
  const [isLoading, setIsLoading] = useState(INITIAL_IS_LOADING);
  const [error, setError] = useState<Error | undefined>(INITIAL_ERROR);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        ImportedIconRef.current = (
          await import(`../assets/icons/svgs/${name}.svg`)
        ).default;
        onCompleted?.(name, ImportedIconRef.current);
      } catch (err) {
        onError?.(err as Error);
        setError(err as Error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 10);
      }
    })();

    return () => {
      setIsLoading(INITIAL_IS_LOADING);
      setError(INITIAL_ERROR);
    };
  }, [name, onCompleted, onError]);

  return {
    error,
    isLoading,
    SvgIcon: ImportedIconRef.current,
  };
};
