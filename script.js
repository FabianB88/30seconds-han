/* ================================================================
   30 SECONDS â€“ HAN GREEN OFFICE
   script.js

   Kaartdata:
   - Education (EN)  : 30 kaarten uit het officiÃ«le HAN PDF
   - Onderwijs (NL)  : 30 kaarten uit het officiÃ«le HAN PDF
   - Sustainability  : 8 eigen kaarten
   - Climate         : 8 eigen kaarten
   - AI & Technology : 8 eigen kaarten
================================================================ */

'use strict';

/* ----------------------------------------------------------------
   1. KAARTDATA
---------------------------------------------------------------- */
const CARDS = [

  /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     EDUCATION (EN) â€“ officiÃ«le HAN Green Office kaarten
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
  {
    title: 'EQUAL ACCESS TO EDUCATION',
    category: 'Education',
    words: ['School affordability', 'Hidden education costs', 'Access to materials',
            'Attendance barriers', 'Intergenerational poverty']
  },
  {
    title: 'SCHOOL NUTRITION PROGRAMS',
    category: 'Education',
    words: ['Free meal systems', 'Food security in schools', 'Balanced diets',
            "Hunger's effect on learning", 'Meal funding']
  },
  {
    title: 'WELL-BEING IN EDUCATION',
    category: 'Education',
    words: ['Student mental health', 'Stress management', 'Safe learning spaces',
            'Physical activity', 'Burnout prevention']
  },
  {
    title: 'QUALITY LEARNING ENVIRONMENTS',
    category: 'Education',
    words: ['Learning outcomes', 'Teaching standards', 'Curriculum design',
            'Lifelong learning', 'Inclusive classrooms']
  },
  {
    title: 'GENDER EQUALITY IN SCHOOLS',
    category: 'Education',
    words: ['Gender stereotypes', 'Equal participation', 'STEM inclusion',
            'Leadership roles', 'Harassment prevention']
  },
  {
    title: 'WATER & HYGIENE IN SCHOOLS',
    category: 'Education',
    words: ['Clean drinking water', 'Sanitation facilities', 'Hygiene education',
            'Handwashing stations', 'Menstrual hygiene']
  },
  {
    title: 'SUSTAINABLE ENERGY IN EDUCATION',
    category: 'Education',
    words: ['Solar-powered schools', 'Energy-saving lighting', 'School energy audits',
            'Low-carbon campuses', 'Electricity access']
  },
  {
    title: 'EDUCATION AND EMPLOYABILITY',
    category: 'Education',
    words: ['Career readiness', 'Vocational training', 'Internship programs',
            'Skill matching', 'Youth employment']
  },
  {
    title: 'EDUCATIONAL INFRASTRUCTURE',
    category: 'Education',
    words: ['Digital connectivity', 'School transport', 'Library access',
            'Safe buildings', 'Innovation labs']
  },
  {
    title: 'REDUCING EDUCATIONAL INEQUALITY',
    category: 'Education',
    words: ['Learning gaps', 'Disability access', 'Language barriers',
            'Rural schooling', 'Scholarship programs']
  },
  {
    title: 'SUSTAINABLE CAMPUSES',
    category: 'Education',
    words: ['Green buildings', 'Waste separation', 'Sustainable mobility',
            'Urban school impact', 'Shared community spaces']
  },
  {
    title: 'RESPONSIBLE RESOURCE USE IN SCHOOLS',
    category: 'Education',
    words: ['Paper reduction', 'Reusable materials', 'Circular textbooks',
            'Sustainable procurement', 'Waste awareness']
  },
  {
    title: 'CLIMATE EDUCATION',
    category: 'Education',
    words: ['Climate literacy', 'Environmental projects', 'Carbon footprint learning',
            'Adaptation awareness', 'Climate activism']
  },
  {
    title: 'OCEAN & WATER EDUCATION',
    category: 'Education',
    words: ['Plastic pollution lessons', 'Marine ecosystems', 'Water conservation',
            'River clean-ups', 'Blue economy awareness']
  },
  {
    title: 'BIODIVERSITY EDUCATION',
    category: 'Education',
    words: ['School gardens', 'Native species', 'Habitat protection',
            'Outdoor learning', 'Ecosystem awareness']
  },
  {
    title: 'EDUCATION GOVERNANCE & ETHICS',
    category: 'Education',
    words: ['Academic integrity', 'Transparent grading', 'School policies',
            'Student rights', 'Institutional accountability']
  },
  {
    title: 'DIGITAL LEARNING PLATFORMS',
    category: 'Education',
    words: ['Online classrooms', 'Learning management systems', 'Digital homework',
            'Remote access', 'Platform usability']
  },
  {
    title: 'EDUCATIONAL DATA & ANALYTICS',
    category: 'Education',
    words: ['Student performance data', 'Learning dashboards', 'Progress tracking',
            'Data privacy', 'Evidence-based teaching']
  },
  {
    title: 'ARTIFICIAL INTELLIGENCE IN EDUCATION',
    category: 'Education',
    words: ['AI tutoring', 'Automated feedback', 'Adaptive learning',
            'Algorithm bias', 'Teacher oversight']
  },
  {
    title: 'EDUCATIONAL TECHNOLOGY INFRASTRUCTURE',
    category: 'Education',
    words: ['Device charging stations', 'Energy-efficient hardware', 'IT maintenance',
            'Network reliability', 'Tech upgrades']
  },
  {
    title: 'SMART CLASSROOMS',
    category: 'Education',
    words: ['Interactive boards', 'Sensor-based lighting', 'Classroom automation',
            'Digital collaboration tools', 'Hybrid teaching']
  },
  {
    title: 'SUSTAINABLE SCHOOL LABORATORIES',
    category: 'Education',
    words: ['Safe chemical storage', 'Lab waste management', 'Resource-efficient experiments',
            'Equipment longevity', 'Sustainable materials']
  },
  {
    title: 'ASSISTIVE LEARNING TECHNOLOGIES',
    category: 'Education',
    words: ['Screen readers', 'Speech-to-text tools', 'Accessible interfaces',
            'Personalized devices', 'Learning accommodations']
  },
  {
    title: 'GLOBAL EDUCATIONAL PARTNERSHIPS',
    category: 'Education',
    words: ['Exchange programs', 'International collaboration', 'Shared research',
            'Cross-border projects', 'Educational networks']
  },
  {
    title: 'TEACHER WELL-BEING',
    category: 'Education',
    words: ['Workload pressure', 'Emotional exhaustion', 'Classroom stress',
            'Work-life balance', 'Staff retention']
  },
  {
    title: 'STUDENT VOICE & PARTICIPATION',
    category: 'Education',
    words: ['Student councils', 'Participatory decision-making', 'Feedback systems',
            'Representation', 'Civic engagement']
  },
  {
    title: 'INCLUSIVE COMMUNICATION IN EDUCATION',
    category: 'Education',
    words: ['Multilingual teaching', 'Cultural sensitivity', 'Plain language',
            'Conflict resolution', 'Parent engagement']
  },
  {
    title: 'ETHICAL DILEMMAS IN EDUCATION',
    category: 'Education',
    words: ['Fair assessment', 'Disciplinary decisions', 'Confidentiality',
            'Bias awareness', 'Academic pressure']
  },
  {
    title: 'COMMUNITY-SCHOOL PARTNERSHIPS',
    category: 'Education',
    words: ['Local collaboration', 'Service learning', 'Volunteer programs',
            'Social support networks', 'Shared responsibility']
  },
  {
    title: 'PROFESSIONAL DEVELOPMENT IN EDUCATION',
    category: 'Education',
    words: ['Teacher training', 'Skill upgrading', 'Reflective practice',
            'Knowledge sharing', 'Career pathways']
  },

  /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     ONDERWIJS (NL) â€“ officiÃ«le HAN Green Office kaarten
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
  {
    title: 'GELIJKE TOEGANG TOT ONDERWIJS',
    category: 'Onderwijs',
    words: ['Schoolbetaalbaarheid', 'Verborgen onderwijskosten', 'Toegang tot materialen',
            'Aanwezigheidsdrempels', 'Intergenerationele armoede']
  },
  {
    title: "SCHOOLVOEDINGSPROGRAMMA'S",
    category: 'Onderwijs',
    words: ['Gratis maaltijden', 'Voedselzekerheid op school', 'Evenwichtige voeding',
            'Honger en leerprestaties', 'Financiering van maaltijden']
  },
  {
    title: 'WELZIJN IN HET ONDERWIJS',
    category: 'Onderwijs',
    words: ['Mentale gezondheid van studenten', 'Stressmanagement', 'Veilige leeromgevingen',
            'Lichamelijke activiteit', 'Preventie van burn-out']
  },
  {
    title: 'KWALITATIEVE LEEROMGEVINGEN',
    category: 'Onderwijs',
    words: ['Leerresultaten', 'Onderwijsstandaarden', 'Curriculumontwerp',
            'Leven lang leren', 'Inclusieve klaslokalen']
  },
  {
    title: 'GENDERGELIJKHEID OP SCHOOL',
    category: 'Onderwijs',
    words: ['Genderstereotypen', 'Gelijke participatie', 'Inclusie in STEM',
            'Leiderschapsrollen', 'Preventie van intimidatie']
  },
  {
    title: 'WATER & HYGIENE OP SCHOOL',
    category: 'Onderwijs',
    words: ['Schoon drinkwater', 'Sanitaire voorzieningen', 'Hygiene-educatie',
            'Handwasstations', 'Menstruele hygiene']
  },
  {
    title: 'DUURZAME ENERGIE IN HET ONDERWIJS',
    category: 'Onderwijs',
    words: ['Zonne-energie op scholen', 'Energiezuinige verlichting', 'Energie-audits op school',
            'Lage-CO2 campussen', 'Toegang tot elektriciteit']
  },
  {
    title: 'ONDERWIJS EN ARBEIDSMARKT',
    category: 'Onderwijs',
    words: ['Loopbaanvoorbereiding', 'Beroepsopleiding', "Stageprogramma's",
            'Vaardighedenmatch', 'Jeugdwerkgelegenheid']
  },
  {
    title: 'ONDERWIJSINFRASTRUCTUUR',
    category: 'Onderwijs',
    words: ['Digitale connectiviteit', 'Schoolvervoer', 'Toegang tot bibliotheken',
            'Veilige gebouwen', 'Innovatielabs']
  },
  {
    title: 'VERMINDEREN VAN ONDERWIJSONGELIJKHEID',
    category: 'Onderwijs',
    words: ['Leerachterstanden', 'Toegankelijkheid voor mensen met een beperking',
            'TaalbarriÃ¨res', 'Plattelandsonderwijs', "Beursprogramma's"]
  },
  {
    title: 'DUURZAME CAMPUSES',
    category: 'Onderwijs',
    words: ['Groene gebouwen', 'Afvalscheiding', 'Duurzame mobiliteit',
            'Impact op de stad', 'Gedeelde gemeenschapsruimtes']
  },
  {
    title: 'VERANTWOORD GEBRUIK VAN MIDDELEN OP SCHOOL',
    category: 'Onderwijs',
    words: ['Papierreductie', 'Herbruikbare materialen', 'Circulaire leermiddelen',
            'Duurzame inkoop', 'Bewustwording rond afval']
  },
  {
    title: 'KLIMAATEDUCATIE',
    category: 'Onderwijs',
    words: ['Klimaatgeletterdheid', 'Milieuprojecten', 'Leren over CO2-voetafdruk',
            'Bewustzijn rond adaptatie', 'Klimaatactivisme']
  },
  {
    title: 'OCEAAN- & WATEREDUCATIE',
    category: 'Onderwijs',
    words: ['Lessen over plasticvervuiling', 'Mariene ecosystemen', 'Waterbesparing',
            'Rivieropruimacties', 'Bewustzijn rond de blauwe economie']
  },
  {
    title: 'BIODIVERSITEITSONDERWIJS',
    category: 'Onderwijs',
    words: ['Schooltuinen', 'Inheemse soorten', 'Bescherming van leefgebieden',
            'Buitenonderwijs', 'Bewustzijn van ecosystemen']
  },
  {
    title: 'ONDERWIJSBESTUUR & ETHIEK',
    category: 'Onderwijs',
    words: ['Academische integriteit', 'Transparante beoordeling', 'Schoolbeleid',
            'Studentenrechten', 'Institutionele verantwoordelijkheid']
  },
  {
    title: 'DIGITALE LEERPLATFORMEN',
    category: 'Onderwijs',
    words: ['Online lessen', 'Leerbeheersystemen', 'Digitale opdrachten',
            'Toegang op afstand', 'Gebruiksvriendelijkheid van platforms']
  },
  {
    title: 'ONDERWIJSDATA & ANALYSE',
    category: 'Onderwijs',
    words: ['Prestatiegegevens van studenten', 'Leerdashboards', 'Voortgangsmonitoring',
            'Dataprivacy', 'Evidence-based onderwijs']
  },
  {
    title: 'KUNSTMATIGE INTELLIGENTIE IN HET ONDERWIJS',
    category: 'Onderwijs',
    words: ['AI-tutoring', 'Geautomatiseerde feedback', 'Adaptief leren',
            'Algoritmische vooringenomenheid', 'Toezicht door docenten']
  },
  {
    title: 'ONDERWIJSTECHNOLOGISCHE INFRASTRUCTUUR',
    category: 'Onderwijs',
    words: ['Oplaadpunten voor apparaten', 'Energiezuinige hardware', 'IT-onderhoud',
            'Netwerkbetrouwbaarheid', 'Technologische upgrades']
  },
  {
    title: 'SLIMME KLASLOKALEN',
    category: 'Onderwijs',
    words: ['Interactieve borden', 'Sensorverlichting', 'Klasautomatisering',
            'Digitale samenwerkingsmiddelen', 'Hybride onderwijs']
  },
  {
    title: 'DUURZAME SCHOOLLABORATORIA',
    category: 'Onderwijs',
    words: ['Veilige opslag van chemicaliÃ«n', 'Laboratoriumafvalbeheer',
            'GrondstofefficiÃ«nte experimenten', 'Levensduur van apparatuur', 'Duurzame materialen']
  },
  {
    title: 'ONDERSTEUNENDE LEERTECHNOLOGIEÃ‹N',
    category: 'Onderwijs',
    words: ['Schermlezers', 'Spraak-naar-tekst tools', 'Toegankelijke interfaces',
            'Gepersonaliseerde apparaten', 'Leerondersteuning']
  },
  {
    title: 'GLOBALE ONDERWIJSPARTNERSCHAPPEN',
    category: 'Onderwijs',
    words: ["Uitwisselingsprogramma's", 'Internationale samenwerking', 'Gedeeld onderzoek',
            'Grensoverschrijdende projecten', 'Onderwijsnetwerken']
  },
  {
    title: 'WELZIJN VAN DOCENTEN',
    category: 'Onderwijs',
    words: ['Werkdruk', 'Emotionele uitputting', 'Stress in de klas',
            'Werk-privÃ©balans', 'Personeelsbehoud']
  },
  {
    title: 'STUDENTENPARTICIPATIE & INSPRAAK',
    category: 'Onderwijs',
    words: ['Studentenraden', 'Participatieve besluitvorming', 'Feedbacksystemen',
            'Vertegenwoordiging', 'Burgerschapsbetrokkenheid']
  },
  {
    title: 'INCLUSIEVE COMMUNICATIE IN HET ONDERWIJS',
    category: 'Onderwijs',
    words: ['Meertalig onderwijs', 'Culturele sensitiviteit', 'Eenvoudige taal',
            'Conflictoplossing', 'Ouderbetrokkenheid']
  },
  {
    title: "ETHISCHE DILEMMA'S IN HET ONDERWIJS",
    category: 'Onderwijs',
    words: ['Eerlijke beoordeling', 'Disciplinaire beslissingen', 'Vertrouwelijkheid',
            'Bewustzijn van bias', 'Studiedruk']
  },
  {
    title: 'SAMENWERKING TUSSEN SCHOOL EN GEMEENSCHAP',
    category: 'Onderwijs',
    words: ['Lokale samenwerking', 'Service learning', "Vrijwilligersprogramma's",
            'Sociale ondersteuningsnetwerken', 'Gedeelde verantwoordelijkheid']
  },
  {
    title: 'PROFESSIONELE ONTWIKKELING IN HET ONDERWIJS',
    category: 'Onderwijs',
    words: ['Docententraining', 'Vaardigheidsontwikkeling', 'Reflectieve praktijk',
            'Kennisdeling', 'Loopbaanpaden']
  },

  /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     SUSTAINABILITY â€“ eigen kaarten
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
  {
    title: 'CIRCULAIRE ECONOMIE',
    category: 'Sustainability',
    words: ['Hergebruik', 'Repareren', 'Grondstofkringlopen', 'Upcyclen', 'Einde-van-levensbeleid']
  },
  {
    title: 'GROENE CAMPUS',
    category: 'Sustainability',
    words: ['Zonnepanelen', 'Groendak', 'Energiemonitoring', 'Afvalscheiding', 'Duurzame kantine']
  },
  {
    title: 'DUURZAME MOBILITEIT',
    category: 'Sustainability',
    words: ['Fietsenstallingen', 'OV-abonnement', 'Elektrische auto', 'Laadpaal', 'Carpooling']
  },
  {
    title: 'ENERGIETRANSITIE',
    category: 'Sustainability',
    words: ['Windenergie', 'Zonne-energie', 'Waterstof', 'Energieopslag', 'Smart grid']
  },
  {
    title: 'ZERO WASTE',
    category: 'Sustainability',
    words: ['Verpakkingsvrij', 'Composteren', 'Herbruikbare beker', 'Voedselverspilling', 'Plastic reductie']
  },
  {
    title: 'DUURZAME INKOOP',
    category: 'Sustainability',
    words: ['Eerlijke handel', 'Lokale leveranciers', 'Milieucriteria', 'Maatschappelijk verantwoord', 'Levenscyclusanalyse']
  },
  {
    title: 'HERNIEUWBARE ENERGIE',
    category: 'Sustainability',
    words: ['Zonne-energie', 'Windparken', 'Geothermie', 'Biomassa', 'Getijdenenergie']
  },
  {
    title: 'CO2-VOETAFDRUK',
    category: 'Sustainability',
    words: ['Uitstoot meten', 'Compensatie', 'Groene reiskosten', 'Carbon budget', 'Klimaatimpact']
  },

  /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     CLIMATE â€“ eigen kaarten
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
  {
    title: 'KLIMAATAKKOORD VAN PARIJS',
    category: 'Climate',
    words: ['1,5 graden doel', 'Nationale klimaatplannen', 'Uitstootreductie',
            'Internationale samenwerking', 'Klimaatfinanciering']
  },
  {
    title: 'BIODIVERSITEIT',
    category: 'Climate',
    words: ['Ecosystemen', 'Bedreigde soorten', 'Bestuivers', 'Natuurherstel', 'Habitatverlies']
  },
  {
    title: 'ZEESPIEGELSTIJGING',
    category: 'Climate',
    words: ['Smeltende gletsjers', 'Kustbescherming', 'Dijken', 'Eilanden bedreigd', 'Klimaatmigratie']
  },
  {
    title: 'EXTREME WEERSOMSTANDIGHEDEN',
    category: 'Climate',
    words: ['Hittegolven', 'Overstromingen', 'Bosbranden', 'Droogte', 'Superstormen']
  },
  {
    title: 'BROEIKASGASSEN',
    category: 'Climate',
    words: ['CO2', 'Methaan', 'Lachgas', 'Uitstoot industrie', 'Opwarming aarde']
  },
  {
    title: 'KOOLSTOFOPSLAG',
    category: 'Climate',
    words: ['Bossen planten', 'Veenweiden', 'Carbon capture', 'Oceanen als buffer', 'Bodemkoolstof']
  },
  {
    title: 'KLIMAATMIGRATIE',
    category: 'Climate',
    words: ['Klimaatvluchtelingen', 'Onleefbare gebieden', 'Gedwongen verhuizing',
            'Opvang in steden', 'Internationale afspraken']
  },
  {
    title: 'KLIMAATNEUTRALITEIT 2050',
    category: 'Climate',
    words: ['Netto nul uitstoot', 'Groene waterstof', 'Industrie verduurzamen',
            'Elektrisch vervoer', 'Duurzame gebouwen']
  },

  /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     AI & TECHNOLOGY â€“ eigen kaarten
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
  {
    title: 'AI IN HET ONDERWIJS',
    category: 'AI & Technology',
    words: ['Gepersonaliseerd leren', 'Chatbot voor studenten', 'Adaptieve toetsen',
            'Plagiaatdetectie', 'Slimme feedback']
  },
  {
    title: 'MACHINE LEARNING',
    category: 'AI & Technology',
    words: ['Trainingsdata', 'Neuraal netwerk', 'Voorspelmodel', 'Patroonherkenning', 'Algoritme trainen']
  },
  {
    title: 'DIGITALE VAARDIGHEDEN',
    category: 'AI & Technology',
    words: ['Coderen', 'Cyberveiligheid', 'Data-analyse', 'Digitale geletterdheid', 'Prompt engineering']
  },
  {
    title: 'SMART CAMPUS',
    category: 'AI & Technology',
    words: ['Sensoren in gebouwen', 'Energiebeheer', 'Slimme roosters', 'Parkeerdetectie', 'Luchtkwaliteitsmeting']
  },
  {
    title: 'DATA-ETHIEK',
    category: 'AI & Technology',
    words: ['Privacy', 'Toestemming', 'Transparantie', 'Datarechten', 'Verantwoordelijk AI']
  },
  {
    title: 'ALGORITME-BIAS',
    category: 'AI & Technology',
    words: ['Discriminatie in AI', 'Vertekende data', 'Ongelijke uitkomsten',
            'Gezichtsherkenning', 'Eerlijke AI']
  },
  {
    title: 'AUTOMATISERING VAN WERK',
    category: 'AI & Technology',
    words: ['Robots op de werkvloer', 'Verdwijnende banen', 'Nieuwe functies',
            'Omscholing', 'Mens-machine samenwerking']
  },
  {
    title: 'DIGITALE TWEELINGEN',
    category: 'AI & Technology',
    words: ['Virtueel model', 'Gebouwsimulatie', 'Realtime data',
            'Energieoptimalisatie', 'Stedelijke planning']
  }
];

