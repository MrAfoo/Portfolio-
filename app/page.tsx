"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
	return (
		<div className="relative bg-black-100 bg-grid-black-100/[0.03]">
			<Hero />
		
		<main className="relative bg-black-100 bg-grid-black-100/[0.03] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
			
			<div className="max-w-7xl w-full">
				<FloatingNav navItems={navItems} />
				
				<Grid />
				<RecentProjects />
				<Clients />
				<Experience />
				<Approach />
				<Footer />
			</div>
		</main>
		</div>
	);
};

export default Home;
