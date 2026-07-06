'use client';

import { useEffect, useState } from 'react';

type ConsentSettings = {
  necessary: true;
  analytics: boolean;
  affiliate: boolean;
};

type StoredConsent = ConsentSettings & {
  savedAt?: string;
};

const storageKey = 'comparateurpro-cookie-consent';

const defaultSettings: ConsentSettings = {
  necessary: true,
  analytics: false,
  affiliate: false,
};

export function CookieConsent() {
  const [isReady, setIsReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState<ConsentSettings>(defaultSettings);

  useEffect(() => {
    const savedConsent = window.localStorage.getItem(storageKey);

    if (savedConsent) {
      try {
        const parsedConsent = JSON.parse(savedConsent) as Partial<StoredConsent>;
        setSettings({
          necessary: true,
          analytics: Boolean(parsedConsent.analytics),
          affiliate: Boolean(parsedConsent.affiliate),
        });
      } catch {
        window.localStorage.removeItem(storageKey);
        setIsOpen(true);
      }
    } else {
      setIsOpen(true);
    }

    setIsReady(true);
  }, []);

  function saveConsent(nextSettings: ConsentSettings) {
    window.localStorage.setItem(
      storageKey,
      JSON.stringify({
        ...nextSettings,
        savedAt: new Date().toISOString(),
      }),
    );
    setSettings(nextSettings);
    setIsOpen(false);
    setShowSettings(false);
  }

  function acceptAll() {
    saveConsent({
      necessary: true,
      analytics: true,
      affiliate: true,
    });
  }

  function rejectAll() {
    saveConsent(defaultSettings);
  }

  function saveCustom() {
    saveConsent(settings);
  }

  if (!isReady) {
    return null;
  }

  return (
    <>
      {isOpen && (
        <section
          aria-labelledby="cookie-consent-title"
          className="fixed inset-x-0 bottom-0 z-[80] px-4 pb-4 sm:px-6 sm:pb-6"
        >
          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/20">
            <div className="grid gap-0 lg:grid-cols-[1fr_360px]">
              <div className="p-5 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-wide text-indigo-600">Gestion des cookies</p>
                <h2 id="cookie-consent-title" className="mt-2 text-xl font-extrabold text-slate-950">
                  Vos préférences de confidentialité
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  ComparateurPro utilise les données nécessaires au fonctionnement du site. Avec votre accord, nous
                  pouvons aussi mesurer l'audience et améliorer les liens d'affiliation. Vous pouvez accepter, refuser
                  ou personnaliser vos choix à tout moment.
                </p>

                {showSettings && (
                  <div className="mt-5 space-y-3">
                    <ConsentRow
                      title="Cookies nécessaires"
                      description="Indispensables pour afficher le site et mémoriser votre choix."
                      checked
                      disabled
                      onChange={() => undefined}
                    />
                    <ConsentRow
                      title="Mesure d'audience"
                      description="Aide à comprendre les pages consultées et les contenus les plus utiles."
                      checked={settings.analytics}
                      onChange={(checked) => setSettings((current) => ({ ...current, analytics: checked }))}
                    />
                    <ConsentRow
                      title="Affiliation"
                      description="Aide à suivre les clics vers les partenaires, notamment Amazon, lorsque c'est nécessaire."
                      checked={settings.affiliate}
                      onChange={(checked) => setSettings((current) => ({ ...current, affiliate: checked }))}
                    />
                  </div>
                )}

                <a className="mt-4 inline-block text-sm font-semibold text-indigo-600 hover:text-indigo-700" href="/cookies">
                  Lire la politique cookies
                </a>
              </div>

              <div className="border-t border-slate-100 bg-slate-50 p-5 sm:p-6 lg:border-l lg:border-t-0">
                <div className="grid gap-3">
                  <button
                    type="button"
                    onClick={acceptAll}
                    className="rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Tout accepter
                  </button>
                  <button
                    type="button"
                    onClick={rejectAll}
                    className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-800 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Tout refuser
                  </button>
                  {showSettings ? (
                    <button
                      type="button"
                      onClick={saveCustom}
                      className="rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-3 text-sm font-bold text-indigo-700 transition hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Enregistrer mes choix
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setShowSettings(true)}
                      className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Personnaliser
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 left-4 z-[70] rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-lg shadow-slate-900/10 transition hover:border-indigo-200 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Cookies
        </button>
      )}
    </>
  );
}

type ConsentRowProps = {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
};

function ConsentRow({ title, description, checked, disabled = false, onChange }: ConsentRowProps) {
  return (
    <label className="flex items-start justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4">
      <span>
        <span className="block text-sm font-bold text-slate-900">{title}</span>
        <span className="mt-1 block text-xs leading-5 text-slate-500">{description}</span>
      </span>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-1 h-5 w-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
      />
    </label>
  );
}
