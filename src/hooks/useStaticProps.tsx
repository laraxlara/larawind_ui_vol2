import { ComponentsData } from "@/types/types";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

interface Params extends ParsedUrlQuery {
  category: string;
  slug: string;
}

export const useStaticProps = (componentsData: ComponentsData) => {
  const getStaticProps: GetStaticProps = async ({ params }) => {
    const { category, slug } = params as Params;
    const component = componentsData[category]?.find(
      (comp) => comp.slug === slug
    );

    if (!component) {
      return { notFound: true };
    }

    return {
      props: {
        component,
      },
    };
  };

  return { getStaticProps };
};
