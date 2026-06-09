# Ablefy Wachstumsallianz 2026

Statische Website und Pitch-Strecke für die Wachstumsallianz von ablefy mit Social Brands und AT7 Media. Alle Seiten sind reines HTML mit einem gemeinsamen Design-System, ohne Build-Schritt.

## Seiten

| Datei | Inhalt |
| --- | --- |
| `index.html` | Übersicht und Einstieg, verlinkt alle weiteren Seiten |
| `ablefy_pitch_wachstumsallianz.html` | Pitch der Wachstumsallianz |
| `ablefy_deal_hub.html` | Deal Hub mit den drei Säulen und dem Angebot |
| `ablefy_briefing_kunde.html` | Briefing für den Kunden |
| `ablefy_roadmap_intern.html` | Interne Roadmap |
| `ablefy_zukunft_kollaborationen.html` | Ausblick auf künftige Kollaborationen |
| `ablefy_sales_os_landingpage.html` | Landingpage für Sales OS |
| `ablefy_freebie_funnel.html` | Freebie-Funnel |

## Design-System

Das gemeinsame Design liegt in `assets/design-system/`:

- `ablefy.css` enthält Farben, Typografie und Basiskomponenten.
- `ablefy-components.css` enthält Mockups, Sektionen und größere Bausteine.

Markenfarben, Schriften und Logos werden über CSS-Variablen und die Dateien in `assets/` gepflegt. Jede Seite bindet beide Stylesheets ein und ergänzt nur seitenspezifische Helfer im `<style>`-Block.

## Lokal ansehen

Die Seiten lassen sich direkt im Browser öffnen oder über einen kleinen Server ausliefern:

```bash
python3 -m http.server 8080
# danach http://localhost:8080 aufrufen
```

## Deployment

Das Projekt liegt auf Vercel und wird als statische Seite ausgeliefert. `vercel.json` aktiviert saubere URLs, sodass `ablefy_deal_hub.html` auch unter `/ablefy_deal_hub` erreichbar ist. Ein Push auf den `main`-Branch löst ein neues Deployment aus.

## Hinweis

Die Seiten sind ein Entwurf mit teils noch grober Datenlage. Platzhalter und Beispielzahlen werden mit den finalen Informationen aus dem ablefy-Team ersetzt.
