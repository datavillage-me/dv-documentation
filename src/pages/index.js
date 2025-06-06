import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import dvLogoWhite from "../../static/img/Datavillage_Logo_White.png";
import * as LucideIcons from "lucide-react";

// Define each documentation section as a card
const docs = [
  {
    title: "User Manual",
    description: "Learn how to manage or join a collaboration space.",
    link: "/docs/user-manual/intro",
    icon: LucideIcons.BookOpen,
  },
  {
    title: "Algorithm Development",
    description: "Learn how to build a custom algorithm.",
    link: "/docs/algorithm-development/intro",
    icon: LucideIcons.Cpu,
  },
  {
    title: "dv_utils",
    description: "Complete documentation of Datavillage python lib dv_utils.",
    link: "/docs/reference",
    icon: LucideIcons.Package,
  },
  {
    title: "Control Plane API",
    description: "Complete documentation of Datavillage API's.",
    link: "/docs/api/control-plane",
    icon: LucideIcons.Server,
  },
];

// Card component
function DocCard({ title, description, link, icon: Icon }) {
  return (
    <div className={clsx("col col--3", styles.cardCol)}>
      <Link className={styles.card} to={link}>
        <Icon className={styles.cardIcon} />
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </Link>
    </div>
  );
}

// Hero/banner with embedded cards and website button
function Homepage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.heroBanner}>
      <div className="container">
        <img src={dvLogoWhite} className={styles.dvLogo} alt="Logo" />
        <p className="hero__subtitle" style={{ margin: "1rem 0" }}>
          {siteConfig.tagline}
        </p>
        <div className="row" style={{ margin: "6rem 0" }}>
          {docs.map((doc) => (
            <DocCard key={doc.title} {...doc} />
          ))}
        </div>
        <div className={styles.buttons}>
          <a
            className="button button--secondary button--lg"
            href={siteConfig.url}
            target="_blank"
            style={{ margin: "8rem 0" }}
            rel="noopener noreferrer"
          >
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
}

// Main export
export default function Home() {
  return (
    <Layout title="Home" description="Trusted Data Collaborations">
      <Homepage />
    </Layout>
  );
}
