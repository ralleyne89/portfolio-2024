// The main entry point or homepage
import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import { ProjectCard } from "@/components/ProjectCard";

const Home = () => {
  return (
    <Layout>
      <ProjectCard></ProjectCard>
    </Layout>
  );
};

export default Home;