/* ----------------------------------------------------------------
   2. GAME-STATE
---------------------------------------------------------------- */
const state = {
  selectedCategory: 'All',
  filteredCards:    [],
  usedIndices:      [],
  currentCard:      null,
  currentWordIndex: 0,
  wordResults:      [],   // 'correct' | 'fout' | null per woord
  score:            0,
  round:            1,
  timeLeft:         30,
  timerInterval:    null,
  gameRunning:      false
};

// Scorebordstatus â€“ wordt gevuld door de scorebord-sectie onderaan
let scoreboardState;

/* ----------------------------------------------------------------
   3. DOM-REFERENTIES
---------------------------------------------------------------- */
const startScreen    = document.getElementById('start-screen');
const gameScreen     = document.getElementById('game-screen');
const startCardBtn   = document.getElementById('start-card-btn');
const filterBtns     = document.querySelectorAll('.filter-btn');

const scoreEl        = document.getElementById('score-value');
const roundEl        = document.getElementById('round-value');
const timerDisplay   = document.getElementById('timer-display');
const timerProgress  = document.getElementById('timer-progress');
const timerWrapper   = document.getElementById('timer-wrapper');

const cardFlipper    = document.getElementById('card-flipper');
const cardTitle      = document.getElementById('card-title');
const cardWords      = document.getElementById('card-words');
const cardCategoryEl = document.getElementById('card-category');

