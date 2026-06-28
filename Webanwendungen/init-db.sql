
CREATE TABLE IF NOT EXISTS public.project (
  id int GENERATED ALWAYS AS IDENTITY NOT NULL UNIQUE,
  title varchar(255) NOT NULL,
  shortDescription varchar(255) NOT NULL,
  longDescription varchar(1024) NOT NULL,
  logo varchar(255) NOT NULL,
  primaryResponsible varchar(255) NOT NULL,
  startDate date NOT NULL,
  endDate date NOT NULL
);

CREATE TABLE IF NOT EXISTS public.task (
  id int GENERATED ALWAYS AS IDENTITY NOT NULL UNIQUE,
  shortDescription varchar(255) NOT NULL,
  longDescription varchar(255) NOT NULL,
  projectId INT NOT NULL,
  CONSTRAINT fk_project FOREIGN KEY (projectId) REFERENCES public.project(id)
);

CREATE TABLE IF NOT EXISTS public.artifact (
  id int GENERATED ALWAYS AS IDENTITY NOT NULL UNIQUE,
  title varchar(255) NOT NULL,
  shortDescription varchar(255) NOT NULL,
  longDescription varchar(255) NOT NULL,
  planedWorkingTime INTERVAL NOT NULL,
  realTime INTERVAL NOT NULL,
  taskId INT NOT NULL,
  CONSTRAINT fk_task FOREIGN KEY (taskId) REFERENCES public.task(id)
);


-- creates a schema or initial table
-- CREATE TABLE IF NOT EXISTS sample (
--   id SERIAL PRIMARY KEY,
--   name TEXT NOT NULL,
--   created_at TIMESTAMP DEFAULT now()
-- );


INSERT INTO public.project 
  (title, shortDescription, longDescription, logo, primaryResponsible, startDate, endDate)
  VALUES 
  (
    'Implementierung des Projektmanagers',
    'Das Semesterprojekt für WBA.',
    'In diesem Projekt lernen Sie die Grundlangen der Webentwicklung an einem einfachen Projekt kennen.',
    'https://scl.fh-bielefeld.de/WBA/projectmanager.avif',
    'Grit Behrens',
    '2024-04-01 08:20:28',
    '2024-07-17 08:20:28'
  ),
  (
    'Hochwasserfrühwarnsystem',
    'KI basiertes Hochwasserfrühwarnsystem',
    '<h1>Das Werre-Hochwasserfrühwarnsystem</h1><h2>Ziele</h2>In der Modellregion Werre soll ein Hochwasserfrühwarnsystem mit der Hilfe von KI und einer schicken Weboberfläche entwickelt werden.<br><h2>Datenquellen</h2>Es müssen Daten aus zahlreichen APIs abgerufen und in einer Datenbank zusammengeführt werden.<br><h3>Wetterdaten</h3>Wetterdaten werden vom DWD bezogen. Die offenen Schnittstellen werden dazu genutzt, ebenso wie die Datenexporte historischer Daten.<h3>Pegelmessstationen</h3>Daten von Pgelmesstationen werden über das WasserNetz-NRW beuzogen.<h3>Satteliteninformationen</h3>Weitere Daten werden aus den Satteliten der ESA Beobachtungssateliten bezogen.<h2>Laufzeit</h2>Das Projekt soll drei Jahre laufen.',
    'https://scl.fh-bielefeld.de/WBA/werre.avif',
    'Grit Behrens',
    '2024-10-01 08:20:28',
    '2027-12-31 08:20:28'
  ),
  (
    'SoSe Party!',
    'Die große Sommersemester Party',
    'Die Semesterparty des Sommersemesters. OpenAir auf dem Campus mit Live-Musik, Bratwürstchen und jede Menge Bier.',
    'https://scl.fh-bielefeld.de/WBA/party.jpg',
    'Studi Team',
    '2024-04-01 08:20:28',
    '2024-07-17 08:20:28'
  ),
  (
    'Projekt ohne Arbeit',
    'Dieses Projekt hat keine Arbeit',
    'In diesem Projekt gibt es nichts zu tun, daher ist es sehr entspanennd.',
    'https://scl.fh-bielefeld.de/WBA/urlaub.avif',
    'SunDream',
    '2024-07-01 08:20:28',
    '2024-09-17 08:20:28'
  ),
  (
    'Das nächste tolle Projekt',
    'Hier entsteht ein neues Projekt',
    'Dieses Projekt wird erst noch geplant.',
    'https://scl.fh-bielefeld.de/WBA/neu.avif',
    'Studi Team',
    '2025-04-01 08:20:28',
    '2025-07-17 08:20:28'
  );

INSERT INTO public.task
  (shortDescription, longDescription, projectId)
  VALUES
  (
    'Konzeption - P1',
		'Konzeption des Projektmanagers',
		1
	),
	(
    'Implementierung - P1',
		'Implementierung des Projektmanagers',
		1
	),
	(
    'Wartung - P1',
		'Wartung des Projektmanagers',
		1
	),
	(
    'Konzeption - P2',
		'Konzeption des Frühwarnsystems',
		2
	),
	(
    'Implementierung - P2',
		'Implementierung des Frühwarnsystems',
		2
	),
	(
    'Wartung - P2',
		'Wartung des Frühwarnsystems',
		2
	),
	(
    'Planung :|',
		'Planung der Party',
		3
	),
	(
    'Durchführung :)',
		'Durchführung der Party',
		3
	),
	(
    'Aufräumen :(',
		'Das Aufträumen danach',
		3
	);

