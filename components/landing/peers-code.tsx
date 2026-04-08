"use client";

import { motion } from "framer-motion";
import { Check, Copy, Terminal } from "lucide-react";
import { useState } from "react";

const content = {
	en: {
		title: "Quick start.",
		subtitle: "From zero to coordinated agents in under 10 minutes.",
		tabs: [
			{ id: "install", label: "Install" },
			{ id: "configure", label: "Configure" },
			{ id: "use", label: "Use" },
		],
		snippets: {
			install: `# Clone and deploy to Convex
git clone https://github.com/vantageos-agency/vantage-peers
cd vantage-peers
npm install
npx convex deploy

# Add to Claude config (~/.claude/settings.json)
{
  "mcpServers": {
    "vantage-peers": {
      "command": "npx",
      "args": ["convex", "run", "--prod"],
      "env": {
        "CONVEX_URL": "https://your-deployment.convex.cloud"
      }
    }
  }
}`,
			configure: `# Each agent instance gets a unique identity
# Set in your Claude project's CLAUDE.md or system prompt:

ORCHESTRATOR_ID=pi
INSTANCE_ID=pi-vps   # or pi-chromebook, tau-desktop, etc.

# Namespaces isolate memory per project
# global   → shared across all projects
# project/X → scoped to project X`,
			use: `# Store memory (82 tools available via MCP)
store_memory(
  namespace="project/myapp",
  type="feedback",
  content="Never use grid for this layout — user confirmed flex works better",
  createdBy="tau"
)

# Send a message cross-machine
send_message(
  from="tau",
  channel="pi-vps",
  content="Completed the auth refactor. Ready for review."
)

# Recall by semantic query
recall(
  query="auth architecture decisions",
  namespace="project/myapp",
  limit=5
)

# Assign a task
create_task(
  title="Review auth refactor",
  assignedTo="pi",
  createdBy="tau",
  priority="high"
)`,
		},
	},
	fr: {
		title: "Démarrage rapide.",
		subtitle: "De zéro à des agents coordonnés en moins de 10 minutes.",
		tabs: [
			{ id: "install", label: "Installer" },
			{ id: "configure", label: "Configurer" },
			{ id: "use", label: "Utiliser" },
		],
		snippets: {
			install: `# Cloner et déployer sur Convex
git clone https://github.com/vantageos-agency/vantage-peers
cd vantage-peers
npm install
npx convex deploy

# Ajouter à la config Claude (~/.claude/settings.json)
{
  "mcpServers": {
    "vantage-peers": {
      "command": "npx",
      "args": ["convex", "run", "--prod"],
      "env": {
        "CONVEX_URL": "https://your-deployment.convex.cloud"
      }
    }
  }
}`,
			configure: `# Chaque instance d'agent obtient une identité unique
# À définir dans le CLAUDE.md ou le prompt système :

ORCHESTRATOR_ID=pi
INSTANCE_ID=pi-vps   # ou pi-chromebook, tau-desktop, etc.

# Les namespaces isolent la mémoire par projet
# global   → partage entre tous les projets
# project/X → scope au projet X`,
			use: `# Stocker la mémoire (82 outils disponibles via MCP)
store_memory(
  namespace="project/myapp",
  type="feedback",
  content="Ne jamais utiliser grid pour cette mise en page — l'utilisateur confirme que flex fonctionne mieux",
  createdBy="tau"
)

# Envoyer un message cross-machine
send_message(
  from="tau",
  channel="pi-vps",
  content="Refactoring auth terminé. Prêt pour review."
)

# Rappel par requête sémantique
recall(
  query="decisions architecture auth",
  namespace="project/myapp",
  limit=5
)

# Assigner une tâche
create_task(
  title="Review refactoring auth",
  assignedTo="pi",
  createdBy="tau",
  priority="high"
)`,
		},
	},
};

interface PeersCodeProps {
	locale: "en" | "fr";
}

export function PeersCode({ locale }: PeersCodeProps) {
	const t = content[locale];
	const [activeTab, setActiveTab] = useState<"install" | "configure" | "use">(
		"install",
	);
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		await navigator.clipboard.writeText(t.snippets[activeTab]);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<section className="py-16 md:py-24 bg-muted/30">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center max-w-3xl mx-auto mb-10"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
						{t.title}
					</h2>
					<p className="text-lg text-muted-foreground">{t.subtitle}</p>
				</motion.div>

				<motion.div
					className="rounded-2xl border border-border bg-card overflow-hidden"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					{/* Tab bar */}
					<div className="flex items-center justify-between border-b border-border bg-muted/30 px-4">
						<div className="flex items-center gap-1 py-2">
							<Terminal className="size-4 text-muted-foreground mr-2" />
							{t.tabs.map((tab) => (
								<button
									key={tab.id}
									type="button"
									onClick={() =>
										setActiveTab(tab.id as "install" | "configure" | "use")
									}
									className={`px-3 py-2 min-h-[44px] text-sm rounded-3xl font-medium transition-all ${
										activeTab === tab.id
											? "bg-background text-foreground shadow-sm"
											: "text-muted-foreground hover:text-foreground"
									}`}
								>
									{tab.label}
								</button>
							))}
						</div>
						<button
							type="button"
							onClick={handleCopy}
							className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
							aria-label="Copy code"
						>
							{copied ? (
								<Check className="size-4 text-chart-1" />
							) : (
								<Copy className="size-4" />
							)}
						</button>
					</div>

					{/* Code content */}
					<div className="p-6 overflow-x-auto">
						<pre className="text-sm font-mono text-foreground/90 leading-relaxed whitespace-pre">
							<code>{t.snippets[activeTab]}</code>
						</pre>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
