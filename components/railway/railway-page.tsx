import Image from "next/image";
import { RailwayStructuredData } from "./railway-structured-data";

const content = {
	en: {
		back: "Back to home",
		badge: "One-click self-hosting",
		headline: "Self-host VantagePeers MCP on Railway",
		headlineSub: "in under 10 minutes",
		tagline:
			"Your agents. Your data. Your deployment. No subscription required.",
		deployButton: "Deploy on Railway",
		deployAriaLabel: "Deploy VantagePeers on Railway (opens Railway)",
		whyTitle: "Why Railway",
		why: [
			{
				id: "one-click",
				title: "One-click deploy",
				body: "Pre-configured template — no Dockerfile required, no YAML to write.",
			},
			{
				id: "https",
				title: "Automatic HTTPS",
				body: "Railway provisions a TLS certificate and public URL on every deploy.",
			},
			{
				id: "env",
				title: "Env management built in",
				body: "Set secrets once in the Railway dashboard. No .env files committed to git.",
			},
			{
				id: "redeploy",
				title: "Redeploy on push",
				body: "Connect your fork to Railway and every push to main redeploys in 90 seconds.",
			},
		],
		stepsTitle: "Setup in 4 steps",
		steps: [
			{
				id: "deploy",
				step: "1",
				title: "Click Deploy",
				body: "Open the Railway template with the button above. Railway clones the repo and builds the image automatically.",
			},
			{
				id: "convex",
				title: "Provision Convex",
				step: "2",
				body: "Create a free Convex account via our referral link below. Copy the deployment URL — you'll need it in step 3.",
				cta: "Create free Convex account",
				ctaHref: "https://convex.dev/referral/LAUREN7583",
			},
			{
				id: "env-vars",
				step: "3",
				title: "Add 3 environment variables",
				body: "In your Railway project → Variables, add:",
				vars: [
					{
						name: "CONVEX_URL",
						desc: "The deployment URL from step 2 (https://….convex.cloud)",
					},
					{
						name: "BEARER_SECRET_MASTER",
						desc: "Any long random string. Used to authenticate MCP clients.",
					},
					{
						name: "AI_GATEWAY_API_KEY",
						desc: "Your OpenAI-compatible key for vector embeddings.",
					},
				],
			},
			{
				id: "connect",
				step: "4",
				title: "Connect your MCP client",
				body: 'Add the Railway URL to your Claude Code MCP config (claude_desktop_config.json or .claude.json). Set the Authorization header to "Bearer {BEARER_SECRET_MASTER}".',
			},
		],
		verifyTitle: "Verify the deployment",
		verifyBody:
			"Once Railway finishes building, run this health check from your terminal:",
		verifyExpected: "Expected response:",
		pricingTitle: "Pricing",
		pricingBody:
			"Self-hosting is free. No Railway subscription is required for low-traffic deployments (Railway free plan covers most dev teams). Optional paid support plans are available.",
		pricingLink: "See pricing plans",
		railwayTitle: "Need a Railway account?",
		railwayBody:
			"Railway is the hosting platform for the VantagePeers MCP server. The free plan is sufficient for most teams. Sign up via our referral link — it costs you nothing extra.",
		railwayCta: "Create Railway account",
		convexTitle: "Need a Convex account?",
		convexBody:
			"Convex is the real-time database powering VantagePeers. The free plan covers up to 1M function calls/month — enough for several active agent teams. Using our referral link costs you nothing extra.",
		convexCta: "Create Convex account (referral: LAUREN7583)",
	},
	fr: {
		back: "Retour à l'accueil",
		badge: "Auto-hébergement en un clic",
		headline: "Auto-hébergez VantagePeers MCP sur Railway",
		headlineSub: "en moins de 10 minutes",
		tagline: "Vos agents. Vos données. Votre déploiement. Sans abonnement.",
		deployButton: "Déployer sur Railway",
		deployAriaLabel: "Déployer VantagePeers sur Railway (ouvre Railway)",
		whyTitle: "Pourquoi Railway",
		why: [
			{
				id: "one-click",
				title: "Déploiement en un clic",
				body: "Template pré-configuré — pas de Dockerfile requis, pas de YAML à écrire.",
			},
			{
				id: "https",
				title: "HTTPS automatique",
				body: "Railway provisionne un certificat TLS et une URL publique à chaque déploiement.",
			},
			{
				id: "env",
				title: "Gestion des variables intégrée",
				body: "Définissez vos secrets une fois dans le tableau de bord Railway. Aucun fichier .env committable.",
			},
			{
				id: "redeploy",
				title: "Redéploiement sur push",
				body: "Connectez votre fork à Railway et chaque push sur main redéploie en 90 secondes.",
			},
		],
		stepsTitle: "Configuration en 4 étapes",
		steps: [
			{
				id: "deploy",
				step: "1",
				title: "Cliquer sur Déployer",
				body: "Ouvrez le template Railway avec le bouton ci-dessus. Railway clone le dépôt et construit l'image automatiquement.",
			},
			{
				id: "convex",
				title: "Provisionner Convex",
				step: "2",
				body: "Créez un compte Convex gratuit via notre lien de parrainage ci-dessous. Copiez l'URL de déploiement — vous en aurez besoin à l'étape 3.",
				cta: "Créer un compte Convex gratuit",
				ctaHref: "https://convex.dev/referral/LAUREN7583",
			},
			{
				id: "env-vars",
				step: "3",
				title: "Ajouter 3 variables d'environnement",
				body: "Dans votre projet Railway → Variables, ajoutez :",
				vars: [
					{
						name: "CONVEX_URL",
						desc: "L'URL de déploiement de l'étape 2 (https://….convex.cloud)",
					},
					{
						name: "BEARER_SECRET_MASTER",
						desc: "Une longue chaîne aléatoire. Utilisée pour authentifier les clients MCP.",
					},
					{
						name: "AI_GATEWAY_API_KEY",
						desc: "Votre clé compatible OpenAI pour les embeddings vectoriels.",
					},
				],
			},
			{
				id: "connect",
				step: "4",
				title: "Connecter votre client MCP",
				body: "Ajoutez l'URL Railway à votre config MCP Claude Code (claude_desktop_config.json ou .claude.json). Définissez l'en-tête Authorization sur \"Bearer {BEARER_SECRET_MASTER}\".",
			},
		],
		verifyTitle: "Vérifier le déploiement",
		verifyBody:
			"Une fois la construction Railway terminée, exécutez ce health check depuis votre terminal :",
		verifyExpected: "Réponse attendue :",
		pricingTitle: "Tarifs",
		pricingBody:
			"L'auto-hébergement est gratuit. Aucun abonnement Railway n'est requis pour les déploiements à faible trafic (le plan gratuit Railway couvre la plupart des équipes dev). Des plans de support payants optionnels sont disponibles.",
		pricingLink: "Voir les plans tarifaires",
		railwayTitle: "Besoin d'un compte Railway ?",
		railwayBody:
			"Railway est la plateforme d'hébergement du serveur MCP VantagePeers. Le forfait gratuit est suffisant pour la plupart des équipes. Inscrivez-vous via notre lien de parrainage — sans surcoût pour vous.",
		railwayCta: "Créer un compte Railway",
		convexTitle: "Besoin d'un compte Convex ?",
		convexBody:
			"Convex est la base de données temps réel qui alimente VantagePeers. Le plan gratuit couvre jusqu'à 1M d'appels de fonctions/mois — suffisant pour plusieurs équipes d'agents actifs. Utiliser notre lien de parrainage ne vous coûte rien de plus.",
		convexCta: "Créer un compte Convex (parrainage : LAUREN7583)",
	},
};

