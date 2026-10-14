// Zentrale Datenquelle für das Autismus-Glossar (/glossar/). Inhalte stammen
// aus einer redaktionellen Arbeitsfassung und wurden vor der Übernahme auf
// sachliche Genauigkeit, Begriffsunterscheidung (Diagnose/Forschungskonzept/
// Community-Begriff/Rechtsbegriff) und aktuelle Rechtslage geprüft. Nur hier
// pflegen, nicht in der Seite duplizieren.

export interface GlossarEintrag {
  id: string;
  term: string;
  letter: string;
  definition: string;
  // Optionaler weiterführender Link zu einem ausführlichen Artikel auf der
  // Website (z. B. /neurodivergenz/). Rein additiv – ohne Angabe verhält
  // sich ein Eintrag exakt wie bisher.
  weiterfuehrenderLink?: { href: string; label: string };
}

export interface GlossarQuelle {
  title: string;
  url?: string;
}

export const GLOSSAR_QUELLEN: GlossarQuelle[] = [
  { title: "WHO – ICD-11", url: "https://icd.who.int/" },
  { title: "NICE – Autism spectrum disorder in adults (CG142)", url: "https://www.nice.org.uk/guidance/cg142" },
  { title: "SGB IX", url: "https://www.gesetze-im-internet.de/sgb_9_2018/" },
  { title: "§ 4 BGG", url: "https://www.gesetze-im-internet.de/bgg/__4.html" },
  { title: "SGB XI", url: "https://www.gesetze-im-internet.de/sgb_11/" },
  { title: "Versorgungsmedizin-Verordnung", url: "https://www.gesetze-im-internet.de/versmedv/" },
];

