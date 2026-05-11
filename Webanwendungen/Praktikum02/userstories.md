# Webbasierte Anwendungen Praktikum 02
## 1. Userstories
| Titel                                | Rolle                           | Beschreibung                                                                                                                                             | Nutzen                                                                                                 |
|--------------------------------------|---------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| Startseite anzeigen                  | Projektmitglied                 | Als Projektmitglied möchte ich auf der Startseite eine klar strukturierte Übersicht mit Navigation und aktuellen Projekten sehen (neueste zuerst)        | damit ich ohne lange Einarbeitung direkt mit der Planung oder Bearbeitung eines Projekts beginnen kann |
| Projektübersicht anzeigen            | Projektmitglied                 | Als Projektmitglied möchte ich eine Übersicht aller Projekte mit Zeitangaben sehen                                                                       | damit ich Projekte vergleichen und den Aufwand besser einschätzen kann                                 |
| Projektseite anzeigen                | Projektmitglied                 | Als Projektmitglied möchte ich auf der Projektdetailseite alle Arbeitspakete, zugehörigen Artefakte sowie geplante und tatsächliche Zeitangaben einsehen | damit ich den Projektfortschritt bewerten und Abweichungen erkennen kann                               |
| Neues Projekt anlegen                | Projektleiter                   | Als Projektleiter möchte ich ein neues Projekt mit Name, Beschreibung und Startdatum anlegen, damit ich eine neue Planung beginnen kann                  | damit ich eine strukturierte Grundlage für die Planung eines Projekts schaffen kann                    |
| Planung definieren                   | Projektleiter                   | Als Projektleiter möchte ich für ein Projekt Arbeitsschritte und zugehörige Zeitaufwände festlegen                                                       | damit der Gesamtaufwand automatisch berechnet und besser eingeschätzt werden kann                      |
| Arbeitsaufwand automatisch berechnen | Projektleiter / Projektmitglied | Als Projektleiter / Projektmitglied möchte ich den berechneten Gesamtaufwand eines Projektes sehen                                                       | damit ich eine realistische Einschätzung des Arbeitsumfangs habe                                       |
| Arbeitschritte verwalten             | Projektleiter                   | Als Projektleiter möchte ich neue Arbeitsschritte definieren oder bestehende anpassaen können                                                            | damit ich die Planung an verschiedene Projekttypen anpassen kann                                       |
| Abweichungen analysieren             | Projektleiter                   | Als Projektleiter möchte ich den Unterschied zwischen geschätztem und tatsächlichen Arbeitsaufwand sehen                                                 | damit zukünftige Projekte besser geplant werden können                                                 |


## 3. Aufwandsabschätzung

## a) Überlegen Sie sich eine Strategie zur Abschätzung
Zur Abschätzung des Gesamtaufwands wird das System in einzelne funktionale Bestandteile zerlegt. Für jeden Bestandteil schätzen wir grob die Arbeitsdauer. Anschließend addieren wir die Einzelaufwände und fügen am Ende noch einen Puffer für unvorhergesehene Probleme hinzu.  
Die Strategie ist an die Bottom-Up-Schätzung angelehnt, bei der kleinere Teilaufgaben einzeln bewertet werden. So möchten wir eine realistischere Gesamteinschätzung erziehlen. 
## b) Welche Kennzahlen ziehen sie dafür heran?
- Seitenzahlen
- Erfahrungswerte
- Anzahl der Use Cases
- Team Kapazität
## c) Am Ende steht eine Zahl in Mann-Frau-Stunden, die sie erklären können sollen.
| Bereich                           | Aufwand |
| --------------------------------- | ------: |
| Anforderungsanalyse & Planung     |     4 h |
| User Stories & Mockups            |     6 h |
| Grundstruktur (Frontend/Backend)  |     8 h |
| Startseite                        |     3 h |
| Projektübersicht                  |     5 h |
| Projektdetailseite                |     6 h |
| Neues Projekt (Formulare + Logik) |     8 h |
| Arbeitsschritte verwalten         |     5 h |
| Aufwand berechnen (Logik)         |     6 h |
| Auswertung / Analyse              |     6 h |
| Datenmodell / Speicherung         |     6 h |
| Tests & Debugging                 |     6 h |
| Dokumentation                     |     4 h |
| Puffer              |     8 h |

insgesamt : 81 Stunden 