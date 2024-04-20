"use client";

const Page = () => {
	return (
		<>
			<div className="min-h-screen grid grid-cols-1 place-items-center text-center space-y-4">
				<div>
					<h1 className="text-4xl font-bold">Hello, World!</h1>
					<p className="text-lg mt-2">
						Welcome to your new app. This is a simple starter template for your
						Next.js project.
					</p>
				</div>

				<NavbarCTA />

				<div className="flex space-x-4">
					<a
						href=""
						className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all"
					>
						Primary Button
					</a>
					<a
						href=""
						className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all"
					>
						Secondary Button
					</a>

					<a
						href=""
						className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all"
					>
						Tertiary Button
					</a>

					<a
						href=""
						className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all"
					>
						Quaternary Button
					</a>
				</div>
			</div>
			<div className="min-h-screen bg-slate-600 text-white">
				<div className="container mx-auto py-12">
					<h2 className="text-3xl font-bold">Hello, World!</h2>
					<p className="text-lg mt-2">
						Welcome to your new app. This is a simple starter template for your
						Next.js project.
					</p>
				</div>
			</div>
			<div className="min-h-screen bg-slate-600 text-white">
				<div className="container mx-auto py-12">
					<h2 className="text-3xl font-bold">Hello, World!</h2>
					<p className="text-lg mt-2">
						Welcome to your new app. This is a simple starter template for your
						Next.js project.
					</p>
				</div>
			</div>
		</>
	);
};

export default Page;

import {
	motion,
	useInView,
	useMotionValueEvent,
	useScroll,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const NavbarCTA = () => {
	const progressRef = useRef(null);
	const [offset, setOffset] = useState(100);

	const { scrollYProgress } = useScroll({ target: progressRef });
	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		console.log("Element: ", latest);
		setOffset(latest);
	});

	const inViewRef = useRef(null);
	const isInView = useInView(inViewRef);

	useEffect(() => {
		console.log("InView: ", isInView);
	}, [isInView]);

	return (
		<nav
			ref={inViewRef}
			className="max-w-screen-sm w-full sticky top-8 flex items-center justify-center"
		>
			<motion.div
				initial={false}
				ref={progressRef}
				style={{
					width: offset < 0.034 ? 360 : 180,
					position: offset < 0.033 ? "fixed" : "static",
				}}
				className="rounded-full cursor-pointer bg-slate-900 top-8 text-white py-2 px-4 hover:bg-slate-800 transition-all"
			>
				Get Started
			</motion.div>
		</nav>
	);
};
