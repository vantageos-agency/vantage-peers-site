"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

interface FaqItem {
	question: string;
	answer: string;
}

interface PricingFaqContent {
	title: string;
	items: FaqItem[];
}

const content: Record<"en" | "fr", PricingFaqContent> = {
	en: {
		title: "Pricing questions",
		items: [
			{
				question: "Why is billing annual only?",
				answer:
					"Annual billing lets us invest in infrastructure and support without subscription hedging. Monthly billing would mean higher prices for everyone. If you need a monthly option for Cloud, contact us — we can discuss on a case-by-case basis.",
			},
			{
				question: "Can I migrate from Self-Hosted to Cloud?",
				answer:
					"Yes. Your data lives in your Convex deployment as structured JSON. We provide a migration guide and can handle the import as part of any Cloud onboarding. No data is lost — the schema is identical between Self-Hosted and Cloud.",
			},
			{
				question: "Can I move from Cloud back to Self-Hosted?",
				answer:
					"Yes. We export your full dataset from our Convex deployment and you import it into your own. Migration is a documented, supported operation. You are never locked in.",
			},
			{
				question: "What is the refund policy?",
				answer:
					"For setup services (QuickStart), we offer a full refund if the session did not happen. For annual Cloud subscriptions, we offer a pro-rata refund within the first 30 days. After 30 days, no refund — but you keep access until the end of the billing period.",
			},
			{
				question: "What does Pro Support include, exactly?",
				answer:
					"Pro Support is for Self-Hosted users only. It covers: 24h response time via a dedicated channel, schema review on request, optimization advice, and upgrade assistance when new versions ship. It does not include custom development or feature requests.",
			},
			{
				question: "How is data privacy handled in the Cloud plans?",
				answer:
					"Cloud instances run on EU infrastructure. Your agent memory, missions, and task data are isolated per account — no cross-tenant data access. We do not use your data for model training or analytics. Full details in our privacy policy.",
			},
		],
	},
	fr: {
		title: "Questions tarifaires",
		items: [
			{
				question: "Pourquoi uniquement une facturation annuelle ?",
				answer:
					"La facturation annuelle nous permet d'investir dans l'infrastructure et le support sans couverture d'abonnement. Une facturation mensuelle signifierait des prix plus élevés pour tout le monde. Si vous avez besoin d'une option mensuelle pour le Cloud, contactez-nous — on peut en discuter au cas par cas.",
			},
			{
				question: "Puis-je migrer de l'auto-hébergé vers le Cloud ?",
				answer:
					"Oui. Vos données vivent dans votre déploiement Convex sous forme de JSON structuré. Nous fournissons un guide de migration et pouvons gérer l'import dans le cadre de tout onboarding Cloud. Aucune donnée n'est perdue — le schéma est identique entre l'auto-hébergé et le Cloud.",
			},
			{
				question: "Puis-je revenir du Cloud vers l'auto-hébergé ?",
				answer:
					"Oui. On exporte votre jeu de données complet depuis notre déploiement Convex et vous l'importez dans le vôtre. La migration est une opération documentée et supportée. Vous n'êtes jamais enfermé.",
			},
			{
				question: "Quelle est la politique de remboursement ?",
				answer:
					"Pour les services d'installation (QuickStart), nous offrons un remboursement complet si la session n'a pas eu lieu. Pour les abonnements Cloud annuels, nous offrons un remboursement au prorata dans les 30 premiers jours. Après 30 jours, pas de remboursement — mais vous conservez l'accès jusqu'à la fin de la période de facturation.",
			},
			{
				question: "Qu'est-ce que le Support Pro inclut, exactement ?",
				answer:
					"Le Support Pro est réservé aux utilisateurs auto-hébergés. Il comprend : temps de réponse 24h via un canal dédié, revue de schéma sur demande, conseils d'optimisation, et assistance aux mises à jour lors de la sortie de nouvelles versions. Il n'inclut pas le développement personnalisé ni les demandes de fonctionnalités.",
			},
			{
				question:
					"Comment la confidentialité des données est-elle gérée dans les plans Cloud ?",
				answer:
					"Les instances Cloud fonctionnent sur une infrastructure EU. Votre mémoire d'agent, vos missions et données de tâches sont isolées par compte — pas d'accès cross-tenant. Nous n'utilisons pas vos données pour l'entraînement de modèles ni pour l'analytique. Tous les détails dans notre politique de confidentialité.",
			},
		],
	},
};

interface PeersPricingFaqProps {
	locale: "en" | "fr";
}

export function PeersPricingFaq({ locale }: PeersPricingFaqProps) {
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const t = content[locale];

	return (
		<div>
			<div className="border-t border-border my-12" />
			<motion.div
				className="text-center mb-8"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
			>
				<h3 className="text-2xl font-bold tracking-tight">{t.title}</h3>
			</motion.div>

			<div className="space-y-3 max-w-3xl mx-auto">
				{t.items.map((item, index) => (
					<motion.div
						key={item.question}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: index * 0.07 }}
					>
						<Collapsible
							open={openIndex === index}
							onOpenChange={(open) => setOpenIndex(open ? index : null)}
						>
							<CollapsibleTrigger className="w-full flex items-center justify-between p-4 text-left rounded-2xl bg-card border border-border hover:bg-muted/50 transition-colors">
								<span className="font-medium pr-4">{item.question}</span>
								<ChevronDown
									aria-hidden="true"
									className={cn(
										"size-5 text-muted-foreground shrink-0 transition-transform duration-200",
										openIndex === index && "rotate-180",
									)}
								/>
							</CollapsibleTrigger>
							<CollapsibleContent className="px-4 pt-2 pb-4 text-muted-foreground leading-relaxed">
								{item.answer}
							</CollapsibleContent>
						</Collapsible>
					</motion.div>
				))}
			</div>
		</div>
	);
}
