import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string }>;
};

const BASE_URL = 'https://www.vantagepeers.com';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'fr'
      ? 'Conditions d’utilisation — VantagePeers'
      : 'Terms of Service — VantagePeers',
    description: locale === 'fr'
      ? 'Conditions d’utilisation de VantagePeers Cloud et de VantagePeers Self-host.'
      : 'Terms of Service for VantagePeers Cloud and VantagePeers Self-host.',
    alternates: {
      canonical: locale === 'fr' ? `${BASE_URL}/fr/terms` : `${BASE_URL}/terms`,
      languages: { en: '/terms', fr: '/fr/terms' },
    },
  };
}

// Company-specific legal facts the operator has not confirmed are written as
// visible "[TO VERIFY: ...]" placeholders and highlighted on render. They must
// be replaced by confirmed facts, never by guesses.
//
// Facts reused verbatim from app/[locale]/privacy/page.tsx:
//   - "Perello Consulting / ElPi Corp, represented by Laurent Perello"
//   - contact "laurent@perello.fr"
//   - "A Data Processing Agreement (DPA) is available on request"
const content = {
  en: {
    title: 'Terms of Service',
    effectiveDate: 'Effective date: [TO VERIFY: effective date]',
    sections: [
      {
        heading: '1. Provider',
        body: 'These Terms of Service (the “Terms”) govern access to and use of VantagePeers. VantagePeers is provided by Perello Consulting / ElPi Corp, represented by Laurent Perello (as identified in our Privacy Policy). Legal form: [TO VERIFY: legal entity name and legal form]. Registered address: [TO VERIFY: registered address]. Registration number: [TO VERIFY: company registration number]. VAT number: [TO VERIFY: VAT number].',
      },
      {
        heading: '2. Two distinct products',
        body: 'VantagePeers is offered as two distinct products. VantagePeers Cloud is a hosted, multi-tenant service operated by us, which you access through MCP clients such as Claude, ChatGPT, Claude Code, Codex and any IDE that supports the Model Context Protocol (MCP). VantagePeers Self-host is a separate product: you install, run and operate the software on your own infrastructure. Sections 4 to 8 apply to VantagePeers Cloud only. Section 9 applies to VantagePeers Self-host only. All other sections apply to both.',
      },
      {
        heading: '3. Business use',
        body: 'VantagePeers is a business-to-business offering. By accepting these Terms you confirm that you act on behalf of a business or organisation and that you have authority to bind it. If you do not accept these Terms, do not use VantagePeers.',
      },
      {
        heading: '4. VantagePeers Cloud — accounts and access',
        body: 'You sign in with a supported identity provider (for example Google). You are responsible for all activity under your account and organisation, for keeping your credentials and access tokens confidential, and for the MCP clients you connect to your workspace. Third-party MCP clients (such as Claude, ChatGPT, Claude Code or Codex) are governed by their own providers’ terms; we are not responsible for them.',
      },
      {
        heading: '5. VantagePeers Cloud — acceptable use',
        body: 'You must not: use the service in breach of applicable law; attempt to access another tenant’s data or bypass access controls; probe, scan or test the vulnerability of the service without our prior written consent; interfere with or overload the service; or resell the service without our written agreement.',
      },
      {
        heading: '6. VantagePeers Cloud — your data',
        body: 'You keep all rights in the data you store in VantagePeers Cloud (memories, messages, tasks, missions and related content). We process it only to provide and secure the service, as described in our Privacy Policy. Each organisation’s data is isolated from other tenants. A Data Processing Agreement (DPA) is available on request (as stated in our Privacy Policy). DPA reference: [TO VERIFY: data processing agreement reference].',
      },
      {
        heading: '7. VantagePeers Cloud — fees, billing and refunds',
        body: 'Pricing: [TO VERIFY: pricing for VantagePeers Cloud]. Billing: [TO VERIFY: billing cycle, payment method and payment terms]. Refunds: [TO VERIFY: refund policy].',
      },
      {
        heading: '8. VantagePeers Cloud — availability, suspension and termination',
        body: 'We work to keep the service available but do not guarantee uninterrupted operation. Service level: [TO VERIFY: service level commitment, if any]. We may suspend access that breaches Section 5 or endangers the service or other tenants. You may stop using the service at any time. Data retention and deletion after termination follow our Privacy Policy.',
      },
      {
        heading: '9. VantagePeers Self-host',
        body: 'VantagePeers Self-host is software that you run yourself. Its use is governed by the license distributed with its source code. You are solely responsible for the infrastructure, configuration, security, backups and data of your installation; we do not host it and have no access to the data it holds. Commercial terms for Self-host, if any: [TO VERIFY: Self-host commercial terms, pricing and support].',
      },
      {
        heading: '10. Intellectual property',
        body: 'We retain all rights in VantagePeers, its software, documentation and brand, except for the rights granted to you in these Terms and, for VantagePeers Self-host, in its license. Feedback you choose to send us may be used to improve VantagePeers without obligation to you.',
      },
      {
        heading: '11. Warranties',
        body: 'To the extent permitted by law, VantagePeers is provided “as is” and “as available”, without warranties of any kind, express or implied, including fitness for a particular purpose. Outputs produced by AI agents using VantagePeers are your responsibility to review.',
      },
      {
        heading: '12. Limitation of liability',
        body: 'To the extent permitted by law, we are not liable for indirect or consequential losses, including loss of profits, revenue or data. Our total liability under these Terms is limited to [TO VERIFY: liability cap]. Nothing in these Terms limits liability that cannot be limited by law.',
      },
      {
        heading: '13. Governing law and courts',
        body: 'These Terms are governed by [TO VERIFY: governing law]. Any dispute shall be submitted to [TO VERIFY: competent courts].',
      },
      {
        heading: '14. Changes to these Terms',
        body: 'We may update these Terms. The effective date at the top of this page indicates the current version. Material changes will be notified to account holders before they take effect. Continued use after that date constitutes acceptance of the updated Terms.',
      },
      {
        heading: '15. Contact',
        body: 'Legal notices: [TO VERIFY: contact email for legal notices]. Privacy requests: laurent@perello.fr (as stated in our Privacy Policy).',
      },
    ],
  },
  fr: {
    title: 'Conditions d’utilisation',
    effectiveDate: 'Date d’entrée en vigueur : [TO VERIFY: date d’entrée en vigueur]',
    sections: [
      {
        heading: '1. Prestataire',
        body: 'Les présentes conditions d’utilisation (les « Conditions ») régissent l’accès à VantagePeers et son utilisation. VantagePeers est fourni par Perello Consulting / ElPi Corp, représenté par Laurent Perello (tel qu’identifié dans notre Politique de confidentialité). Forme juridique : [TO VERIFY: dénomination et forme juridique de l’entité]. Siège social : [TO VERIFY: adresse du siège social]. Numéro d’immatriculation : [TO VERIFY: numéro d’immatriculation]. Numéro de TVA : [TO VERIFY: numéro de TVA].',
      },
      {
        heading: '2. Deux produits distincts',
        body: 'VantagePeers est proposé sous la forme de deux produits distincts. VantagePeers Cloud est un service hébergé et multi-tenant que nous opérons, auquel vous accédez via des clients MCP tels que Claude, ChatGPT, Claude Code, Codex et tout IDE compatible avec le Model Context Protocol (MCP). VantagePeers Self-host est un produit séparé : vous installez, exécutez et exploitez le logiciel sur votre propre infrastructure. Les articles 4 à 8 s’appliquent uniquement à VantagePeers Cloud. L’article 9 s’applique uniquement à VantagePeers Self-host. Tous les autres articles s’appliquent aux deux.',
      },
      {
        heading: '3. Usage professionnel',
        body: 'VantagePeers est une offre destinée aux professionnels. En acceptant les présentes Conditions, vous confirmez agir pour le compte d’une entreprise ou d’une organisation et avoir le pouvoir de l’engager. Si vous n’acceptez pas ces Conditions, n’utilisez pas VantagePeers.',
      },
      {
        heading: '4. VantagePeers Cloud — comptes et accès',
        body: 'Vous vous connectez avec un fournisseur d’identité pris en charge (par exemple Google). Vous êtes responsable de toute activité menée sous votre compte et votre organisation, de la confidentialité de vos identifiants et jetons d’accès, ainsi que des clients MCP que vous connectez à votre espace. Les clients MCP tiers (tels que Claude, ChatGPT, Claude Code ou Codex) sont régis par les conditions de leurs propres fournisseurs ; nous n’en sommes pas responsables.',
      },
      {
        heading: '5. VantagePeers Cloud — usage acceptable',
        body: 'Il vous est interdit : d’utiliser le service en violation du droit applicable ; de tenter d’accéder aux données d’un autre tenant ou de contourner les contrôles d’accès ; de sonder, scanner ou tester la vulnérabilité du service sans notre accord écrit préalable ; de perturber ou surcharger le service ; de revendre le service sans notre accord écrit.',
      },
      {
        heading: '6. VantagePeers Cloud — vos données',
        body: 'Vous conservez tous les droits sur les données que vous stockez dans VantagePeers Cloud (mémoires, messages, tâches, missions et contenus associés). Nous les traitons uniquement pour fournir et sécuriser le service, comme décrit dans notre Politique de confidentialité. Les données de chaque organisation sont isolées de celles des autres tenants. Un accord de traitement des données (DPA) est disponible sur demande (comme indiqué dans notre Politique de confidentialité). Référence du DPA : [TO VERIFY: référence de l’accord de traitement des données].',
      },
      {
        heading: '7. VantagePeers Cloud — tarifs, facturation et remboursements',
        body: 'Tarifs : [TO VERIFY: tarifs de VantagePeers Cloud]. Facturation : [TO VERIFY: périodicité de facturation, moyen et conditions de paiement]. Remboursements : [TO VERIFY: politique de remboursement].',
      },
      {
        heading: '8. VantagePeers Cloud — disponibilité, suspension et résiliation',
        body: 'Nous nous efforçons de maintenir le service disponible sans garantir un fonctionnement ininterrompu. Niveau de service : [TO VERIFY: engagement de niveau de service, le cas échéant]. Nous pouvons suspendre un accès qui enfreint l’article 5 ou met en danger le service ou d’autres tenants. Vous pouvez cesser d’utiliser le service à tout moment. La conservation et la suppression des données après résiliation suivent notre Politique de confidentialité.',
      },
      {
        heading: '9. VantagePeers Self-host',
        body: 'VantagePeers Self-host est un logiciel que vous exécutez vous-même. Son utilisation est régie par la licence distribuée avec son code source. Vous êtes seul responsable de l’infrastructure, de la configuration, de la sécurité, des sauvegardes et des données de votre installation ; nous ne l’hébergeons pas et n’avons aucun accès aux données qu’elle contient. Conditions commerciales du Self-host, le cas échéant : [TO VERIFY: conditions commerciales, tarifs et support du Self-host].',
      },
      {
        heading: '10. Propriété intellectuelle',
        body: 'Nous conservons tous les droits sur VantagePeers, son logiciel, sa documentation et sa marque, à l’exception des droits qui vous sont concédés par les présentes Conditions et, pour VantagePeers Self-host, par sa licence. Les retours que vous choisissez de nous adresser peuvent servir à améliorer VantagePeers sans obligation envers vous.',
      },
      {
        heading: '11. Garanties',
        body: 'Dans la mesure permise par la loi, VantagePeers est fourni « en l’état » et « selon disponibilité », sans garantie d’aucune sorte, expresse ou implicite, y compris d’adéquation à un usage particulier. Il vous appartient de vérifier les résultats produits par des agents IA utilisant VantagePeers.',
      },
      {
        heading: '12. Limitation de responsabilité',
        body: 'Dans la mesure permise par la loi, nous ne sommes pas responsables des dommages indirects, y compris la perte de bénéfices, de chiffre d’affaires ou de données. Notre responsabilité totale au titre des présentes Conditions est limitée à [TO VERIFY: plafond de responsabilité]. Rien dans ces Conditions ne limite une responsabilité qui ne peut l’être légalement.',
      },
      {
        heading: '13. Droit applicable et juridiction',
        body: 'Les présentes Conditions sont régies par [TO VERIFY: droit applicable]. Tout litige sera soumis à [TO VERIFY: tribunaux compétents].',
      },
      {
        heading: '14. Modification des Conditions',
        body: 'Nous pouvons mettre à jour ces Conditions. La date d’entrée en vigueur en haut de cette page indique la version en cours. Toute modification substantielle est notifiée aux titulaires de compte avant son entrée en vigueur. L’utilisation continue après cette date vaut acceptation des Conditions mises à jour.',
      },
      {
        heading: '15. Contact',
        body: 'Notifications légales : [TO VERIFY: adresse email pour les notifications légales]. Demandes relatives aux données personnelles : laurent@perello.fr (comme indiqué dans notre Politique de confidentialité).',
      },
    ],
  },
};

const PLACEHOLDER = /(\[TO VERIFY:[^\]]*\])/;

// Renders text with every "[TO VERIFY: ...]" placeholder highlighted so an
// unconfirmed legal fact is never mistaken for a confirmed one.
function withPlaceholders(text: string) {
  return text.split(PLACEHOLDER).map((part, i) =>
    PLACEHOLDER.test(part) ? (
      <mark
        key={i}
        data-placeholder="to-verify"
        className="rounded bg-amber-100 px-1 text-amber-900 dark:bg-amber-900/40 dark:text-amber-100"
      >
        {part}
      </mark>
    ) : (
      part
    ),
  );
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = content[locale as keyof typeof content] || content.en;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <a
          href={locale === 'fr' ? '/fr' : '/'}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
        >
          &larr; {locale === 'fr' ? 'Retour' : 'Back'}
        </a>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
          {t.title}
        </h1>
        <p className="text-sm text-muted-foreground mb-12">
          {withPlaceholders(t.effectiveDate)}
        </p>

        <div className="space-y-8">
          {t.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-semibold mb-3">{section.heading}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {withPlaceholders(section.body)}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
