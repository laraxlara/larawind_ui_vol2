import { useStaticPaths } from "../../hooks/useStaticPaths";
import componentsData from "../../data/components.json";
import { ComponentData } from "@/types/types";
import { useStaticProps } from "@/hooks/useStaticProps";
import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "@/components/Layout";

interface ComponentDetailProps {
  component: ComponentData;
}

export default function ComponentDetail({ component }: ComponentDetailProps) {
  if (!component) return <p>Loading...</p>;

  return (
    <Layout>
      <div className="p-4 flex bg-gray-200">
        <div className="w-64 h-screen z-[-10] relative"></div>
        <h1 className="text-2xl font-bold mb-4 relative z-[20]">
          {component.name}
        </h1>
      </div>
    </Layout>
  );
}

// eslint-disable-next-line react-hooks/rules-of-hooks
export const getStaticPaths: GetStaticPaths = useStaticPaths(
  componentsData.components
).getStaticPaths;

// eslint-disable-next-line react-hooks/rules-of-hooks
export const getStaticProps: GetStaticProps = useStaticProps(
  componentsData.components
).getStaticProps;