const correctBtn     = document.getElementById('correct-btn');
const foutBtn        = document.getElementById('fout-btn');
const skipBtn        = document.getElementById('skip-btn');
const nextRoundBtn   = document.getElementById('next-round-btn');
const resetBtn       = document.getElementById('reset-btn');

/* ----------------------------------------------------------------
   4. CONSTANTEN
---------------------------------------------------------------- */
const TIMER_DURATION   = 30;
const CIRCUMFERENCE    = 264;
const URGENT_THRESHOLD = 10;

/* ----------------------------------------------------------------
   5. HULPFUNCTIES
---------------------------------------------------------------- */

function getFilteredCards() {
  if (state.selectedCategory === 'All') return [...CARDS];
  return CARDS.filter(c => c.category === state.selectedCategory);
}

function getNextCard() {
  const pool = state.filteredCards;
  if (!pool.length) return null;
  if (state.usedIndices.length >= pool.length) state.usedIndices = [];
  const available = pool.map((_, i) => i).filter(i => !state.usedIndices.includes(i));
  const pick = available[Math.floor(Math.random() * available.length)];
  state.usedIndices.push(pick);
  return pool[pick];
}

function updateTimerVisuals(timeLeft) {
  const offset = CIRCUMFERENCE * (1 - timeLeft / TIMER_DURATION);
  timerProgress.style.strokeDashoffset = offset;
  timerDisplay.textContent = timeLeft;
  if (timeLeft <= URGENT_THRESHOLD) {
    timerWrapper.classList.add('is-urgent');
  } else {
    timerWrapper.classList.remove('is-urgent');
  }
}

