import hasErrors from "@/helpers/checkImageErrors";
import { ChangeEvent, DragEvent, useState } from "react";

export type ValidationOptions = {
  maxSize?: number;
  extensions?: string[];
  limit?: number;
};

const useDragAndDrop = (
  filesHandler: (files: File[] | null) => void,
  validationOptions?: ValidationOptions
) => {
  const [dragIsOver, setDragIsOver] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const onDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragIsOver(true);
  };

  const onDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragIsOver(false);
  };

  const onDrop = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setDragIsOver(false);
    setError(null);

    const files = [...e.dataTransfer.files];

    if (hasErrors(files, setError, validationOptions)) return;

    filesHandler(files);
  };

  const onInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setError(null);

    const files = e.target.files && [...e.target.files];

    if (hasErrors(files, setError, validationOptions)) return;

    filesHandler(files);
  };

  return {
    dragIsOver,
    onDragOver,
    onDragLeave,
    onDrop,
    onInput,
    error,
  };
};

export default useDragAndDrop;