export const GLOSSAR_EINTRAEGE: GlossarEintrag[] = [
  {
    id: "adhs",
    term: "ADHS",
    letter: "A",
    definition:
      "ADHS ist eine neurologische Entwicklungsstörung, bei der unter anderem Schwierigkeiten mit Aufmerksamkeit, Impulssteuerung und/oder Hyperaktivität auftreten können. Autismus und ADHS können gemeinsam vorkommen. Beide Diagnosen werden eigenständig beurteilt.",
  },
  {
    id: "alexithymie",
    term: "Alexithymie",
    letter: "A",
    definition:
      "Alexithymie bezeichnet Schwierigkeiten, eigene Gefühle zu erkennen, zu unterscheiden oder sprachlich auszudrücken. Sie kann bei autistischen und nichtautistischen Menschen auftreten und bedeutet nicht, dass jemand keine Gefühle hat.",
  },
  {
    id: "alltagsassistenz",
    term: "Alltagsassistenz",
    letter: "A",
    definition:
      "Alltagsassistenz unterstützt bei Aufgaben wie Organisation, Terminen oder gesellschaftlicher Teilhabe. Ob Kosten übernommen werden, hängt vom individuellen Bedarf und den jeweiligen gesetzlichen Voraussetzungen ab.",
  },
  {
    id: "anpassungsdruck",
    term: "Anpassungsdruck",
    letter: "A",
    definition:
      "Anpassungsdruck entsteht, wenn Menschen ihre Verhaltensweisen oder Bedürfnisse zurückstellen, um Erwartungen anderer zu erfüllen. Anhaltender Anpassungsdruck kann mit Stress und Erschöpfung verbunden sein.",
  },
  {
    id: "audhs-audhd",
    term: "AuDHS / AuDHD",
    letter: "A",
    definition:
      "AuDHS beziehungsweise AuDHD ist eine informelle Bezeichnung für das gemeinsame Vorliegen von Autismus und ADHS. Die Kombination kann im Alltag gleichzeitig Bedürfnisse nach Struktur und Abwechslung mit sich bringen. Sie ist keine eigenständige Diagnose.",
  },
  {
    id: "autismus-spektrum",
    term: "Autismus-Spektrum",
    letter: "A",
    definition:
      "Das Autismus-Spektrum beschreibt die Vielfalt autistischer Entwicklungs- und Wahrnehmungsprofile. Es ist keine einfache Skala von „wenig“ bis „stark“ autistisch. Fähigkeiten, Belastungen und Unterstützungsbedarfe können sehr unterschiedlich sein.",
  },
  {
    id: "autismus-spektrum-stoerung-ass",
    term: "Autismus-Spektrum-Störung (ASS)",
    letter: "A",
    definition:
      "Autismus ist eine neurologische Entwicklungsstörung. Diagnostisch kennzeichnend sind anhaltende Besonderheiten der sozialen Kommunikation und Interaktion sowie eingeschränkte, repetitive oder unflexible Verhaltensmuster, Interessen oder Aktivitäten. Sensorische Besonderheiten können dazugehören. Die Merkmale beginnen in der Entwicklungsphase.",
  },
  {
    id: "autistisches-burnout",
    term: "Autistisches Burnout",
    letter: "A",
    definition:
      "Autistisches Burnout ist ein in Forschung und Community beschriebener Zustand tiefgreifender, häufig länger anhaltender Erschöpfung, der mit chronischer Überlastung und fehlender Unterstützung zusammenhängen kann. Es ist keine eigenständige Diagnose in ICD-11 oder DSM-5-TR. Andere Ursachen müssen mitbedacht werden.",
  },
  {
    id: "barrierefreiheit",
    term: "Barrierefreiheit",
    letter: "B",
    definition:
      "Barrierefreiheit bedeutet, dass gestaltete Lebensbereiche für Menschen mit Behinderungen grundsätzlich ohne besondere Erschwernis und möglichst ohne fremde Hilfe zugänglich und nutzbar sind. Dazu können auch digitale Angebote und verständliche Kommunikation gehören. Eine gesetzliche Definition enthält § 4 BGG.",
  },
  {
    id: "bedarfsermittlung",
    term: "Bedarfsermittlung",
    letter: "B",
    definition:
      "Bei der Bedarfsermittlung wird geprüft, welche Unterstützung für die gesellschaftliche Teilhabe erforderlich ist. Entscheidend sind die individuellen Auswirkungen und Bedarfe, nicht nur die Diagnose.",
  },
  {
    id: "behinderung",
    term: "Behinderung",
    letter: "B",
    definition:
      "Nach § 2 SGB IX können Beeinträchtigungen in Wechselwirkung mit Barrieren die gleichberechtigte Teilhabe voraussichtlich länger als sechs Monate hindern. Behinderung wird damit nicht allein als Eigenschaft einer Person verstanden.",
  },
  {
    id: "besondere-interessen-spezialinteressen",
    term: "Besondere Interessen / Spezialinteressen",
    letter: "B",
    definition:
      "Manche autistische Menschen beschäftigen sich intensiv und ausdauernd mit bestimmten Themen. Solche Interessen können Freude, Fachwissen, Orientierung und Selbstregulation fördern. Sie sind nicht grundsätzlich problematisch.",
  },
  {
    id: "blickkontakt",
    term: "Blickkontakt",
    letter: "B",
    definition:
      "Direkter Blickkontakt kann für manche autistische Menschen unangenehm oder ablenkend sein, während andere ihn problemlos nutzen. Wenig Blickkontakt ist kein zuverlässiger Hinweis auf Desinteresse, Unehrlichkeit oder mangelnde Aufmerksamkeit.",
  },
  {
    id: "camouflaging",
    term: "Camouflaging",
    letter: "C",
    definition:
      "Camouflaging umfasst Strategien, mit denen autistische Merkmale in sozialen Situationen verborgen oder ausgeglichen werden. Dazu kann das bewusste Nachahmen sozialer Verhaltensweisen gehören. Solche Strategien können anstrengend sein.",
  },
  {
    id: "chronische-ueberlastung",
    term: "Chronische Überlastung",
    letter: "C",
    definition:
      "Chronische Überlastung beschreibt einen länger anhaltenden Zustand, in dem Anforderungen die verfügbaren Ressourcen übersteigen. Sensorische Belastungen, soziale Erwartungen und fehlende Erholung können dazu beitragen. Es handelt sich nicht um eine eigenständige Autismusdiagnose.",
  },
  {
    id: "diagnostik",
    term: "Diagnostik",
    letter: "D",
    definition:
      "Die Autismusdiagnostik ist eine fachliche Beurteilung anhand der Entwicklungsgeschichte, aktueller Merkmale, klinischer Gespräche und gegebenenfalls standardisierter Verfahren. Ein Online-Fragebogen allein reicht für eine gesicherte Diagnose nicht aus.",
  },
  {
    id: "diskriminierung",
    term: "Diskriminierung",
    letter: "D",
    definition:
      "Diskriminierung bezeichnet eine Benachteiligung aufgrund geschützter Merkmale. Im deutschen Recht können insbesondere AGG und Behindertengleichstellungsrecht relevant sein. Nicht jede ungerechte Behandlung erfüllt automatisch die rechtlichen Voraussetzungen.",
  },
  {
    id: "double-empathy-problem",
    term: "Double Empathy Problem",
    letter: "D",
    definition:
      "Das Double Empathy Problem beschreibt Verständigungsprobleme zwischen Menschen mit unterschiedlichen Erfahrungs- und Kommunikationsweisen als mögliche wechselseitige Missverständnisse. Das Konzept wird insbesondere mit Damian Milton verbunden und ist keine eigenständige Diagnose.",
  },
  {
    id: "dyspraxie",
    term: "Dyspraxie",
    letter: "D",
    definition:
      "Dyspraxie beschreibt Schwierigkeiten bei der Planung, Koordination oder Ausführung von Bewegungen. Entwicklungsbedingte motorische Koordinationsstörungen können mit Autismus gemeinsam auftreten, sind aber nicht mit Autismus gleichzusetzen.",
  },
  {
    id: "echolalie",
    term: "Echolalie",
    letter: "E",
    definition:
      "Echolalie ist das unmittelbare oder zeitversetzte Wiederholen gehörter Wörter oder Sätze. Sie kann der Kommunikation, Verarbeitung oder Selbstregulation dienen und ist nicht automatisch bedeutungsloses Nachsprechen.",
  },
  {
    id: "eingliederungshilfe",
    term: "Eingliederungshilfe",
    letter: "E",
    definition:
      "Eingliederungshilfe umfasst Leistungen zur selbstbestimmten und gleichberechtigten Teilhabe für anspruchsberechtigte Menschen mit Behinderungen. Die rechtlichen Grundlagen finden sich insbesondere in Teil 2 des SGB IX. Welche Leistungen gewährt werden, hängt vom Einzelfall ab.",
  },
  {
    id: "empathie",
    term: "Empathie",
    letter: "E",
    definition:
      "Empathie umfasst unter anderem das Verstehen fremder Perspektiven und emotionales Mitgefühl. Autistische Menschen können empathisch sein; Schwierigkeiten beim Interpretieren sozialer Hinweise bedeuten nicht automatisch fehlende Anteilnahme.",
  },
  {
    id: "exekutive-funktionen",
    term: "Exekutive Funktionen",
    letter: "E",
    definition:
      "Exekutive Funktionen unterstützen Planung, Organisation, Handlungsbeginn, Arbeitsgedächtnis und flexibles Wechseln zwischen Aufgaben. Schwierigkeiten können bei Autismus vorkommen, sind aber nicht autismus-spezifisch.",
  },
  {
    id: "fruehfoerderung",
    term: "Frühförderung",
    letter: "F",
    definition:
      "Frühförderung bietet Kindern mit Entwicklungsauffälligkeiten oder Behinderungen und ihren Familien Unterstützung. Je nach Bedarf können heilpädagogische und therapeutische Angebote dazugehören. Voraussetzungen und Umfang sind individuell zu prüfen.",
  },
  {
    id: "gleichstellung",
    term: "Gleichstellung",
    letter: "G",
    definition:
      "Menschen mit einem GdB von 30 oder 40 können unter den Voraussetzungen des § 2 Absatz 3 SGB IX schwerbehinderten Menschen im Arbeitsleben gleichgestellt werden. Zuständig ist die Agentur für Arbeit. Eine Gleichstellung vermittelt nicht alle Nachteilsausgleiche eines Schwerbehindertenausweises.",
  },
  {
    id: "grad-der-behinderung-gdb",
    term: "Grad der Behinderung (GdB)",
    letter: "G",
    definition:
      "Der GdB bewertet die Auswirkungen gesundheitlicher Beeinträchtigungen auf die Teilhabe. Er wird in Zehnergraden von 20 bis 100 festgestellt; Diagnosen werden nicht einfach addiert. Ab einem GdB von 50 liegt bei Vorliegen der weiteren Voraussetzungen eine Schwerbehinderung vor.",
  },
  {
    id: "hyperfokus",
    term: "Hyperfokus",
    letter: "H",
    definition:
      "Hyperfokus ist eine informelle Bezeichnung für Phasen intensiver Konzentration. Andere Reize oder Bedürfnisse können dabei in den Hintergrund treten. Der Begriff ist kein eigenständiges Diagnosekriterium.",
  },
  {
    id: "hyperreaktivitaet",
    term: "Hyperreaktivität",
    letter: "H",
    definition:
      "Hyperreaktivität bezeichnet eine besonders starke Reaktion auf Sinnesreize wie Geräusche, Licht, Gerüche oder Berührungen. Welche Reize belastend sind, ist individuell verschieden.",
  },
  {
    id: "hyporeaktivitaet",
    term: "Hyporeaktivität",
    letter: "H",
    definition:
      "Hyporeaktivität bezeichnet eine vergleichsweise geringe oder verzögerte Reaktion auf bestimmte Reize. Hyper- und Hyporeaktivität können bei derselben Person in unterschiedlichen Bereichen auftreten.",
  },
  {
    id: "icd-10-icd-11",
    term: "ICD-10 / ICD-11",
    letter: "I",
    definition:
      "Die ICD ist die Internationale Klassifikation der Krankheiten der WHO. In der ICD-11 wird Autismus unter 6A02 eingeordnet. Für die Diagnoseverschlüsselung in Deutschland ist derzeit weiterhin die ICD-10-GM maßgeblich; die ICD-11 ist in Vorbereitung, aber noch nicht flächendeckend verbindlich eingeführt.",
  },
  {
    id: "inklusion",
    term: "Inklusion",
    letter: "I",
    definition:
      "Inklusion zielt darauf, gesellschaftliche Strukturen so zu gestalten, dass Menschen mit unterschiedlichen Voraussetzungen gleichberechtigt teilhaben können. Dazu gehört auch, Barrieren in Bildung, Arbeit und Alltag abzubauen.",
  },
  {
    id: "interozeption",
    term: "Interozeption",
    letter: "I",
    definition:
      "Interozeption bezeichnet die Wahrnehmung und Verarbeitung innerer Körpersignale, etwa im Zusammenhang mit Hunger, Atmung oder Herzschlag. Manche autistische Menschen erleben hier Besonderheiten. Die Forschung zeigt jedoch kein einheitliches Muster einer generell verminderten Interozeption.",
  },
  {
    id: "intoleranz-gegenueber-ungewissheit",
    term: "Intoleranz gegenüber Ungewissheit",
    letter: "I",
    definition:
      "Dieser psychologische Begriff beschreibt eine erhöhte Belastung durch unklare oder schwer vorhersehbare Situationen. Er wird auch im Zusammenhang mit Autismus erforscht, ist aber nicht autismus-spezifisch.",
  },
  {
    id: "kognitive-empathie",
    term: "Kognitive Empathie",
    letter: "K",
    definition:
      "Kognitive Empathie ist die Fähigkeit, Gedanken, Absichten oder Perspektiven anderer Menschen zu erschließen. Sie ist nicht gleichbedeutend mit emotionalem Mitgefühl.",
  },
  {
    id: "kognitive-flexibilitaet",
    term: "Kognitive Flexibilität",
    letter: "K",
    definition:
      "Kognitive Flexibilität ermöglicht es, Denkweisen, Aufgaben und Handlungsstrategien an neue Anforderungen anzupassen. Wie leicht das gelingt, hängt unter anderem von Stress und Situation ab.",
  },
  {
    id: "kommunikationshilfen",
    term: "Kommunikationshilfen",
    letter: "K",
    definition:
      "Kommunikationshilfen unterstützen den Ausdruck von Bedürfnissen, Gedanken und Entscheidungen, beispielsweise durch Bildkarten, Schrift, Apps oder Sprachausgabegeräte. Sie können dauerhaft oder situativ eingesetzt werden.",
  },
  {
    id: "leichte-sprache",
    term: "Leichte Sprache",
    letter: "L",
    definition:
      "Leichte Sprache ist eine besonders verständliche Form der Sprache nach bestimmten Gestaltungsregeln. Sie ist nicht mit Einfacher Sprache gleichzusetzen und wird nicht von allen autistischen Menschen benötigt.",
  },
  {
    id: "leistungen-zur-teilhabe",
    term: "Leistungen zur Teilhabe",
    letter: "L",
    definition:
      "Leistungen zur Teilhabe sollen unter gesetzlichen Voraussetzungen selbstbestimmte Lebensführung und gesellschaftliche Teilhabe unterstützen. Das SGB IX umfasst unter anderem medizinische Rehabilitation, Teilhabe am Arbeitsleben und soziale Teilhabe.",
  },
  {
    id: "masking",
    term: "Masking",
    letter: "M",
    definition:
      "Masking bezeichnet das Verbergen oder Unterdrücken autistischer Verhaltensweisen, um Erwartungen zu entsprechen oder negative Reaktionen zu vermeiden. Dies kann anstrengend sein. Der Begriff überschneidet sich mit Camouflaging.",
  },
  {
    id: "meltdown",
    term: "Meltdown",
    letter: "M",
    definition:
      "Meltdown ist ein nichtdiagnostischer Begriff für eine intensive Überlastungsreaktion mit vorübergehend stark eingeschränkter Selbstregulation. Sie kann unterschiedlich aussehen und ist nicht mit absichtlicher Manipulation gleichzusetzen.",
  },
  {
    id: "merkzeichen",
    term: "Merkzeichen",
    letter: "M",
    definition:
      "Merkzeichen im Schwerbehindertenausweis kennzeichnen bestimmte gesundheitliche Voraussetzungen und können Nachteilsausgleiche ermöglichen. Eine Autismusdiagnose begründet nicht automatisch ein Merkzeichen.",
  },
  {
    id: "monotropismus",
    term: "Monotropismus",
    letter: "M",
    definition:
      "Monotropismus ist ein theoretisches Modell, das eine starke Bündelung von Aufmerksamkeit auf wenige Themen oder Aufgaben beschreibt. Es wird zur Erklärung mancher autistischer Erfahrungen genutzt, ist aber kein diagnostisches Kriterium.",
  },
  {
    id: "nachteilsausgleich",
    term: "Nachteilsausgleich",
    letter: "N",
    definition:
      "Nachteilsausgleiche sollen behinderungsbedingte Nachteile ausgleichen, etwa bei Prüfungen oder im Arbeitsleben. Die Voraussetzungen richten sich nach dem jeweiligen Rechtsbereich; fachliche Anforderungen entfallen nicht automatisch.",
  },
  {
    id: "neurodivergent",
    term: "Neurodivergent",
    letter: "N",
    definition:
      "Neurodivergent ist ein nichtdiagnostischer Begriff für Menschen, deren neurologische Entwicklung oder Verarbeitung von gesellschaftlich als typisch betrachteten Mustern abweicht. Die Abgrenzung ist nicht einheitlich festgelegt.",
    weiterfuehrenderLink: { href: "/neurodivergenz/", label: "Neurodivergenz verstehen: Was bedeutet neurodivergent?" },
  },
  {
    id: "neurodiversitaet",
    term: "Neurodiversität",
    letter: "N",
    definition:
      "Neurodiversität bezeichnet die Vielfalt menschlicher neurologischer Entwicklung und Informationsverarbeitung. Der Begriff beschreibt die Vielfalt insgesamt und schließt das Bestehen von Behinderungen oder Unterstützungsbedarfen nicht aus.",
    weiterfuehrenderLink: { href: "/neurodivergenz/", label: "Neurodivergenz verstehen: Was bedeutet neurodivergent?" },
  },
  {
    id: "neurotypisch",
    term: "Neurotypisch",
    letter: "N",
    definition:
      "Neurotypisch ist eine nichtmedizinische Bezeichnung für neurologische Entwicklung und Verarbeitung, die im Allgemeinen als typisch betrachtet werden. Es handelt sich nicht um eine Diagnose.",
  },
  {
    id: "nonverbale-kommunikation",
    term: "Nonverbale Kommunikation",
    letter: "N",
    definition:
      "Nonverbale Kommunikation umfasst etwa Mimik, Gestik, Körperhaltung und Blickverhalten. Autistische Menschen können solche Signale anders nutzen oder interpretieren. Nichtsprechende Menschen können dennoch kommunizieren.",
  },
  {
    id: "overload-reizueberlastung",
    term: "Overload (Reizüberlastung)",
    letter: "O",
    definition:
      "Overload beschreibt eine Überlastung durch sensorische, soziale oder kognitive Anforderungen. Mögliche Folgen sind Anspannung, Erschöpfung und Schwierigkeiten beim Kommunizieren oder Handeln. Es handelt sich nicht um eine eigenständige Diagnose.",
  },
  {
    id: "persoenliches-budget",
    term: "Persönliches Budget",
    letter: "P",
    definition:
      "Das Persönliche Budget nach § 29 SGB IX ist eine Form der Leistungserbringung: Bestimmte bewilligte Leistungen können in der Regel als Geldleistung bereitgestellt und selbst organisiert werden. Es ist kein zusätzliches frei verfügbares Einkommen.",
  },
  {
    id: "pflegegrad",
    term: "Pflegegrad",
    letter: "P",
    definition:
      "Die fünf Pflegegrade beschreiben Beeinträchtigungen der Selbstständigkeit oder Fähigkeiten im Sinne der Pflegeversicherung. Eine Diagnose allein begründet keinen Pflegegrad; maßgeblich ist die gesetzlich geregelte Begutachtung.",
  },
  {
    id: "propriozeption",
    term: "Propriozeption",
    letter: "P",
    definition:
      "Propriozeption ist die Wahrnehmung von Körperstellung, Bewegung und eingesetzter Kraft. Sie unterscheidet sich von der Interozeption, die innere Körpersignale betrifft.",
  },
  {
    id: "reizfilterung",
    term: "Reizfilterung",
    letter: "R",
    definition:
      "Reizfilterung bezeichnet alltagssprachlich die Auswahl und Gewichtung von Sinnesinformationen. Die Vorstellung eines bei Autismus grundsätzlich „fehlenden Reizfilters“ ist wissenschaftlich zu vereinfachend.",
  },
  {
    id: "reizregulation",
    term: "Reizregulation",
    letter: "R",
    definition:
      "Reizregulation umfasst Möglichkeiten, sensorische Belastung zu beeinflussen, etwa durch Pausen, Rückzug, angepasste Beleuchtung oder selbstregulierende Bewegungen. Was hilft, ist individuell.",
  },
  {
    id: "routinen",
    term: "Routinen",
    letter: "R",
    definition:
      "Routinen sind wiederkehrende Abläufe, die Orientierung und Vorhersehbarkeit ermöglichen. Sie können entlasten; Veränderungen können bei manchen autistischen Menschen Stress auslösen.",
  },
  {
    id: "schwerbehinderung",
    term: "Schwerbehinderung",
    letter: "S",
    definition:
      "Eine Schwerbehinderung liegt in Deutschland grundsätzlich ab einem festgestellten GdB von 50 vor, wenn die weiteren Voraussetzungen des § 2 Absatz 2 SGB IX erfüllt sind.",
  },
  {
    id: "selbstregulation",
    term: "Selbstregulation",
    letter: "S",
    definition:
      "Selbstregulation umfasst Prozesse zur Steuerung von Aufmerksamkeit, Gefühlen, körperlicher Anspannung und Verhalten. Bei Überlastung können diese Fähigkeiten vorübergehend eingeschränkt sein.",
  },
  {
    id: "sensorische-ueberempfindlichkeit",
    term: "Sensorische Überempfindlichkeit",
    letter: "S",
    definition:
      "Sensorische Überempfindlichkeit beschreibt das besonders intensive oder unangenehme Erleben bestimmter Reize, etwa Geräusche, Licht oder Berührungen. Sie kann sich situationsabhängig verändern.",
  },
  {
    id: "shutdown",
    term: "Shutdown",
    letter: "S",
    definition:
      "Shutdown ist ein nichtdiagnostischer Begriff für eine Überlastungsreaktion, die sich durch Rückzug, reduzierte Reaktionsfähigkeit oder eingeschränkte Kommunikation zeigen kann. Andere Ursachen ähnlicher Symptome müssen berücksichtigt werden.",
  },
  {
    id: "soziale-kommunikation",
    term: "Soziale Kommunikation",
    letter: "S",
    definition:
      "Soziale Kommunikation umfasst sprachlichen und nichtsprachlichen Austausch in zwischenmenschlichen Situationen. Autistische Menschen können hier andere Muster zeigen, ohne grundsätzlich weniger Interesse an Beziehungen zu haben.",
  },
  {
    id: "stimming",
    term: "Stimming",
    letter: "S",
    definition:
      "Stimming bezeichnet wiederholte Bewegungen, Laute oder andere Handlungen, die unter anderem Selbstregulation, Konzentration oder Freude unterstützen können. Es ist nicht grundsätzlich behandlungsbedürftig.",
  },
  {
    id: "teilhabe",
    term: "Teilhabe",
    letter: "T",
    definition:
      "Teilhabe bedeutet die Möglichkeit, an gesellschaftlichen Lebensbereichen wie Bildung, Arbeit, Freizeit und Beziehungen gleichberechtigt mitzuwirken. Sie ist ein zentraler Begriff des SGB IX.",
  },
  {
    id: "theory-of-mind",
    term: "Theory of Mind",
    letter: "T",
    definition:
      "Theory of Mind bezeichnet das Erschließen von Gedanken, Absichten und Überzeugungen anderer. Die pauschale Behauptung, autistische Menschen hätten keine Theory of Mind, ist wissenschaftlich nicht haltbar.",
  },
  {
    id: "unterstuetzte-kommunikation-uk",
    term: "Unterstützte Kommunikation (UK)",
    letter: "U",
    definition:
      "Unterstützte Kommunikation umfasst Methoden, die gesprochene Sprache ergänzen oder ersetzen, etwa Symbole, Gebärden oder elektronische Kommunikationsgeräte. Sie kann Selbstbestimmung und Teilhabe ermöglichen.",
  },
  {
    id: "veraenderungsstress",
    term: "Veränderungsstress",
    letter: "V",
    definition:
      "Veränderungsstress ist eine beschreibende Bezeichnung für Belastung durch neue oder schwer vorhersehbare Situationen. Er ist keine eigenständige Diagnose.",
  },
  {
    id: "versorgungsmedizinische-grundsaetze",
    term: "Versorgungsmedizinische Grundsätze",
    letter: "V",
    definition:
      "Die Versorgungsmedizinischen Grundsätze sind Bestandteil der Versorgungsmedizin-Verordnung und dienen als Grundlage für die Bewertung des GdB. Einzelne Diagnosen werden nicht einfach addiert.",
  },
  {
    id: "wahrnehmungsverarbeitung",
    term: "Wahrnehmungsverarbeitung",
    letter: "W",
    definition:
      "Wahrnehmungsverarbeitung umfasst die Aufnahme, Auswahl, Verknüpfung und Interpretation von Sinnesinformationen. Unterschiede können bei Autismus auftreten und sind individuell verschieden.",
  },
  {
    id: "zielvereinbarung-persoenliches-budget",
    term: "Zielvereinbarung (Persönliches Budget)",
    letter: "Z",
    definition:
      "Nach § 29 Absatz 4 SGB IX schließen Leistungsträger und leistungsberechtigte Person beim Persönlichen Budget grundsätzlich eine Zielvereinbarung. Sie regelt mindestens Förder- und Leistungsziele, den Nachweis der Bedarfsdeckung, Qualitätssicherung sowie die Höhe des Teil- und Gesamtbudgets. Eine Ausnahme gilt, wenn ausschließlich Pflegekassen das Budget erbringen.",
  },

  // ---------------------------------------------------------------------
  // Erweiterung um 48 Begriffe (zweite Redaktionsrunde). IDs wurden an die
  // bestehende Transliterationskonvention angeglichen (ä/ö/ü → ae/oe/ue),
  // da die Ausgangsdatei Umlaute teils ersatzlos entfernt hatte. Die
  // Sortierung nach Buchstabe und Begriff erfolgt automatisch beim Rendern
  // der Seite (siehe src/pages/glossar/index.astro), daher reicht Anhängen.
  // ---------------------------------------------------------------------
  {
    id: "aac-augmentative-and-alternative-communication",
    term: "AAC (Augmentative and Alternative Communication)",
    letter: "A",
    definition:
      "AAC ist die englische Bezeichnung für Unterstützte Kommunikation. Dazu zählen Methoden, die gesprochene Sprache ergänzen oder ersetzen, etwa Symboltafeln, Gebärden oder elektronische Kommunikationshilfen. AAC kann unabhängig davon sinnvoll sein, ob eine Person sprechen kann oder nicht.",
  },
  {
    id: "adi-r",
    term: "ADI-R",
    letter: "A",
    definition:
      "Das Autism Diagnostic Interview – Revised (ADI-R) ist ein standardisiertes Interview zur Entwicklungs- und Verhaltensgeschichte, üblicherweise mit einer gut informierten Bezugsperson. Es kann die Autismusdiagnostik ergänzen, ersetzt aber keine umfassende klinische Beurteilung. Bei Erwachsenen stehen Informationen aus der frühen Entwicklung nicht immer vollständig zur Verfügung.",
  },
  {
    id: "ados-2",
    term: "ADOS-2",
    letter: "A",
    definition:
      "Die Autism Diagnostic Observation Schedule, zweite Ausgabe (ADOS-2), ist ein standardisiertes, strukturiertes Beobachtungsverfahren, das in der Autismusdiagnostik eingesetzt werden kann. Das Ergebnis ist ein Baustein der klinischen Gesamtbeurteilung und stellt für sich allein weder eine Diagnose noch einen Ausschluss von Autismus dar.",
  },
  {
    id: "anamnese",
    term: "Anamnese",
    letter: "A",
    definition:
      "Die Anamnese ist die systematische Erhebung der gesundheitlichen und biografischen Vorgeschichte. In der Autismusdiagnostik gehören dazu insbesondere die Entwicklung seit der Kindheit, aktuelle Erfahrungen, Belastungen und vorhandene Stärken. Informationen aus mehreren Quellen können hilfreich sein, müssen aber kritisch eingeordnet werden.",
  },
  {
    id: "angemessene-vorkehrungen",
    term: "Angemessene Vorkehrungen",
    letter: "A",
    definition:
      "Angemessene Vorkehrungen sind notwendige und geeignete Anpassungen im Einzelfall, die Menschen mit Behinderungen gleichberechtigte Teilhabe ermöglichen sollen, sofern sie keine unverhältnismäßige oder unbillige Belastung darstellen. Beispiele können angepasste Kommunikationswege oder eine reizärmere Arbeitsumgebung sein. Die konkreten Pflichten richten sich nach dem jeweiligen Rechtsrahmen.",
  },
  {
    id: "angststoerung",
    term: "Angststörung",
    letter: "A",
    definition:
      "Angststörungen sind psychische Erkrankungen, bei denen Angst oder Furcht anhaltend beziehungsweise wiederkehrend zu deutlicher Belastung oder Einschränkung führt. Sie können gemeinsam mit Autismus auftreten, sind aber nicht dessen notwendiger Bestandteil. Diagnostik und Unterstützung sollten die individuellen Kommunikations- und Wahrnehmungsbedürfnisse berücksichtigen.",
  },
  {
    id: "arbeitsassistenz",
    term: "Arbeitsassistenz",
    letter: "A",
    definition:
      "Arbeitsassistenz bezeichnet eine personelle Unterstützung bei der Ausübung einer beruflichen Tätigkeit. Unter bestimmten Voraussetzungen kann sie als Leistung zur Teilhabe am Arbeitsleben oder im Rahmen begleitender Hilfen im Arbeitsleben finanziert werden. Zuständigkeit und Anspruch hängen von der individuellen Situation und der einschlägigen Rechtsgrundlage ab.",
  },
  {
    id: "arbeitsplatzanpassung",
    term: "Arbeitsplatzanpassung",
    letter: "A",
    definition:
      "Arbeitsplatzanpassungen verändern Arbeitsbedingungen, damit Beschäftigte ihre Tätigkeit besser ausüben können. Dazu gehören beispielsweise Licht- und Lärmanpassungen, verlässliche Aufgabenabsprachen oder flexible Kommunikationswege. Ob eine konkrete Maßnahme rechtlich geschuldet oder förderfähig ist, richtet sich nach dem Einzelfall.",
  },
  {
    id: "auditive-verarbeitung",
    term: "Auditive Verarbeitung",
    letter: "A",
    definition:
      "Auditive Verarbeitung umfasst die Verarbeitung und Interpretation gehörter Informationen. Schwierigkeiten können beispielsweise das Verstehen von Sprache in lauter Umgebung betreffen. Sie sind nicht automatisch gleichbedeutend mit einer diagnostizierten auditiven Verarbeitungs- und Wahrnehmungsstörung.",
  },
  {
    id: "autismusdiagnostik-bei-erwachsenen",
    term: "Autismusdiagnostik bei Erwachsenen",
    letter: "A",
    definition:
      "Die Autismusdiagnostik bei Erwachsenen untersucht, ob die Merkmale seit der Entwicklungsphase bestehen und die aktuellen diagnostischen Kriterien erfüllen. Sie umfasst eine fachliche Gesamtbeurteilung unter Berücksichtigung der Lebensgeschichte und möglicher anderer oder zusätzlicher Diagnosen. Eine Diagnose lässt sich nicht allein aus einem Online-Fragebogen ableiten.",
  },
  {
    id: "autismusfreundliche-kommunikation",
    term: "Autismusfreundliche Kommunikation",
    letter: "A",
    definition:
      "Autismusfreundliche Kommunikation berücksichtigt unterschiedliche Bedürfnisse bei Sprache, Verarbeitung und Interaktion. Hilfreich können eindeutige Formulierungen, schriftliche Informationen, ausreichend Antwortzeit und das Vermeiden unnötiger Mehrdeutigkeit sein. Welche Anpassungen sinnvoll sind, sollte mit der jeweiligen Person geklärt werden.",
  },
  {
    id: "autistische-identitaet",
    term: "Autistische Identität",
    letter: "A",
    definition:
      "Autistische Identität beschreibt, welche Bedeutung Autismus für das eigene Selbstverständnis hat. Manche Menschen erleben Autismus als wichtigen Teil ihrer Identität, andere bevorzugen eine stärker medizinische Einordnung oder unterschiedliche Selbstbezeichnungen. Es gibt keine für alle verbindliche Sichtweise.",
  },
  {
    id: "betriebliches-eingliederungsmanagement-bem",
    term: "Betriebliches Eingliederungsmanagement (BEM)",
    letter: "B",
    definition:
      "Arbeitgeber müssen Beschäftigten ein betriebliches Eingliederungsmanagement anbieten, wenn diese innerhalb eines Jahres länger als sechs Wochen ununterbrochen oder wiederholt arbeitsunfähig waren (§ 167 Abs. 2 SGB IX). Ziel ist, Arbeitsunfähigkeit zu überwinden, erneuter Arbeitsunfähigkeit vorzubeugen und den Arbeitsplatz zu erhalten. Die Teilnahme ist freiwillig.",
  },
  {
    id: "depression",
    term: "Depression",
    letter: "D",
    definition:
      "Eine Depression ist eine psychische Erkrankung, die unter anderem durch anhaltend gedrückte Stimmung oder Interessenverlust und weitere Symptome gekennzeichnet sein kann. Sie kann auch bei autistischen Menschen auftreten. Veränderungen gegenüber dem persönlichen Ausgangszustand sind bei der Beurteilung besonders wichtig.",
  },
  {
    id: "diagnostische-kriterien",
    term: "Diagnostische Kriterien",
    letter: "D",
    definition:
      "Diagnostische Kriterien sind festgelegte Merkmale und Bedingungen, anhand derer Fachpersonen eine Diagnose beurteilen. Bei Autismus betreffen sie unter anderem soziale Kommunikation und Interaktion sowie eingeschränkte oder repetitive Muster. Die Einordnung berücksichtigt Entwicklung, Kontext und funktionelle Auswirkungen.",
  },
  {
    id: "differenzialdiagnostik",
    term: "Differenzialdiagnostik",
    letter: "D",
    definition:
      "Differenzialdiagnostik bedeutet, mögliche andere oder zusätzliche Erklärungen für bestimmte Merkmale zu prüfen. Bei einer Autismusabklärung können beispielsweise ADHS, Angststörungen, Traumafolgen oder Sprach- und Entwicklungsbesonderheiten relevant sein. Mehrere Erkrankungen oder Entwicklungsbedingungen können gleichzeitig vorliegen.",
  },
  {
    id: "ehlers-danlos-syndrome-eds",
    term: "Ehlers-Danlos-Syndrome (EDS)",
    letter: "E",
    definition:
      "Die Ehlers-Danlos-Syndrome sind eine Gruppe erblicher Bindegewebserkrankungen mit unterschiedlichen Merkmalen, beispielsweise Gelenkhypermobilität und Gewebebesonderheiten. Überschneidungen mit Autismus werden erforscht. Aus einer Autismusdiagnose lässt sich jedoch keine EDS-Diagnose ableiten und umgekehrt.",
  },
  {
    id: "entscheidungsermuedung",
    term: "Entscheidungsermüdung",
    letter: "E",
    definition:
      "Entscheidungsermüdung beschreibt die subjektive Erschöpfung nach vielen oder besonders anspruchsvollen Entscheidungen. Der Ausdruck ist kein eigenständiges Krankheitsbild; Umfang und Mechanismen werden wissenschaftlich unterschiedlich diskutiert. Eine Verringerung unnötiger Auswahlmöglichkeiten kann im Alltag entlasten.",
  },
  {
    id: "epilepsie",
    term: "Epilepsie",
    letter: "E",
    definition:
      "Epilepsie ist eine neurologische Erkrankung mit einer anhaltenden Neigung zu epileptischen Anfällen. Sie kann gemeinsam mit Autismus vorkommen. Nicht jede ungewöhnliche Bewegung oder Bewusstseinsveränderung ist ein epileptischer Anfall; entsprechende Ereignisse müssen fachärztlich abgeklärt werden.",
  },
  {
    id: "inklusionsbetrieb",
    term: "Inklusionsbetrieb",
    letter: "I",
    definition:
      "Inklusionsbetriebe sind rechtlich geregelte Unternehmen oder Unternehmensteile, die besonders betroffenen schwerbehinderten Menschen Beschäftigung auf dem allgemeinen Arbeitsmarkt bieten. Sie verbinden wirtschaftliche Tätigkeit mit einem besonderen Beschäftigungsauftrag. Die gesetzlichen Regelungen finden sich insbesondere in §§ 215 ff. SGB IX.",
  },
  {
    id: "inklusive-beschulung",
    term: "Inklusive Beschulung",
    letter: "I",
    definition:
      "Inklusive Beschulung bezeichnet den gemeinsamen Unterricht von Kindern und Jugendlichen mit unterschiedlichen Lern- und Unterstützungsbedürfnissen. Dazu können angemessene Unterstützung, barrierefreie Materialien und angepasste Rahmenbedingungen gehören. Die konkrete Umsetzung richtet sich nach dem Schulrecht des jeweiligen Bundeslandes.",
  },
  {
    id: "integrationsfachdienst-ifd",
    term: "Integrationsfachdienst (IFD)",
    letter: "I",
    definition:
      "Integrationsfachdienste unterstützen unter gesetzlichen Voraussetzungen Menschen mit Behinderungen und Arbeitgeber bei Fragen der beruflichen Teilhabe. Dazu können Beratung, Vermittlung und Begleitung am Arbeitsplatz gehören. Welche Unterstützung möglich ist und wer sie beauftragt oder finanziert, hängt vom Einzelfall ab.",
  },
  {
    id: "jobcoaching-am-arbeitsplatz",
    term: "Jobcoaching am Arbeitsplatz",
    letter: "J",
    definition:
      "Jobcoaching am Arbeitsplatz ist eine arbeitsplatznahe Unterstützung, bei der berufliche Abläufe, Kommunikation und Anforderungen gemeinsam bearbeitet werden. Ziel kann sein, eine Tätigkeit aufzunehmen oder dauerhaft auszuüben. Ob die Maßnahme finanziert wird, hängt von Bedarf, Leistungsträger und konkreter Ausgestaltung ab.",
  },
  {
    id: "kommunikationsbarrieren",
    term: "Kommunikationsbarrieren",
    letter: "K",
    definition:
      "Kommunikationsbarrieren entstehen, wenn Informationen nicht in einer für die Beteiligten zugänglichen Form vermittelt werden. Beispiele sind unklare Anweisungen, ausschließlich mündliche Informationen oder fehlende Zeit zur Verarbeitung. Schriftliche Zusammenfassungen und eindeutige Fragen können solche Barrieren verringern.",
  },
  {
    id: "komorbiditaet",
    term: "Komorbidität",
    letter: "K",
    definition:
      "Komorbidität bezeichnet das gleichzeitige Vorliegen von zwei oder mehr diagnostizierbaren Erkrankungen beziehungsweise Störungen. Autismus kann beispielsweise gemeinsam mit ADHS, Angststörungen oder Epilepsie auftreten. Der Begriff sagt für sich genommen nichts darüber aus, ob ein ursächlicher Zusammenhang besteht.",
  },
  {
    id: "me-cfs",
    term: "ME/CFS",
    letter: "M",
    definition:
      "Myalgische Enzephalomyelitis/Chronisches Fatigue-Syndrom (ME/CFS) ist eine schwere, komplexe Erkrankung, deren Kernmerkmal die Zustandsverschlechterung nach Belastung (Post-Exertional Malaise, PEM) ist. Weitere Beschwerden können unter anderem ausgeprägte Erschöpfung, Schlafstörungen und kognitive Probleme sein. ME/CFS ist nicht mit gewöhnlicher Müdigkeit oder autistischem Burnout gleichzusetzen.",
  },
  {
    id: "neurodiversitaetsparadigma",
    term: "Neurodiversitätsparadigma",
    letter: "N",
    definition:
      "Das Neurodiversitätsparadigma ist eine Perspektive, die neurologische Unterschiede als Teil menschlicher Vielfalt betrachtet und gesellschaftliche Barrieren kritisch hinterfragt. Es schließt die Anerkennung von Behinderungen und individuellem Unterstützungsbedarf nicht aus. Der Begriff bezeichnet eine theoretische und gesellschaftliche Sichtweise, keine medizinische Diagnose.",
  },
  {
    id: "pda-profil-pathological-demand-avoidance",
    term: "PDA-Profil (Pathological Demand Avoidance)",
    letter: "P",
    definition:
      "PDA ist eine umstrittene Bezeichnung für ein Muster ausgeprägter Vermeidung erlebter Anforderungen, das teils im Zusammenhang mit Autismus diskutiert wird. Es gibt keine eigenständige PDA-Diagnose in ICD-11 oder DSM-5-TR; Definition, Abgrenzung und Forschungslage sind uneinheitlich. Der Begriff sollte nicht als gesicherter Autismus-Subtyp dargestellt werden.",
  },
  {
    id: "post-exertional-malaise-pem",
    term: "Post-Exertional Malaise (PEM)",
    letter: "P",
    definition:
      "Post-Exertional Malaise bezeichnet eine oft verzögert einsetzende und länger anhaltende Verschlechterung von Beschwerden nach körperlicher, kognitiver oder emotionaler Belastung. PEM ist ein zentrales Merkmal von ME/CFS. Betroffene sollten Belastungsgrenzen ernst nehmen; pauschale Empfehlungen zur kontinuierlichen Steigerung körperlicher Aktivität können ungeeignet sein.",
  },
  {
    id: "pots-posturales-tachykardiesyndrom",
    term: "POTS (Posturales Tachykardiesyndrom)",
    letter: "P",
    definition:
      "POTS ist eine Form orthostatischer Intoleranz, bei der es beim Aufrichten zu einem anhaltenden Anstieg der Herzfrequenz um mindestens 30 Schläge pro Minute (bei Jugendlichen mindestens 40) innerhalb von zehn Minuten kommen kann, ohne begleitenden Blutdruckabfall. Für die Diagnose sind weitere Kriterien und der Ausschluss anderer Ursachen erforderlich. Mögliche Zusammenhänge mit Autismus werden untersucht; ein gesicherter ursächlicher Zusammenhang ist nicht belegt.",
  },
  {
    id: "pruefungsnachteilsausgleich",
    term: "Prüfungsnachteilsausgleich",
    letter: "P",
    definition:
      "Ein Prüfungsnachteilsausgleich soll behinderungsbedingte Nachteile bei der Erbringung von Prüfungsleistungen ausgleichen, ohne das fachliche Anforderungsniveau unzulässig zu verändern. Möglich sind je nach Rechtsgrundlage etwa Zeitverlängerungen, Pausen oder eine angepasste Prüfungsumgebung. Voraussetzungen und Verfahren unterscheiden sich nach Schul-, Hochschul- oder Prüfungsrecht.",
  },
  {
    id: "reizbelastung-am-arbeitsplatz",
    term: "Reizbelastung am Arbeitsplatz",
    letter: "R",
    definition:
      "Reizbelastung am Arbeitsplatz bezeichnet sensorische Anforderungen wie Lärm, Licht, Gerüche oder häufige Unterbrechungen. Bei manchen autistischen Menschen können solche Bedingungen Konzentration und Wohlbefinden erheblich beeinträchtigen. Mögliche Anpassungen sind beispielsweise Rückzugsmöglichkeiten, klare Arbeitsabläufe oder geeigneter Gehörschutz.",
  },
  {
    id: "schlafstoerungen",
    term: "Schlafstörungen",
    letter: "S",
    definition:
      "Schlafstörungen umfassen unterschiedliche Probleme, etwa beim Ein- oder Durchschlafen oder mit dem Schlaf-Wach-Rhythmus. Schlafprobleme werden bei autistischen Menschen berichtet, haben aber unterschiedliche mögliche Ursachen. Eine anhaltende Schlafstörung sollte individuell medizinisch abgeklärt werden.",
  },
  {
    id: "schulabsentismus",
    term: "Schulabsentismus",
    letter: "S",
    definition:
      "Schulabsentismus ist ein Oberbegriff für wiederholte oder längere Abwesenheit vom Unterricht. Die Gründe können sehr unterschiedlich sein, etwa Erkrankungen, Angst, Überforderung, Konflikte oder schulische Rahmenbedingungen. Der Begriff beschreibt das Fernbleiben und erklärt nicht automatisch dessen Ursache.",
  },
  {
    id: "schulbegleitung",
    term: "Schulbegleitung",
    letter: "S",
    definition:
      "Schulbegleitung ist eine individuelle Unterstützung, die einem Kind oder Jugendlichen die Teilnahme am Schulalltag ermöglichen oder erleichtern kann. Sie ersetzt nicht die pädagogische Verantwortung der Schule. Ob ein Anspruch besteht und welcher Träger zuständig ist, richtet sich nach den individuellen Voraussetzungen und dem einschlägigen Leistungsrecht.",
  },
  {
    id: "schulvermeidung",
    term: "Schulvermeidung",
    letter: "S",
    definition:
      "Schulvermeidung beschreibt Situationen, in denen der Schulbesuch wiederholt nicht gelingt oder aktiv vermieden wird. Dahinter können unter anderem Ängste, Überforderung, Mobbing oder fehlende Unterstützung stehen. Eine sorgfältige Abklärung ist wichtig; Schuldzuweisungen erklären die Ursachen nicht.",
  },
  {
    id: "screening",
    term: "Screening",
    letter: "S",
    definition:
      "Ein Screening dient dazu, Hinweise auf einen möglichen weiteren Abklärungsbedarf zu erkennen. Fragebögen können eine diagnostische Untersuchung vorbereiten, liefern aber weder allein eine gesicherte Autismusdiagnose noch einen verlässlichen Ausschluss. Ihre Aussagekraft hängt unter anderem von Zielgruppe und Anwendung ab.",
  },
  {
    id: "selbstvertretung",
    term: "Selbstvertretung",
    letter: "S",
    definition:
      "Selbstvertretung bedeutet, eigene Interessen, Rechte und Unterstützungsbedürfnisse selbst zu formulieren und bei Entscheidungen mitzuwirken. Sie kann individuell oder organisiert stattfinden. Unterstützte Kommunikation oder Assistenz stehen selbstbestimmter Interessenvertretung nicht entgegen.",
  },
  {
    id: "selektiver-mutismus",
    term: "Selektiver Mutismus",
    letter: "S",
    definition:
      "Selektiver Mutismus ist eine diagnostizierbare Störung, bei der eine Person in bestimmten sozialen Situationen wiederholt nicht spricht, obwohl sie in anderen Situationen sprechen kann. Er ist nicht mit einer bewussten Verweigerung gleichzusetzen. Selektiver Mutismus und Autismus können gemeinsam vorkommen, müssen aber diagnostisch unterschieden werden.",
  },
  {
    id: "sensorisches-suchen",
    term: "Sensorisches Suchen",
    letter: "S",
    definition:
      "Sensorisches Suchen bezeichnet das aktive Aufsuchen bestimmter Sinnesreize, etwa Bewegung, Druck, Berührung oder Geräusche. Solche Reize können als angenehm, aktivierend oder regulierend erlebt werden. Welche Reize gesucht oder gemieden werden, ist individuell verschieden.",
  },
  {
    id: "situativer-sprachverlust",
    term: "Situativer Sprachverlust",
    letter: "S",
    definition:
      "Situativer Sprachverlust ist eine beschreibende Bezeichnung dafür, dass gesprochene Sprache unter bestimmten Bedingungen vorübergehend schwer oder nicht zugänglich ist, etwa bei starker Überlastung. Der Ausdruck ist keine eigenständige Diagnose. Plötzlich auftretende Sprachstörungen können medizinische Notfälle sein und dürfen nicht pauschal als Überlastung eingeordnet werden.",
  },
  {
    id: "sonderpaedagogischer-unterstuetzungsbedarf",
    term: "Sonderpädagogischer Unterstützungsbedarf",
    letter: "S",
    definition:
      "Sonderpädagogischer Unterstützungsbedarf bezeichnet im Schulrecht einen festgestellten besonderen Unterstützungsbedarf im Bildungsprozess. Verfahren, Bezeichnungen und Rechtsfolgen unterscheiden sich zwischen den Bundesländern. Eine Autismusdiagnose allein führt nicht automatisch zu einer bestimmten schulrechtlichen Feststellung.",
  },
  {
    id: "soziale-skripte",
    term: "Soziale Skripte",
    letter: "S",
    definition:
      "Soziale Skripte sind vorbereitete Formulierungen oder gedankliche Abläufe für wiederkehrende Gesprächssituationen. Sie können beispielsweise bei Telefonaten, Arztterminen oder Konflikten Orientierung bieten. Ihre Nutzung ist eine mögliche Kommunikationsstrategie und kein diagnostisches Merkmal.",
  },
  {
    id: "spaetdiagnose",
    term: "Spätdiagnose",
    letter: "S",
    definition:
      "Von einer Spätdiagnose wird gesprochen, wenn Autismus erst im Jugend- oder Erwachsenenalter erkannt wird. Gründe können unter anderem kompensierende Strategien, fehlendes Wissen oder frühere Fehleinordnungen sein. Eine späte Diagnose bedeutet nicht, dass Autismus erst spät entstanden ist.",
  },
  {
    id: "task-switching-aufgabenwechsel",
    term: "Task Switching (Aufgabenwechsel)",
    letter: "T",
    definition:
      "Task Switching bezeichnet den Wechsel zwischen Aufgaben oder mentalen Anforderungen. Solche Wechsel benötigen kognitive Steuerung und können Zeit oder Konzentration kosten. Bei manchen autistischen Menschen sind häufige Unterbrechungen oder ungeplante Aufgabenwechsel besonders belastend.",
  },
  {
    id: "unmasking",
    term: "Unmasking",
    letter: "U",
    definition:
      "Unmasking beschreibt den Prozess, erlernte Strategien des Verbergens oder Anpassens autistischer Merkmale bewusster wahrzunehmen und gegebenenfalls zu reduzieren. Dies kann entlastend sein, ist aber abhängig von Sicherheit, Umfeld und persönlichen Entscheidungen. Niemand ist verpflichtet, auf Masking vollständig zu verzichten.",
  },
  {
    id: "woertliches-sprachverstaendnis",
    term: "Wörtliches Sprachverständnis",
    letter: "W",
    definition:
      "Wörtliches Sprachverständnis beschreibt die Tendenz, Aussagen zunächst nach ihrem direkten Wortlaut zu interpretieren. Ironie, Andeutungen oder mehrdeutige Formulierungen können dadurch zusätzlichen Interpretationsaufwand verursachen. Nicht alle autistischen Menschen verstehen Sprache überwiegend wörtlich.",
  },
  {
    id: "uebergangssituationen",
    term: "Übergangssituationen",
    letter: "Ü",
    definition:
      "Übergangssituationen sind Wechsel zwischen Tätigkeiten, Orten oder sozialen Anforderungen. Für manche autistische Menschen können sie anstrengend sein, weil Aufmerksamkeit, Planung und Erwartungen neu ausgerichtet werden müssen. Vorankündigungen, klare Abläufe und ausreichend Zeit können Übergänge erleichtern.",
  },
];
