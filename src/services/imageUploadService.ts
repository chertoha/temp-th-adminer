import { api } from "./api";

export const uploadImage = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);

  const response: { data: { name: string } } = await api.post(
    "/admin/images",
    formData,
    {
      headers: { "Content-Type": "multipart/form-data;" },
    }
  );
  return response.data.name;
};