INSERT INTO public.artifact
  (title, shortDescription, longDescription, planedWorkingTime, realTime, taskId)
  VALUES
   (
    'Projekt 1 - ER-Diagramm',
    'ER-Diagramm erstellen',
    'Ein ER-Diagramm für den Projektmanager',
    '7 hours 30 minutes' ,
    '7 hours 50 minutes' ,
    1
  ),
  (
    'Projekt 1 - Klassen-Diagramm',
    'Klassen-Diagramm erstellen',
    'Ein Klassen-Diagramm für den Projektmanager',
    '5 hours 00 minutes' ,
    '4 hours 30 minutes' ,
    1
  ),
  (
    'Projekt 1 - UserStories',
    'User-Stories erstellen',
    'Die UserStories für den Projektmanager',
    '2 hours 00 minutes' ,
    '2 hours 10 minutes' ,
    1
  ),
  (
    'Projekt 1 - Webseitegerüst',
    'Webseitegerüst erstellen',
    'Das Webseitegerüst für den Projektmanager',
    '2 hours 00 minutes' ,
    '1 hours 40 minutes' ,
    2
  ),
  (
    'Projekt 1 - Startseite',
    'Startseite erstellen',
    'Die Startseite für den Projektmanager',
    '3 hours 00 minutes' ,
    '2 hours 40 minutes' ,
    2
  ),
  (
    'Projekt 1 - Projektübersicht',
    'Projektübersicht erstellen',
    'Die Projektübersicht für den Projektmanager',
    '3 hours 00 minutes' ,
    '3 hours 10 minutes' ,
    2
  ),
  (
    'Projekt 1 - Projekt-anlegen-Seite',
    'Projekt-anlegen-Seite erstellen',
    'Die Projekt-anlegen-Seite für den Projektmanager',
    '5 hours 00 minutes' ,
    '5 hours 00 minutes' ,
    2
  ),
  (
    'Projekt 1 - Weitere Seiten',
    'Weitere Seiten erstellen',
    'Die wieteren Seiten für den Projektmanager',
    '1 hours 00 minutes' ,
    '1 hours 00 minutes' ,
    2
  ),
  (
    'Projekt 1 - Wöchentliche Fehlerbehebungen',
    'Wöchentliche Fehlerbehebungen',
    'Wöchentliche Fehlerbehebungen für den Projektmanager',
    '3 hours 00 minutes' ,
    '3 hours 00 minutes' ,
    3
  ),
  (
    'Werre Frühwarnsystem - UserStories',
    'UserStories erstellen',
    'UserStories für das Frühwarnsystem',
    '10 hours 00 minutes' ,
    '11 hours 50 minutes' ,
    4
  ),
  (
    'Werre Frühwarnsystem - ER-Diagramm',
    'ER-Diagramm erstellen',
    'Ein ER-Diagramm für das Frühwarnsystem',
    '5 hours 30 minutes' ,
    '5 hours 50 minutes' ,
    4
  ),
  (
    'Werre Frühwarnsystem - Klassen-Diagramme',
    'Klassen-Diagramme erstellen',
    'Klassen-Diagramme für das Frühwarnsystem',
    '40 hours 00 minutes' ,
    '42 hours 00 minutes' ,
    4
  ),
  (
    'Werre Frühwarnsystem - Einarbeitung SmartMonitoring',
    'Einarbeitung SmartMonitoring',
    'Einarbeitung in das SmartMonitoring, das für die Datensammlung und Visualisierung genutzt werden soll.',
    '10 hours 00 minutes' ,
    '9 hours 40 minutes' ,
    5
  ),
  (
    'Werre Frühwarnsystem - Anbdingung Datenquellen',
    'Anbindung freier Datenquellen',
    'Anbindung freier Datenquellen. Importer konfigurieren, soweit verwendbar. Neue Importer schrieben wo nötig.',
    '80 hours 00 minutes' ,
    '82 hours 30 minutes' ,
    5
  ),
  (
    'Werre Frühwarnsystem - Erstellung Dashboard',
    'Erstellung eines Dashboards',
    'Dashboard für den Überblick über gesammelte Daten.',
    '16 hours 00 minutes' ,
    '16 hours 00 minutes' ,
    5
  ),
  (
    'Planung des Ablaufs',
    'Planung des Ablaufs der Party',
    'Wann findet was statt?',
    '25 hours 00 minutes' ,
    '25 hours 00 minutes' ,
    7
  ),
  (
    'Organisation Bands',
    'Bands organisieren',
    'Bands kontaktieren und angagieren.',
    '10 hours 00 minutes' ,
    '10 hours 00 minutes' ,
    7
  ),
  (
    'Feiern',
    'Die Party findet statt.',
    'Party durchführen, Einlasskontrolle, Gäste begrüßen, ...',
    '5 hours 00 minutes' ,
    '5 hours 00 minutes' ,
    8
  ),
  (
    'Aufräumen',
    'Danach muss alles wieder aufgeräumt werden.',
    'Bühne abbauen, Müll einsammeln, Installationen entfernen,...',
    '15 hours 00 minutes' ,
    '15 hours 00 minutes' ,
    9
  );