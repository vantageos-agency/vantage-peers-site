'use client';

import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import type { Locale } from './team-landing-page';

const content = {
  en: {
    tagline: 'Your complete AI team. Starting at EUR 490/month.',
    copyright: 'Perello Consulting / ElPi Corp. All rights reserved.',
    links: [
      { label: 'Teams', href: '#teams' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
    ],
    contact: 'Contact',
    switchLabel: 'Français',
  },
  fr: {
    tagline: 'Votre équipe IA complète. À partir de 490 EUR/mois.',
    copyright: 'Perello Consulting / ElPi Corp. Tous droits réservés.',
    links: [
      { label: 'Équipes', href: '#teams' },
      { label: 'Tarifs', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
    ],
    contact: 'Contact',
    switchLabel: 'English',
  },
};

interface TeamFooterProps {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

export function TeamFooter({ locale, onLocaleChange }: TeamFooterProps) {
  const t = content[locale];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12">
          {/* Logo and tagline */}
          <div>
            <a href="#hero" className="flex items-center gap-2 mb-4">
              <div className="size-8 rounded-lg bg-foreground flex items-center justify-center">
                <span className="text-background font-bold text-lg">V</span>
              </div>
              <span className="font-semibold text-lg">
                VantageOS <span className="text-muted-foreground">Team</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-6">
            {t.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="text-sm">
            <p className="font-medium mb-2">{t.contact}</p>
            <p className="text-muted-foreground">
              <a
                href="mailto:lp@alorsonsort.com"
                className="hover:text-foreground transition-colors"
              >
                lp@alorsonsort.com
              </a>
            </p>
            <p className="text-muted-foreground">
              <a
                href="https://t.me/laurentperello"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                @laurentperello
              </a>
            </p>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {t.copyright}
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onLocaleChange(locale === 'en' ? 'fr' : 'en')}
            className="gap-1.5"
          >
            <Globe className="size-4" />
            {t.switchLabel}
          </Button>
        </div>
      </div>
    </footer>
  );
}
