import type { ReactNode } from "react";

export type LegalSection = {
	heading: string;
	paragraphs?: string[];
	items?: string[];
};

export type LegalDocumentContent = {
	title: string;
	lastUpdated: string;
	intro?: string;
	sections: LegalSection[];
};

// Renders "[TO VERIFY: ...]" markers visibly so a draft cannot be read as final.
function withMarkers(text: string): ReactNode[] {
	return text.split(/(\[TO VERIFY:[^\]]*\])/g).map((part, i) =>
		part.startsWith("[TO VERIFY:") ? (
			<mark
				key={i}
				className="bg-yellow-200 text-black px-1 rounded"
			>
				{part}
			</mark>
		) : (
			part
		),
	);
}

export function LegalDocument({
	content,
	backHref,
	backLabel,
}: {
	content: LegalDocumentContent;
	backHref: string;
	backLabel: string;
}) {
	return (
		<div className="min-h-screen bg-background">
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
				<a
					href={backHref}
					className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
				>
					&larr; {backLabel}
				</a>

				<h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
					{content.title}
				</h1>
				<p className="text-sm text-muted-foreground mb-8">
					{withMarkers(content.lastUpdated)}
				</p>
				{content.intro ? (
					<p className="text-muted-foreground leading-relaxed mb-12">
						{withMarkers(content.intro)}
					</p>
				) : null}

				<div className="space-y-10">
					{content.sections.map((section) => (
						<section key={section.heading}>
							<h2 className="text-xl font-semibold mb-3">{section.heading}</h2>
							{section.paragraphs?.map((p) => (
								<p key={p} className="text-muted-foreground leading-relaxed mb-3">
									{withMarkers(p)}
								</p>
							))}
							{section.items ? (
								<ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
									{section.items.map((item) => (
										<li key={item}>{withMarkers(item)}</li>
									))}
								</ul>
							) : null}
						</section>
					))}
				</div>
			</div>
		</div>
	);
}