/* ----------------------------------------------------------------
   6. KAART-RENDERING
---------------------------------------------------------------- */

function renderCard(card) {
  state.currentCard      = card;
  state.currentWordIndex = 0;
  state.wordResults      = new Array(card.words.length).fill(null);

  cardTitle.textContent      = card.title;
  cardCategoryEl.textContent = card.category.toUpperCase();

  cardWords.innerHTML = '';
  card.words.forEach((word, i) => {
    const li       = document.createElement('li');
    li.textContent = word;
    li.dataset.idx = i;
    cardWords.appendChild(li);
  });

  highlightCurrentWord();

  // Reset flip: kaart terug naar achterkant
  cardFlipper.classList.remove('is-flipped');
  cardFlipper.style.pointerEvents = 'auto';
  cardFlipper.style.cursor = 'pointer';
}

function highlightCurrentWord() {
  cardWords.querySelectorAll('li').forEach((li, i) => {
    li.classList.remove('is-active', 'is-done', 'is-fout');
    const result = state.wordResults[i];
    if (result === 'correct') li.classList.add('is-done');
    if (result === 'fout')    li.classList.add('is-fout');
    if (i === state.currentWordIndex && result === null) li.classList.add('is-active');
  });
}

/* ----------------------------------------------------------------
   7. TIMER
---------------------------------------------------------------- */