const DEPLOY_URL = "https://railway.com/deploy/vantagepeers-mcp";
const RAILWAY_SIGNUP_URL = "https://railway.com?referralCode=vantagepeers";

interface RailwayPageProps {
	locale: "en" | "fr";
}

export function RailwayPage({ locale }: RailwayPageProps) {
	const t = content[locale];

	return (
		<>
			<RailwayStructuredData locale={locale} />

			<div className="min-h-screen bg-background">
				{/* Subtle grid background */}
				<div
					aria-hidden="true"
					className="fixed inset-0 pointer-events-none opacity-[0.025] dark:opacity-[0.05]"
					style={{
						backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
						backgroundSize: "60px 60px",
					}}
				/>

				<main id="main-content" className="relative">
					{/* ── Hero ──────────────────────────────────────────────── */}
					<section
						aria-labelledby="hero-heading"
						className="pt-20 pb-16 md:pt-28 md:pb-24"
					>
						<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
							<a
								href={locale === "fr" ? "/fr" : "/"}
								className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
							>
								<svg
									aria-hidden="true"
									className="size-4"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M19 12H5M12 19l-7-7 7-7" />
								</svg>
								{t.back}
							</a>

							{/* Partner logos */}
							<figure
								className="flex items-center justify-center gap-6 mb-8"
								aria-label="VantagePeers deploys via Railway, powered by Convex"
							>
								<div className="flex items-center gap-2">
									<div className="size-8 rounded-2xl bg-foreground flex items-center justify-center">
										<span className="text-background font-bold text-lg">V</span>
									</div>
									<span className="font-semibold text-base tracking-tight">
										Vantage<span className="text-muted-foreground">Peers</span>
									</span>
								</div>
								<span
									className="text-muted-foreground text-sm select-none"
									aria-hidden="true"
								>
									+
								</span>
								<div className="h-8 flex items-center">
									<Image
										src="/logo-railway.svg"
										alt="Railway"
										width={32}
										height={32}
										className="invert dark:invert-0 opacity-80"
									/>
								</div>
								<span
									className="text-muted-foreground text-sm select-none"
									aria-hidden="true"
								>
									+
								</span>
								<div className="size-8 flex items-center justify-center">
									<Image
										src="/logo-convex-symbol.svg"
										alt="Convex"
										width={32}
										height={32}
										className="opacity-90"
									/>
								</div>
							</figure>

							<div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground border border-border rounded-full px-4 py-1.5 mb-6">
								{t.badge}
							</div>

							<h1
								id="hero-heading"
								className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-3"
							>
								{t.headline}
								<br />
								<span className="text-gradient">{t.headlineSub}</span>
							</h1>

							<p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
								{t.tagline}
							</p>

							<a
								href={DEPLOY_URL}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={t.deployAriaLabel}
								className="inline-flex items-center justify-center gap-3 min-h-[52px] px-10 rounded-4xl text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring glow-on-hover"
							>
								<Image
									src="/logo-railway.svg"
									alt=""
									width={20}
									height={20}
									className="invert dark:invert-0"
									aria-hidden="true"
								/>
								{t.deployButton}
								<svg
									aria-hidden="true"
									className="size-4 ml-1"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M5 12h14M12 5l7 7-7 7" />
								</svg>
							</a>
						</div>
					</section>

					{/* ── Why Railway ──────────────────────────────────────── */}
					<section
						aria-labelledby="why-heading"
						className="py-14 md:py-20 border-t border-border"
					>
						<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
							<h2
								id="why-heading"
								className="text-2xl sm:text-3xl font-bold tracking-tight mb-10 text-center"
							>
								{t.whyTitle}
							</h2>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
								{t.why.map((item) => (
									<div
										key={item.id}
										className="border border-border rounded-2xl p-6 bg-card"
									>
										<h3 className="font-semibold text-base mb-2">
											{item.title}
										</h3>
										<p className="text-sm text-muted-foreground leading-relaxed">
											{item.body}
										</p>
									</div>
								))}
							</div>
						</div>
					</section>

					{/* ── Setup steps ──────────────────────────────────────── */}
					<section
						aria-labelledby="steps-heading"
						className="py-14 md:py-20 border-t border-border"
					>
						<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
							<h2
								id="steps-heading"
								className="text-2xl sm:text-3xl font-bold tracking-tight mb-10 text-center"
							>
								{t.stepsTitle}
							</h2>

							<ol className="space-y-8">
								{t.steps.map((step) => (
									<li key={step.id} className="flex gap-5 items-start">
										<span
											aria-hidden="true"
											className="flex-shrink-0 size-9 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm tabular-nums"
										>
											{step.step}
										</span>

										<div className="flex-1 pt-1">
											<h3 className="font-semibold text-base mb-2">
												{step.title}
											</h3>
											<p className="text-sm text-muted-foreground leading-relaxed mb-3">
												{step.body}
											</p>

											{"vars" in step && step.vars && (
												<ul className="space-y-2 mt-3">
													{step.vars.map((v) => (
														<li
															key={v.name}
															className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 text-sm"
														>
															<code className="font-mono text-xs bg-muted px-2 py-0.5 rounded-md border border-border text-foreground shrink-0">
																{v.name}
															</code>
															<span className="text-muted-foreground">
																{v.desc}
															</span>
														</li>
													))}
												</ul>
											)}

											{"cta" in step && step.cta && step.ctaHref && (
												<a
													href={step.ctaHref}
													target="_blank"
													rel="noopener noreferrer"
													className="inline-flex items-center gap-2 mt-3 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors underline underline-offset-4 decoration-border hover:decoration-muted-foreground"
												>
													{step.cta}
													<svg
														aria-hidden="true"
														className="size-3"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													>
														<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
													</svg>
												</a>
											)}
										</div>
									</li>
								))}
							</ol>
						</div>
					</section>

					{/* ── Verification ─────────────────────────────────────── */}
					<section
						aria-labelledby="verify-heading"
						className="py-14 md:py-20 border-t border-border"
					>
						<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
							<h2
								id="verify-heading"
								className="text-2xl sm:text-3xl font-bold tracking-tight mb-4"
							>
								{t.verifyTitle}
							</h2>
							<p className="text-muted-foreground mb-6">{t.verifyBody}</p>

							<div className="rounded-2xl bg-muted border border-border overflow-hidden">
								<div className="px-4 py-2 border-b border-border flex items-center gap-2">
									<span
										className="size-3 rounded-full bg-destructive/50"
										aria-hidden="true"
									/>
									<span
										className="size-3 rounded-full bg-chart-2/50"
										aria-hidden="true"
									/>
									<span
										className="size-3 rounded-full bg-chart-1/50"
										aria-hidden="true"
									/>
									<span className="ml-2 text-xs text-muted-foreground font-mono">
										terminal
									</span>
								</div>
								<pre className="px-5 py-4 text-sm font-mono overflow-x-auto text-foreground leading-relaxed">
									<code>
										{"curl https://your-deployment.railway.app/health"}
									</code>
								</pre>
							</div>

							<p className="text-sm text-muted-foreground mt-6 mb-3">
								{t.verifyExpected}
							</p>

							<div className="rounded-2xl bg-muted border border-border overflow-hidden">
								<pre className="px-5 py-4 text-sm font-mono overflow-x-auto text-foreground leading-relaxed">
									<code>{`{
  "status": "ok",
  "version": "2.2.0",
  "timestamp": "2026-05-08T00:00:00.000Z"
}`}</code>
								</pre>
							</div>
						</div>
					</section>

					{/* ── Railway Sign-up CTA ──────────────────────────────── */}
					<section
						aria-labelledby="railway-signup-heading"
						className="py-14 md:py-20 border-t border-border"
					>
						<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
							<div className="mb-6">
								<Image
									src="/logo-railway.svg"
									alt="Railway"
									width={120}
									height={32}
									className="invert dark:invert-0 opacity-80"
								/>
							</div>
							<h2
								id="railway-signup-heading"
								className="text-2xl sm:text-3xl font-bold tracking-tight mb-4"
							>
								{t.railwayTitle}
							</h2>
							<p className="text-muted-foreground leading-relaxed mb-6">
								{t.railwayBody}
							</p>
							<a
								href={RAILWAY_SIGNUP_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 min-h-[44px] px-7 rounded-4xl text-sm font-semibold border border-border bg-card text-foreground hover:bg-muted/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
							>
								{t.railwayCta}
								<svg
									aria-hidden="true"
									className="size-3.5"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
								</svg>
							</a>
						</div>
					</section>

					{/* ── Convex CTA ───────────────────────────────────────── */}
					<section
						aria-labelledby="convex-heading"
						className="py-14 md:py-20 border-t border-border"
					>
						<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
							<div className="mb-6">
								<Image
									src="/logo-convex.svg"
									alt="Convex"
									width={136}
									height={52}
									className="invert dark:invert-0 opacity-80"
								/>
							</div>
							<h2
								id="convex-heading"
								className="text-2xl sm:text-3xl font-bold tracking-tight mb-4"
							>
								{t.convexTitle}
							</h2>
							<p className="text-muted-foreground leading-relaxed mb-6">
								{t.convexBody}
							</p>
							<a
								href="https://convex.dev/referral/LAUREN7583"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 min-h-[44px] px-7 rounded-4xl text-sm font-semibold border border-border bg-card text-foreground hover:bg-muted/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
							>
								{t.convexCta}
								<svg
									aria-hidden="true"
									className="size-3.5"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
								</svg>
							</a>
						</div>
					</section>

					{/* ── Pricing reference ────────────────────────────────── */}
					<section
						aria-labelledby="pricing-heading"
						className="py-14 md:py-20 border-t border-border"
					>
						<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
							<h2
								id="pricing-heading"
								className="text-2xl sm:text-3xl font-bold tracking-tight mb-4"
							>
								{t.pricingTitle}
							</h2>
							<p className="text-muted-foreground leading-relaxed mb-6">
								{t.pricingBody}
							</p>
							<a
								href={locale === "fr" ? "/fr#pricing" : "/#pricing"}
								className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors underline underline-offset-4 decoration-border hover:decoration-muted-foreground"
							>
								{t.pricingLink}
								<svg
									aria-hidden="true"
									className="size-3.5"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M5 12h14M12 5l7 7-7 7" />
								</svg>
							</a>
						</div>
					</section>

					{/* ── Bottom CTA ───────────────────────────────────────── */}
					<section className="py-14 md:py-20 border-t border-border bg-muted/30">
						<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
							<a
								href={DEPLOY_URL}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={t.deployAriaLabel}
								className="inline-flex items-center justify-center gap-3 min-h-[52px] px-10 rounded-4xl text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring glow-on-hover"
							>
								<Image
									src="/logo-railway.svg"
									alt=""
									width={20}
									height={20}
									className="invert dark:invert-0"
									aria-hidden="true"
								/>
								{t.deployButton}
								<svg
									aria-hidden="true"
									className="size-4 ml-1"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M5 12h14M12 5l7 7-7 7" />
								</svg>
							</a>
						</div>
					</section>
				</main>
			</div>
		</>
	);
}
