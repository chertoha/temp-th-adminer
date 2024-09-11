export const extractFileFromInput = (files: FileList | File[] | null) => {
  return !files || files.length <= 0 ? null : files[0];
};