function startTimer() {
  clearInterval(state.timerInterval);
  state.timeLeft    = TIMER_DURATION;
  state.gameRunning = true;
  updateTimerVisuals(state.timeLeft);

  state.timerInterval = setInterval(() => {
    state.timeLeft--;
    updateTimerVisuals(state.timeLeft);
    if (state.timeLeft <= 0) {
      clearInterval(state.timerInterval);
      state.gameRunning = false;
      showTimesUp();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(state.timerInterval);
  state.gameRunning = false;
}

function resetTimerVisuals() {
  timerWrapper.classList.remove('is-urgent');
  updateTimerVisuals(TIMER_DURATION);
}

/* ----------------------------------------------------------------
   8. TIME'S UP OVERLAY
---------------------------------------------------------------- */

function showTimesUp() {
  removeTimesUpOverlay();
  const overlay     = document.createElement('div');
  overlay.className = 'timesup-overlay';
  overlay.id        = 'timesup-overlay';

  if (scoreboardState && scoreboardState.active) {
    // â”€â”€ Scorebordmodus: overlay verbergen en scorebord tonen â”€â”€
    document.body.appendChild(overlay); // voeg toe maar toon niet
    overlay.style.display = 'none';
    showScoreboardScreen();
    return;
  } else {
    // â”€â”€ Kaartspelmodus â”€â”€
    overlay.innerHTML = `
      <p class="timesup-title">TIME'S UP</p>
      <div class="timesup-divider"></div>
      <p class="timesup-score">SCORE DEZE SESSIE: ${state.score}</p>
      <button class="btn btn--primary" id="overlay-next-btn">VOLGENDE RONDE</button>
    `;
    document.body.appendChild(overlay);
    document.getElementById('overlay-next-btn').addEventListener('click', () => {
      removeTimesUpOverlay();
      beginNextRound();
    });
  }
}

function removeTimesUpOverlay() {
  const el = document.getElementById('timesup-overlay');
  if (el) el.remove();
}

/* ----------------------------------------------------------------
   9. GAME-FLOW
---------------------------------------------------------------- */

function startGame() {
  state.filteredCards = getFilteredCards();
  if (!state.filteredCards.length) { alert('Geen kaarten beschikbaar.'); return; }

  state.usedIndices = [];
  state.score       = 0;
  state.round       = 1;
  scoreEl.textContent = '0';
  roundEl.textContent = '1';

  startScreen.classList.remove('screen--active');
  gameScreen.classList.add('screen--active');

  const card = getNextCard();
  if (card) {
    renderCard(card);
    resetTimerVisuals();
    // Timer start NIET hier â€“ wacht op kaartflip
  }
}

function beginNextRound() {
  state.round++;
  roundEl.textContent = state.round;
  const card = getNextCard();
  if (card) {
    renderCard(card);
    resetTimerVisuals();
    // Timer start NIET hier â€“ wacht op kaartflip
  }
}

function handleCorrect() {
  if (!state.gameRunning) return;
  // Markeer huidig woord als correct
  state.wordResults[state.currentWordIndex] = 'correct';
  state.score++;
  scoreEl.textContent = state.score;
  advanceWord();
}

function handleFout() {
  if (!state.gameRunning) return;
  // Markeer huidig woord als fout/overgeslagen
  state.wordResults[state.currentWordIndex] = 'fout';
  advanceWord();
}

/**
 * Beweeg naar het volgende onbeoordeelde woord.
 * Als alle woorden beoordeeld zijn, laad automatisch de volgende kaart.
 */
function advanceWord() {
  // Zoek het eerstvolgende woord dat nog null is
  let next = -1;
  for (let i = state.currentWordIndex + 1; i < state.currentCard.words.length; i++) {
    if (state.wordResults[i] === null) { next = i; break; }
  }
  if (next === -1) {
    if (scoreboardState && scoreboardState.active) {
      // Team-modus: alle woorden klaar â†' timer stoppen en direct naar scorebord
      stopTimer();
      showTimesUp();
    } else {
      // Kaartspel-modus: volgende kaart laden (timer loopt door)
      const card = getNextCard();
      if (card) renderCard(card);
    }
  } else {
    state.currentWordIndex = next;
    highlightCurrentWord();
  }
}

function handleSkip() {
  // In team-modus: skip uitgeschakeld (elk team heeft precies 1 kaart)
  if (scoreboardState && scoreboardState.active) return;
  if (!state.gameRunning) return;
  const card = getNextCard();
  if (card) renderCard(card);
}

function handleNextRound() {
  // In team-modus: next round uitgeschakeld
  if (scoreboardState && scoreboardState.active) return;
  removeTimesUpOverlay();
  stopTimer();
  beginNextRound();
}

function handleReset() {
  clearGameState();
  removeTimesUpOverlay();
  stopTimer();
  resetTimerVisuals();
  cardFlipper.classList.remove('is-flipped');
  cardFlipper.style.pointerEvents = 'auto';
  cardFlipper.style.cursor = 'pointer';
  gameScreen.classList.remove('screen--active');
  if (scoreboardScreen) scoreboardScreen.classList.remove('screen--active');
  const boardScreen = document.getElementById('board-screen');
  if (boardScreen) boardScreen.classList.remove('screen--active');
  const winOverlay = document.getElementById('win-overlay');
  if (winOverlay) winOverlay.classList.remove('win-overlay--visible');
  startScreen.classList.add('screen--active');
  state.score = 0; state.round = 1;
  state.usedIndices = []; state.currentCard = null; state.gameRunning = false;
  scoreEl.textContent = '0'; roundEl.textContent = '1';
  if (scoreboardState) { scoreboardState.active = false; scoreboardState.boardActive = false; }
}

/* ----------------------------------------------------------------
   10. EVENT LISTENERS
---------------------------------------------------------------- */

// Themafilter
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('filter-btn--active'));
    btn.classList.add('filter-btn--active');
    state.selectedCategory = btn.dataset.category;
  });
});

