export type ComponentData = {
  id: number;
  name: string;
  slug: string;
  description: string;
  category: string;
  components: string;
  imgPath: string;
  docPath: string;
};

export type ComponentsData = {
  [key: string]: ComponentData[];
};
