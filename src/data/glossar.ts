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
  },
  {
    id: "neurodiversitaet",
    term: "Neurodiversität",
    letter: "N",
    definition:
      "Neurodiversität bezeichnet die Vielfalt menschlicher neurologischer Entwicklung und Informationsverarbeitung. Der Begriff beschreibt die Vielfalt insgesamt und schließt das Bestehen von Behinderungen oder Unterstützungsbedarfen nicht aus.",
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
      "Bei einem Persönlichen Budget regelt eine Zielvereinbarung, soweit gesetzlich erforderlich, unter anderem individuelle Ziele, Nachweise und Qualitätssicherung. Maßgeblich sind die Regelungen des § 29 SGB IX.",
  },
];