// Startknop (kaartspel) â€“ startBoardBtn wordt in de bordspelsectie gekoppeld
startCardBtn.addEventListener('click', startGame);

// â”€â”€ Kaartflip â”€â”€
// Klik of Enter/Space op de flipper â†’ draai kaart om en start timer
function flipCard() {
  if (cardFlipper.classList.contains('is-flipped')) return; // al omgedraaid
  cardFlipper.classList.add('is-flipped');
  // Blokkeer herklikken
  cardFlipper.style.pointerEvents = 'none';
  cardFlipper.style.cursor = 'default';
  // Start timer na halve animatieduur (voorkant komt in beeld)
  setTimeout(() => startTimer(), 350);
}

cardFlipper.addEventListener('click', flipCard);
cardFlipper.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flipCard(); }
});

// Woord- en kaartbesturing
correctBtn.addEventListener('click', handleCorrect);
foutBtn.addEventListener('click', handleFout);
skipBtn.addEventListener('click', handleSkip);
nextRoundBtn.addEventListener('click', handleNextRound);
resetBtn.addEventListener('click', handleReset);

/* ----------------------------------------------------------------
   11. INITIALISATIE
---------------------------------------------------------------- */
updateTimerVisuals(TIMER_DURATION);

/* ================================================================
   12. SCOREBORD – LOGICA
================================================================ */

/* ----------------------------------------------------------------
   CONSTANTEN & STAAT
---------------------------------------------------------------- */

const TEAM_COLORS = ['#ff6ec7', '#00e5bb', '#ffd700', '#ff7043', '#a78bfa', '#34d399'];

scoreboardState = {
  active:       false,
  boardActive:  false,
  teams:        [],   // [{ name, score, color, position }]
  currentTeam:  0,
  pendingScore: 0
};

/* ----------------------------------------------------------------
   DOM-REFERENTIES (scorebord)
---------------------------------------------------------------- */

const teamSetupScreen    = document.getElementById('team-setup-screen');
const scoreboardScreen   = document.getElementById('scoreboard-screen');
const startScoreboardBtn = document.getElementById('start-scoreboard-btn');
const backFromTeamsBtn   = document.getElementById('back-from-teams-btn');
const confirmTeamsBtn    = document.getElementById('confirm-teams-btn');
const teamNameInputs     = document.getElementById('team-name-inputs');
const scoresList         = document.getElementById('scores-list');
const scoringTeamName    = document.getElementById('scoring-team-name');
const scoreEntryPanel    = document.getElementById('score-entry-panel');
const nextTeamPanel      = document.getElementById('next-team-panel');
const scoreMinusBtn      = document.getElementById('score-minus');
const scorePlusBtn       = document.getElementById('score-plus');
const stepperValue       = document.getElementById('stepper-value');
const confirmScoreBtn    = document.getElementById('confirm-score-btn');
const nextTeamBtn        = document.getElementById('next-team-btn');
const stopScoreboardBtn  = document.getElementById('stop-scoreboard-btn');
const teamCountBtns      = document.querySelectorAll('.team-count-btn');

let selectedTeamCount = 3;
let pendingBoardMode  = false;

/* ----------------------------------------------------------------
   SETUP – TEAMNAMEN GENEREREN
---------------------------------------------------------------- */

function generateTeamInputs(count) {
  teamNameInputs.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const div = document.createElement('div');
    div.className = 'player-name-input';
    div.innerHTML = `
      <span class="player-name-dot" style="background:${TEAM_COLORS[i]}"></span>
      <input type="text" id="team-input-${i}"
             value="Team ${i + 1}" maxlength="18" />
    `;
    teamNameInputs.appendChild(div);
  }
}

/* ----------------------------------------------------------------
   SPEL STARTEN (met teams)
---------------------------------------------------------------- */

