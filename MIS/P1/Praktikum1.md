
# Hintergrund

Die AlpenBrau GmbH ist eine mittelständische Brauerei mit über 100 Jahren Tradition, Sitz in Garmisch-Partenkirchen und etwa 200 Mitarbeitenden. Das Unternehmen vertreibt seine Produkte:
    klassisch über Supermärkte und Getränkemärkte,
    zunehmend über den eigenen Online-Shop, mit Lieferung deutschlandweit,
    und testet derzeit einen B2B-Abo-Service für Gastronomie-Betriebe.

In den letzten zwei Jahren hat sich das Geschäft stark verändert:
    Wachstumsdruck durch neue Marktteilnehmer mit digitalen Geschäftsmodellen
    Zunehmende Online-Kund:innen, was neue Anforderungen an Logistik & Support bringt
    Kostensteigerungen bei Rohstoffen (Hopfen, Malz) und Energie
    Steigende Erwartungen des Managements an datenbasierte Entscheidungen

Die Geschäftsführung (GF) hat beschlossen: „Wir brauchen ein zukunftsfähiges Management Information System, um schneller, fundierter und automatisiert Entscheidungen treffen zu können.“

Stakeholder & Anforderungen Geschäftsführung (GF)
    Wöchentliche KPI-Dashboards (Absatz, Umsatz, Retouren, Lagerbestände)
    Frühwarnsystem bei sinkender Marge oder Materialverknappung
    Vergleich von Filialumsätzen und Online-Shop

Marketing
    Echtzeit-Analyse von Kampagnen-Performance
    Zielgruppenanalysen aus Online-Shop und CRM-Daten
    Schnittstelle zu Social Media Ads & Google Analytics

Vertrieb
    Regionale Verkaufsstatistiken
    Umsatzentwicklung nach Kundensegmenten
    Prognose-Tool für saisonale Schwankungen (z. B. Oktoberfest)

Produktion
    Anbindung von Produktionssystemen (Sensorik, IoT-Temperatursensoren in Lagertanks)
    Optimierung von Chargenplanung anhand Absatzprognosen
    Rückverfolgbarkeit bei Qualitätsproblemen

IT & Datenschutz
    DSGVO-konforme Datenverarbeitung
    Anbindung vorhandener Systeme (SAP ERP, Magento Shop, Excel-Reports)
    Zukunftssicherheit & Skalierbarkeit

Technische Rahmenbedingungen
    Vorhandene Systeme: SAP ERP, Magento E-Commerce, einige Excel-Analysen, sowie ein älterer SQL-Server
    IT-Team ist klein (3 Personen)
    MIS soll schrittweise eingeführt werden (Proof of Concept → Pilot → Rollout)

Herausforderungen
    Datenqualität & -konsistenz zwischen Abteilungen
    Unterschiedliche Begrifflichkeiten („Umsatz“ ≠ „Netto-Umsatz“)
    Offline- und Online-Daten sollen zusammengeführt werden
    Misstrauen einzelner Abteilungen gegenüber neuen Tools

## Ziel der Übung

Das Projektteam (Sie) soll einen geeigneten MIS-Technologie-Stack vorschlagen, der sowohl technisch realisierbar, wirtschaftlich sinnvoll als auch nutzerfreundlich ist. Der Fokus liegt auf:
    einer durchdachten Stack-Auswahl,
    einem Verständnis für die Anforderungen der Stakeholder,
    und einer Begründung, wie der Stack diesen Anforderungen gerecht wird.

### Hinweise

Teil 1: Stakeholder & Anforderungen analysieren
    Wer braucht was?
    Wo liegen Zielkonflikte?
    Welche Datenquellen sind kritisch?

Teil 2: Stack-Auswahl (inkl. Begründung)
    Nutzt eine erweiterte Tabelle mit Bezügen zu Stakeholdern

Teil 3: Pitch an die Geschäftsführung - schriftliche Abgabe: 1 Seite, 1facher Zeilenabstand, Arial 11 Pt, 3cm Seitenränder.

Teil 4: Reflexion
    Wie würdet ihr die Einführung gestalten?
    Welche Widerstände erwartet ihr?
    Was wäre euer MVP (Minimum Viable Product) für den ersten Prototyp?



# Tech Stack

|   | Software  | Stakeholder |   |
| - | --------- | ----------- | - |
|   | SAP ERP   | Geschäftsführung | |
| + | PowerBI   | Geschäftsführung | KPIs erstellen, Statistiken und Prognosen, Günstig, DSGVO Konform, Zukunftssicher, Kompatibel mit Excel und SAP |
| + | BigQuery  | Geschäftsführung | Datenmanagement und Analysen |
|   | Magneto   | Vertrieb | |
| + | SAP ME/MII | Produktion | Für Produktion, Knüpft an vorhandenes SAP system |
| + | Google Looker | Marketing | Marketinganalyse mithilfe von Google Analytics, CRM, Magento E-Shop Einbindung |
| - | SAP server | - | Obsolet