const BASE_URL = "https://www.vantagepeers.com";

// JSON-LD injection via dangerouslySetInnerHTML is the standard pattern for
// server-rendered structured data. No user input is interpolated here — all
// values are static literals defined in this file.

function JsonLd({ data }: { data: Record<string, unknown> }) {
	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data — static literals only, no user input interpolated
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
		/>
	);
}

function getHowToSchema(locale: string) {
	const isEn = locale !== "fr";

	return {
		"@context": "https://schema.org",
		"@type": "HowTo",
		"@id": isEn ? `${BASE_URL}/railway#howto` : `${BASE_URL}/fr/railway#howto`,
		name: isEn
			? "How to self-host VantagePeers MCP on Railway"
			: "Comment auto-héberger VantagePeers MCP sur Railway",
		description: isEn
			? "Deploy the VantagePeers MCP server on Railway in under 10 minutes using the one-click template."
			: "Déployez le serveur MCP VantagePeers sur Railway en moins de 10 minutes grâce au template en un clic.",
		totalTime: "PT10M",
		tool: [
			{
				"@type": "HowToTool",
				name: "Railway account",
			},
			{
				"@type": "HowToTool",
				name: "Convex account",
			},
		],
		step: [
			{
				"@type": "HowToStep",
				position: 1,
				name: isEn
					? "Click the Railway deploy button"
					: "Cliquer sur le bouton de déploiement Railway",
				text: isEn
					? "Click the Railway deploy button to open the pre-configured VantagePeers template in your Railway dashboard."
					: "Cliquez sur le bouton de déploiement Railway pour ouvrir le template VantagePeers pré-configuré dans votre tableau de bord Railway.",
				url: "https://railway.com/deploy/vantagepeers-mcp",
			},
			{
				"@type": "HowToStep",
				position: 2,
				name: isEn
					? "Provision a free Convex database"
					: "Provisionner une base de données Convex gratuite",
				text: isEn
					? "Sign up for a free Convex account via the referral link and create a new deployment. Copy your CONVEX_URL from the Convex dashboard."
					: "Créez un compte Convex gratuit via le lien de parrainage et créez un nouveau déploiement. Copiez votre CONVEX_URL depuis le tableau de bord Convex.",
				url: "https://convex.dev/referral/LAUREN7583",
			},
			{
				"@type": "HowToStep",
				position: 3,
				name: isEn
					? "Add 3 environment variables"
					: "Ajouter 3 variables d'environnement",
				text: isEn
					? "In Railway, set BEARER_SECRET_MASTER (any long random string), AI_GATEWAY_API_KEY (your OpenAI-compatible key), and CONVEX_URL (from step 2)."
					: "Dans Railway, définissez BEARER_SECRET_MASTER (une chaîne aléatoire longue), AI_GATEWAY_API_KEY (votre clé compatible OpenAI), et CONVEX_URL (de l'étape 2).",
			},
			{
				"@type": "HowToStep",
				position: 4,
				name: isEn ? "Connect your MCP client" : "Connecter votre client MCP",
				text: isEn
					? "Add the Railway deployment URL to your Claude Code MCP configuration. Your agents can now share memory across machines."
					: "Ajoutez l'URL de déploiement Railway à votre configuration MCP Claude Code. Vos agents peuvent désormais partager leur mémoire entre machines.",
			},
			{
				"@type": "HowToStep",
				position: 5,
				name: isEn ? "Verify the deployment" : "Vérifier le déploiement",
				text: isEn
					? 'Run curl https://your-deployment.railway.app/health to confirm the server is running. Expected response: {"status":"ok","version":"2.2.0"}.'
					: 'Exécutez curl https://votre-deploiement.railway.app/health pour confirmer que le serveur fonctionne. Réponse attendue : {"status":"ok","version":"2.2.0"}.',
			},
		],
	};
}

function getWebPageSchema(locale: string) {
	const isEn = locale !== "fr";
	const pageUrl = isEn ? `${BASE_URL}/railway` : `${BASE_URL}/fr/railway`;

	return {
		"@context": "https://schema.org",
		"@type": "WebPage",
		"@id": `${pageUrl}#webpage`,
		name: isEn
			? "Self-host VantagePeers MCP on Railway in <10 min"
			: "Auto-hébergez VantagePeers MCP sur Railway en <10 min",
		description: isEn
			? "One-click Railway deploy for the VantagePeers MCP server. Connect Convex, set env vars, start coordinating agents in minutes."
			: "Déploiement Railway en un clic pour VantagePeers MCP. Connectez Convex, définissez les variables d'environnement, commencez à coordonner vos agents en quelques minutes.",
		url: pageUrl,
		inLanguage: isEn ? "en" : "fr",
		isPartOf: {
			"@id": `${BASE_URL}/#website`,
		},
		breadcrumb: {
			"@type": "BreadcrumbList",
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					name: "VantagePeers",
					item: isEn ? BASE_URL : `${BASE_URL}/fr`,
				},
				{
					"@type": "ListItem",
					position: 2,
					name: isEn ? "Railway Deploy" : "Déploiement Railway",
					item: pageUrl,
				},
			],
		},
	};
}

export function RailwayStructuredData({ locale = "en" }: { locale?: string }) {
	return (
		<>
			<JsonLd data={getHowToSchema(locale)} />
			<JsonLd data={getWebPageSchema(locale)} />
		</>
	);
}
