import { ExternalLink, Star, Calendar, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button"; 

const qualifications = [
	{
		title: "Diploma in ICT Applications Development",
		year: "2024",
		file: "/qualifications/diploma.pdf",
	},
	{
		title: "Higher Certificate in ICT",
		year: "2021",
		file: "/qualifications/higher-certificate.pdf",
	},
	{
		title: "National Senior Certificate",
		year: "2020",
		file: "/qualifications/national-senior-certificate.pdf",
	},
];

const certificates = [
	{
		title: "Active Listening: Enhancing Communication Skills",
		issuer: "Coursera Instructor Network",
		date: "2025",
		type: "Professional",
		description:
			"Training to master active listening, boost empathy, and sharpen interpersonal communication skills.",
		skills: [
			"Active Listening",
			"Communication",
			"Empathy",
			"Interpersonal Skills",
		],
		file: "/certificates/active-listening.pdf",
		image: "/certificates/active-listening.png",
	},
	{
		title: "AI For Everyone",
		issuer: "Coursera — Andrew Ng",
		date: "2025",
		type: "Professional",
		description:
			"A non-technical introduction to artificial intelligence, its business applications, and ethical considerations.",
		skills: [
			"Artificial Intelligence",
			"AI Applications",
			"Business Strategy",
			"Ethics in AI",
		],
		file: "/certificates/ai-for-everyone.pdf",
		image: "/certificates/ai-for-everyone.png",
	},
];

const getTypeColor = (type: string) => {
	switch (type) {
		case "Professional":
			return "secondary";
		default:
			return "default";
	}
};

const Certificates = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [modalFile, setModalFile] = useState<string | null>(null);
	const [modalTitle, setModalTitle] = useState<string | null>(null);

	const openModal = (file: string, title: string) => {
		setModalFile(file);
		setModalTitle(title);
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
		setModalFile(null);
		setModalTitle(null);
	};

	return (
		<section id="certificates" className="py-20 bg-stone-50">
			<div className="container mx-auto px-4">
				<div className="max-w-6xl mx-auto">
					{/* Section Header */}
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
							Qualifications & Certificates
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							A curated showcase of my academic qualifications and professional
							certifications.
						</p>
					</div>

					{/* Qualifications Section */}
					<div className="mb-20">
						<h3 className="text-2xl font-bold mb-8 text-foreground text-center">
							Qualifications
						</h3>
						<div className="grid md:grid-cols-3 gap-8">
							{qualifications.map((q, idx) => (
								<motion.div
									key={idx}
									initial={{ opacity: 0, scale: 0.95 }}
									whileInView={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.4, delay: idx * 0.1 }}
								>
									<Card className="flex flex-col items-center bg-gradient-to-br from-stone-50 to-stone-100 border border-border/30 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6">
										<FileText className="w-12 h-12 text-sage-dark mb-4" />
										<CardTitle className="text-lg font-semibold mb-2 text-center">
											{q.title}
										</CardTitle>
										<div className="text-muted-foreground mb-4">
											{q.year}
										</div>
										<Button
											asChild
											variant="outline"
											size="sm"
											className="border-sage-dark/30 text-sage-dark hover:border-sage-dark hover:bg-sage-dark/5"
										>
											<a
												href={q.file}
												target="_blank"
												rel="noopener noreferrer"
											>
												<ExternalLink className="mr-2 h-4 w-4" />
												View
											</a>
										</Button>
									</Card>
								</motion.div>
							))}
						</div>
					</div>

					{/* Certificates Section */}
					<div>
						<h3 className="text-2xl font-bold mb-8 text-foreground text-center">
							Certificates
						</h3>
						<div className="grid md:grid-cols-2 gap-8">
							{certificates.map((certificate, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.15 }}
								>
									<Card className="bg-gradient-to-br from-white to-sage-50 border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden rounded-2xl">
										<div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sage-dark via-transparent to-transparent" />
										<CardHeader>
											<div className="flex items-start justify-between gap-4">
												<div className="flex items-start gap-3">
													<Star className="text-sage-dark mt-1" size={24} />
													<div>
														<CardTitle className="text-lg font-semibold mb-1 group-hover:text-sage-dark transition-colors">
															{certificate.title}
														</CardTitle>
														<p className="text-earth-dark font-medium">
															{certificate.issuer}
														</p>
													</div>
												</div>
												<Badge
													variant={getTypeColor(certificate.type)}
													className="text-xs"
												>
													{certificate.type}
												</Badge>
											</div>
											<div className="flex items-center gap-1 text-muted-foreground mt-2">
												<Calendar size={16} />
												<span>{certificate.date}</span>
											</div>
										</CardHeader>
										<CardContent className="space-y-6">
											<div className="flex justify-center">
												<img
													src={certificate.image}
													alt={certificate.title}
													className="w-44 h-32 object-cover rounded-xl shadow-md border-2 border-sage-100 cursor-pointer transition-transform hover:scale-105"
													onClick={() =>
														openModal(certificate.file, certificate.title)
													}
													title="Tap to view certificate"
												/>
											</div>
											<p className="text-muted-foreground leading-relaxed text-sm">
												{certificate.description}
											</p>
											<div>
												<h4 className="font-semibold mb-3 text-sm">
													Skills Covered:
												</h4>
												<div className="flex flex-wrap gap-2">
													{certificate.skills.map((skill, i) => (
														<Badge key={i} variant="outline" className="text-xs">
															{skill}
														</Badge>
													))}
												</div>
											</div>
											<div className="flex justify-center">
												<Button
													variant="outline"
													size="sm"
													className="border-sage-dark/30 text-sage-dark hover:border-sage-dark hover:bg-sage-dark/5"
													onClick={() =>
														openModal(certificate.file, certificate.title)
													}
												>
													<ExternalLink className="mr-2 h-4 w-4" />
													View PDF
												</Button>
											</div>
										</CardContent>
									</Card>
								</motion.div>
							))}
						</div>
					</div>

					{/* Modal */}
					<AnimatePresence>
						{modalOpen && modalFile && (
							<motion.div
								className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
								onClick={closeModal}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							>
								<motion.div
									className="bg-white rounded-xl shadow-lg p-6 max-w-3xl w-full relative"
									onClick={(e) => e.stopPropagation()}
									initial={{ scale: 0.9, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									exit={{ scale: 0.9, opacity: 0 }}
								>
									<button
										className="absolute top-2 right-4 text-gray-500 hover:text-gray-700 text-2xl"
										onClick={closeModal}
										aria-label="Close"
									>
										✖
									</button>
									<h4 className="text-lg font-bold mb-4 text-center text-gray-800">
										{modalTitle}
									</h4>
									<iframe
										src={modalFile}
										title={modalTitle!}
										className="w-full h-[70vh] rounded-md"
									/>
								</motion.div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
};

export default Certificates;
