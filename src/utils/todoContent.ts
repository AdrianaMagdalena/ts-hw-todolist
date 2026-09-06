export type TodoObjectContent = {
  name: string;
  [key: string]: any; // Allows freely adding extra properties (date, category, etc.)
};

export type TodoContent = string | TodoObjectContent;
