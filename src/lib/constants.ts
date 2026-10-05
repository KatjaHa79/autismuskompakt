// Zentral verwaltete URLs. Änderungen müssen nur hier ein einziges Mal
// vorgenommen werden.

// Ziel der "Kostenloser Leitfaden"-Schaltflächen: die interne Seite mit dem
// eingebetteten Brevo-Anmeldeformular (nicht direkt die externe
// Brevo-Formular-URL, siehe src/pages/kostenloser-leitfaden/index.astro).
// Verwendet im Header und auf /materialien/.
export const BREVO_LEITFADEN_URL = "/kostenloser-leitfaden/";

// TODO (Katja): Platzhalter – durch die echte URL des Etsy-Shops
// "AutismusStyle" ersetzen (z. B. https://www.etsy.com/shop/AutismusStyle).
// Verwendet in src/pages/index.astro (Shop-Abschnitt) und im Footer.
// Die Produkt-Eintragsdatei src/content/produkte/autismusstyle-etsy-shop.yaml
// enthält denselben Platzhalter zusätzlich separat (YAML-Inhalte können
// diese Konstante nicht importieren) – bitte dort ebenfalls ersetzen.
export const ETSY_SHOP_URL = "ETSY_SHOP_URL";
