"use client";

import React, { ReactNode } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import Link from "next/link";

type TBreadCrumbProps = {
  homeElement: ReactNode;
  separator: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
};

const NextBreadcrumb = ({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
}: TBreadCrumbProps) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList className={containerClasses}>
          <BreadcrumbItem className={listClasses}>
            {pathNames.length > 0 && separator}
            {pathNames.map((link, index) => {
              let href = `/${pathNames.slice(0, index + 1).join("/")}`;
              let itemClasses =
                paths === href
                  ? `${listClasses} ${activeClasses}`
                  : listClasses;
              let itemLink = capitalizeLinks
                ? link[0].toUpperCase() + link.slice(1, link.length)
                : link;
              let isLastItem = index === pathNames.length - 1; // Kiểm tra xem có phải là phần tử cuối cùng không
              return (
                <React.Fragment key={index}>
                  <BreadcrumbLink className={itemClasses}>
                    <Link
                      href={href}
                      className={isLastItem ? "text-red-700 font-bold" : ""}
                    >
                      {itemLink}
                    </Link>
                  </BreadcrumbLink>
                  <BreadcrumbSeparator />
                  {pathNames.length !== index + 1 && separator}
                </React.Fragment>
              );
            })}
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default NextBreadcrumb;
