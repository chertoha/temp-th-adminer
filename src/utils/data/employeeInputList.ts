import { EmployeeFormValues } from "@/types/forms";

const inputs: {
  fieldName: keyof EmployeeFormValues;
  placeholder: string;
  type: "text" | "email";
}[] = [
  { fieldName: "name", placeholder: "Ім'я", type: "text" },
  { fieldName: "role", placeholder: "Посада", type: "text" },
  { fieldName: "phone", placeholder: "Телефон", type: "text" },
  { fieldName: "email", placeholder: "Електронна пошта", type: "email" },
];

export default inputs;
