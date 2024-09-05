import React from "react";
import Link from "next/link";
import Image from "next/image";

type ComponentCardProps = {
  name: string;
  description: string;
  href: string;
  src: string;
};

function ComponentCard(props: ComponentCardProps) {
  return (
    <Link
      href={props.href}
      className="group block rounded-xl shadow transition hover:shadow-lg"
    >
      <Image
        width={100}
        height={100}
        alt="Web Component Wireframe"
        src={props.src}
        className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
      />

      <div className="p-4 ">
        <h3 className="text-lg font-medium text-gray-900">{props.name}</h3>

        <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-[#15E2A7]"></span>

        <p className="mt-2 line-clamp-2 text-sm/relaxed text-gray-500">
          {props.description}
        </p>

        <Link
          href={props.href}
          className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#15E2A7]"
        >
          Find out more
          <span
            aria-hidden="true"
            className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
          >
            &rarr;
          </span>
        </Link>
      </div>
    </Link>
  );
}

export default ComponentCard;
