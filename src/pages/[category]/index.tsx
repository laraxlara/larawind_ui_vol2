import React from "react";
import Layout from "@/components/Layout";
import { ComponentData, ComponentsData } from "@/types/types";
import componentsData from "../../data/components.json";
import { useRouter } from "next/router";
import Link from "next/link";
import ComponentCard from "@/components/Card/ComponentCard";

type ComponentsDataType = typeof componentsData.components;

function ComponentListPage() {
  const router = useRouter();
  const { category } = router.query; // Get the category from the URL

  if (!category || typeof category !== "string") {
    return <div>Loading...</div>;
  }

  const components =
    componentsData.components[category as keyof ComponentsDataType];

  if (!components) {
    return <div>No components found for this category</div>;
  }
  return (
    <Layout>
      <div className="bg-gray-200 p-8 h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:pl-64">
          {components.map((component) => (
            <div key={component.id}>
              <ComponentCard
                href={`${component.components}/${component.slug}`}
                description={component.description}
                name={component.name}
                src={component.imgPath}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default ComponentListPage;