function openTeamSetup() {
  startScreen.classList.remove('screen--active');
  teamSetupScreen.classList.add('screen--active');
  generateTeamInputs(selectedTeamCount);
}

function startScoreboardGame() {
  scoreboardState.teams        = [];
  scoreboardState.currentTeam  = 0;
  scoreboardState.active       = true;

  scoreboardState.boardActive = pendingBoardMode;

  for (let i = 0; i < selectedTeamCount; i++) {
    const input = document.getElementById(`team-input-${i}`);
    scoreboardState.teams.push({
      name:     (input && input.value.trim()) ? input.value.trim() : `Team ${i + 1}`,
      score:    0,
      color:    TEAM_COLORS[i],
      position: 0
    });
  }

  state.filteredCards = getFilteredCards();
  if (!state.filteredCards.length) state.filteredCards = [...CARDS];
  state.usedIndices = [];

  teamSetupScreen.classList.remove('screen--active');
  if (scoreboardState.boardActive) {
    saveGameState();
    showBoardScreen();
  } else {
    playNextTeamCard();
  }
}

/* ----------------------------------------------------------------
   KAART SPELEN (voor huidig team)
---------------------------------------------------------------- */

function playNextTeamCard() {
  const card = getNextCard();
  if (!card) return;

  state.score = 0;
  state.round = scoreboardState.currentTeam + 1;
  scoreEl.textContent = '0';
  roundEl.textContent = scoreboardState.currentTeam + 1;

  renderCard(card);
  resetTimerVisuals();
  gameScreen.classList.add('screen--active');
}

/* ----------------------------------------------------------------
   SCOREBORD TONEN (na TIME'S UP)
---------------------------------------------------------------- */

function showScoreboardScreen() {
  // Vul stepper voor met het aantal CORRECT-drukken uit het spel
  scoreboardState.pendingScore = Math.min(state.score, 5);

  const team = scoreboardState.teams[scoreboardState.currentTeam];
  scoringTeamName.textContent = team.name;
  scoringTeamName.style.color = team.color;
  stepperValue.textContent    = scoreboardState.pendingScore;

  renderScoresList();

  scoreEntryPanel.style.display  = 'flex';
  nextTeamPanel.style.display    = 'none';

  gameScreen.classList.remove('screen--active');
  scoreboardScreen.classList.add('screen--active');
}

/* ----------------------------------------------------------------
   SCORES LIJST RENDEREN
---------------------------------------------------------------- */

function renderScoresList() {
  scoresList.innerHTML = '';

  // Sorteer op score (kopieer – niet muteren)
  const sorted = scoreboardState.teams
    .map((t, i) => ({ ...t, idx: i }))
    .sort((a, b) => b.score - a.score);

  sorted.forEach((team, rank) => {
    const isCurrent = team.idx === scoreboardState.currentTeam;
    const isLeader  = rank === 0 && team.score > 0 && !isCurrent;

    const row = document.createElement('div');
    row.className = 'score-row' +
      (isCurrent ? ' score-row--active' : '') +
      (isLeader  ? ' score-row--leader'  : '');

    row.innerHTML = `
      <span class="score-dot" style="background:${team.color}"></span>
      <span class="score-name">${team.name}</span>
      <span class="score-points">${team.score}</span>
      <span class="score-label">PNT</span>
    `;
    scoresList.appendChild(row);
  });
}

/* ----------------------------------------------------------------
   SCORE BEVESTIGEN
---------------------------------------------------------------- */

function confirmScore() {
  const team = scoreboardState.teams[scoreboardState.currentTeam];
  team.score    += scoreboardState.pendingScore;
  team.position  = (team.position || 0) + scoreboardState.pendingScore;

  saveGameState();

  if (scoreboardState.boardActive && team.position >= BOARD_SQUARES) {
    team.position = BOARD_SQUARES;
    showWin(team);
    return;
  }

  renderScoresList();
  scoreEntryPanel.style.display = 'none';
  nextTeamPanel.style.display   = 'flex';
}

/* ----------------------------------------------------------------
   VOLGENDE TEAM
---------------------------------------------------------------- */

function goNextTeam() {
  scoreboardState.currentTeam =
    (scoreboardState.currentTeam + 1) % scoreboardState.teams.length;
  scoreboardScreen.classList.remove('screen--active');
  if (scoreboardState.boardActive) {
    showBoardScreen();
  } else {
    playNextTeamCard();
  }
}

/* ----------------------------------------------------------------
   EVENT LISTENERS – SCOREBORD
---------------------------------------------------------------- */

startScoreboardBtn.addEventListener('click', () => { pendingBoardMode = true;  openTeamSetup(); });
document.getElementById('start-teams-btn').addEventListener('click', () => { pendingBoardMode = false; openTeamSetup(); });

backFromTeamsBtn.addEventListener('click', () => {
  teamSetupScreen.classList.remove('screen--active');
  startScreen.classList.add('screen--active');
});

teamCountBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    teamCountBtns.forEach(b => b.classList.remove('count-btn--active'));
    btn.classList.add('count-btn--active');
    selectedTeamCount = parseInt(btn.dataset.count, 10);
    generateTeamInputs(selectedTeamCount);
  });
});

confirmTeamsBtn.addEventListener('click', startScoreboardGame);

scoreMinusBtn.addEventListener('click', () => {
  if (scoreboardState.pendingScore > 0) {
    scoreboardState.pendingScore--;
    stepperValue.textContent = scoreboardState.pendingScore;
  }
});

scorePlusBtn.addEventListener('click', () => {
  if (scoreboardState.pendingScore < 5) {
    scoreboardState.pendingScore++;
    stepperValue.textContent = scoreboardState.pendingScore;
  }
});

confirmScoreBtn.addEventListener('click', confirmScore);

nextTeamBtn.addEventListener('click', goNextTeam);

stopScoreboardBtn.addEventListener('click', () => {
  scoreboardState.active = false;
  stopTimer();
  removeTimesUpOverlay();
  scoreboardScreen.classList.remove('screen--active');
  gameScreen.classList.remove('screen--active');
  startScreen.classList.add('screen--active');
});

