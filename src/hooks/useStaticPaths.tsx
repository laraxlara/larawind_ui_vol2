import { GetStaticPaths } from "next";
import { ComponentData, ComponentsData } from "@/types/types";

export const useStaticPaths = (componentsData: ComponentsData) => {
  const getStaticPaths: GetStaticPaths = async () => {
    const paths: { params: { category: string; slug: string } }[] = [];

    Object.keys(componentsData).forEach((category) => {
      componentsData[category].forEach((component: ComponentData) => {
        paths.push({
          params: { category, slug: component.slug },
        });
      });
    });

    return {
      paths,
      fallback: "blocking",
    };
  };

  return { getStaticPaths };
};
