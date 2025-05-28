import React, { type ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import {
  useDocById,
  findFirstSidebarItemLink,
} from "@docusaurus/plugin-content-docs/client";
import { usePluralForm } from "@docusaurus/theme-common";
import isInternalUrl from "@docusaurus/isInternalUrl";
import { translate } from "@docusaurus/Translate";

import type { Props } from "@theme/DocCard";
import Heading from "@theme/Heading";
import type {
  PropSidebarItemCategory,
  PropSidebarItemLink,
} from "@docusaurus/plugin-content-docs";

import styles from "./styles.module.css";
import * as LucideIcons from "lucide-react";

function useCategoryItemsPlural() {
  const { selectMessage } = usePluralForm();
  return (count: number) =>
    selectMessage(
      count,
      translate(
        {
          message: "1 item|{count} items",
          id: "theme.docs.DocCard.categoryDescription.plurals",
          description:
            "The default description for a category card in the generated index about how many items this category includes",
        },
        { count }
      )
    );
}

function getCategoryIcon(item: PropSidebarItemCategory) {
  const iconName = (item.customProps as any)?.icon;

  if (typeof iconName === "string" && (LucideIcons as any)[iconName]) {
    return (LucideIcons as any)[iconName] as React.FC<unknown>;
  }
  return LucideIcons.Folder;
}

function getLinkIcon(item: PropSidebarItemLink) {
  if (item.label.toLowerCase() === "introduction") {
    return LucideIcons.Home;
  }
  const sidebarIcon = (item.customProps as any)?.icon;
  if (typeof sidebarIcon === "string" && (LucideIcons as any)[sidebarIcon]) {
    return (LucideIcons as any)[sidebarIcon];
  }
  return isInternalUrl(item.href)
    ? LucideIcons.FileText
    : LucideIcons.ExternalLink;
}

function CardContainer({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}): JSX.Element {
  return (
    <Link
      href={href}
      className={clsx("card padding--lg", styles.cardContainer)}
    >
      {children}
    </Link>
  );
}

function CardLayout({
  href,
  icon,
  title,
  description,
}: {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
}): JSX.Element {
  return (
    <CardContainer href={href}>
      <Heading
        as="h2"
        className={clsx("text--truncate", styles.cardTitle)}
        title={title}
      >
        {icon} {title}
      </Heading>
      <p
        className={clsx("text--truncate", styles.cardDescription)}
        title={description}
      >
        {description}
      </p>
    </CardContainer>
  );
}

function CardCategory({
  item,
}: {
  item: PropSidebarItemCategory;
}): JSX.Element | null {
  const href = findFirstSidebarItemLink(item);
  const categoryItemsPlural = useCategoryItemsPlural();
  const IconComponent = getCategoryIcon(item);
  if (!href) {
    return null;
  }

  const description =
    item.description ?? categoryItemsPlural(item.items.length);

  return (
    <CardLayout
      href={href}
      icon={<IconComponent size={20} aria-label="doc icon" />}
      title={item.label}
      description={description}
    />
  );
}

function CardLink({ item }: { item: PropSidebarItemLink }): JSX.Element {
  const doc = useDocById(item.docId ?? undefined);
  const IconComponent = getLinkIcon(item);

  // Show description if present; otherwise repeat title
  let description = item.description ?? doc?.description;
  if (!description || description.trim() === "") {
    description = item.label;
  }

  return (
    <CardLayout
      href={item.href}
      icon={<IconComponent size={20} aria-label="doc icon" />}
      title={item.label}
      description={description}
    />
  );
}

export default function DocCard({ item }: Props): JSX.Element {
  switch (item.type) {
    case "link":
      return <CardLink item={item} />;
    case "category":
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