/* ================================================================
   13. BORD – LOGICA
================================================================ */

const BOARD_SQUARES = 60;

/* ----------------------------------------------------------------
   localStorage
---------------------------------------------------------------- */
function saveGameState() {
  if (!scoreboardState.boardActive) return;
  localStorage.setItem('30s-han-board', JSON.stringify({
    teams:            scoreboardState.teams,
    currentTeam:      scoreboardState.currentTeam,
    selectedCategory: state.selectedCategory,
    filteredCards:    state.filteredCards,
    usedIndices:      state.usedIndices
  }));
}

function loadGameState() {
  try {
    const raw = localStorage.getItem('30s-han-board');
    if (!raw) return false;
    const data = JSON.parse(raw);
    if (!data.teams || !data.teams.length) return false;
    scoreboardState.teams       = data.teams;
    scoreboardState.currentTeam = data.currentTeam || 0;
    scoreboardState.active      = true;
    scoreboardState.boardActive = true;
    state.selectedCategory      = data.selectedCategory || 'All';
    state.filteredCards         = data.filteredCards || getFilteredCards();
    state.usedIndices           = data.usedIndices   || [];
    return true;
  } catch (e) { return false; }
}

function clearGameState() {
  localStorage.removeItem('30s-han-board');
}

/* ----------------------------------------------------------------
   Bord opbouwen (snake-patroon)
---------------------------------------------------------------- */
function buildBoardOrder() {
  const cells = [];
  for (let rowFromBottom = 5; rowFromBottom >= 0; rowFromBottom--) {
    const start = rowFromBottom * 10 + 1;
    const row = Array.from({ length: 10 }, (_, i) => start + i);
    if (rowFromBottom % 2 !== 0) row.reverse();
    cells.push(...row);
  }
  return cells;
}

function renderBoard() {
  const grid       = document.getElementById('board-grid');
  const startPawns = document.getElementById('board-start-pawns');

  if (!grid.dataset.built) {
    buildBoardOrder().forEach(sq => {
      const band = Math.floor((sq - 1) / 10);
      const cell = document.createElement('div');
      cell.className = 'board-cell' + (sq === BOARD_SQUARES ? ' board-cell--finish' : '');
      cell.dataset.sq   = sq;
      cell.dataset.band = band;
      const label = sq === BOARD_SQUARES ? '&#9873; ' + sq : sq;
      cell.innerHTML = `<span class="cell-num">${label}</span><div class="cell-pawns"></div>`;
      grid.appendChild(cell);
    });
    grid.dataset.built = '1';
  }

  grid.querySelectorAll('.cell-pawns').forEach(el => { el.innerHTML = ''; });
  startPawns.innerHTML = '';

  scoreboardState.teams.forEach(team => {
    const pawn = document.createElement('span');
    pawn.className = 'board-pawn';
    pawn.style.background   = team.color;
    pawn.style.borderColor  = 'rgba(255,255,255,0.65)';
    pawn.style.boxShadow    = `0 2px 8px rgba(0,0,0,0.55), 0 0 10px ${team.color}99`;
    pawn.title = team.name;

    const pos = team.position || 0;
    if (pos <= 0) {
      startPawns.appendChild(pawn);
    } else {
      const sq   = Math.min(pos, BOARD_SQUARES);
      const cell = grid.querySelector(`[data-sq="${sq}"]`);
      if (cell) cell.querySelector('.cell-pawns').appendChild(pawn);
    }
  });

  // Huidig team label
  const current = scoreboardState.teams[scoreboardState.currentTeam];
  const nameEl  = document.getElementById('board-current-team');
  if (nameEl && current) {
    nameEl.textContent = current.name;
    nameEl.style.color = current.color;
  }

  // Team-statusbalk
  const statusEl = document.getElementById('board-team-status');
  if (statusEl) {
    statusEl.innerHTML = '';
    scoreboardState.teams.forEach((team, idx) => {
      const isCurrent = idx === scoreboardState.currentTeam;
      const pct = Math.round(((team.position || 0) / BOARD_SQUARES) * 100);
      const item = document.createElement('div');
      item.className = 'bts-item' + (isCurrent ? ' bts-item--active' : '');
      item.innerHTML = `
        <span class="bts-pawn" style="background:${team.color};box-shadow:0 0 8px ${team.color}88"></span>
        <span class="bts-name">${team.name}</span>
        <div class="bts-track"><div class="bts-fill" style="width:${pct}%;background:${team.color}"></div></div>
        <span class="bts-pos">${team.position || 0}<span class="bts-total">/60</span></span>
      `;
      statusEl.appendChild(item);
    });
  }
}

function showBoardScreen() {
  renderBoard();
  gameScreen.classList.remove('screen--active');
  scoreboardScreen.classList.remove('screen--active');
  teamSetupScreen.classList.remove('screen--active');
  startScreen.classList.remove('screen--active');
  document.getElementById('board-screen').classList.add('screen--active');
}

/* ----------------------------------------------------------------
   Win
---------------------------------------------------------------- */
function showWin(team) {
  clearGameState();
  renderBoard();
  document.getElementById('board-screen').classList.add('screen--active');
  gameScreen.classList.remove('screen--active');
  scoreboardScreen.classList.remove('screen--active');
  startScreen.classList.remove('screen--active');
  const nameEl = document.getElementById('win-team-name');
  nameEl.textContent = team.name;
  nameEl.style.color = team.color;
  document.getElementById('win-overlay').classList.add('win-overlay--visible');
}

/* ----------------------------------------------------------------
   Event listeners – bord
---------------------------------------------------------------- */
document.getElementById('board-play-btn').addEventListener('click', () => {
  document.getElementById('board-screen').classList.remove('screen--active');
  playNextTeamCard();
});

document.getElementById('board-reset-btn').addEventListener('click', () => {
  handleReset();
});

document.getElementById('win-new-game-btn').addEventListener('click', () => {
  handleReset();
});

/* ----------------------------------------------------------------
   Herstel opgeslagen spelstand bij pagina-open
---------------------------------------------------------------- */
if (loadGameState()) {
  showBoardScreen();
}

