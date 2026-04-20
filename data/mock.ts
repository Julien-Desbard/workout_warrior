import type { Cours, Formateur, Temoignage, Lecon } from '@/types'

// ─── Formateurs ──────────────────────────────────────────────────────────────

export const formateurs: Formateur[] = [
  {
    slug: 'marie-leclerc',
    nom: 'Marie Leclerc',
    titre: 'Kinésithérapeute DE, spécialiste rééducation du sport',
    bio: "Kinésithérapeute depuis 15 ans, Marie exerce en cabinet libéral à Lyon après une expérience de 5 ans au sein d'un centre de rééducation post-chirurgicale. Elle forme régulièrement ses pairs aux techniques de rééducation orthopédique avancées et est co-auteur d'un protocole de reprise sportive post-LCA validé par la SFKiné.",
    avatarUrl: '', // TODO: URL à fournir
    nbCours: 3,
  },
  {
    slug: 'thomas-renaud',
    nom: 'Thomas Renaud',
    titre: 'Masseur-kinésithérapeute du sport, formateur FFMKR',
    bio: "Thomas accompagne depuis 10 ans des athlètes de haut niveau (triathlon, rugby, natation) au sein d'un service de médecine du sport. Formateur certifié par la FFMKR, il intervient dans plusieurs IFMK sur la biomécanique du geste sportif et la prévention des blessures.",
    avatarUrl: '', // TODO: URL à fournir
    nbCours: 2,
  },
  {
    slug: 'claire-fontaine',
    nom: 'Claire Fontaine',
    titre: 'Enseignante APA, doctorante en sciences du mouvement',
    bio: "Enseignante en Activité Physique Adaptée et doctorante à l'Université de Paris-Saclay, Claire développe des programmes APA pour patients atteints de maladies chroniques. Elle collabore avec plusieurs CHU et est membre du comité scientifique de la Société Française des Professionnels en APA.",
    avatarUrl: '', // TODO: URL à fournir
    nbCours: 2,
  },
  {
    slug: 'julien-moreau',
    nom: 'Julien Moreau',
    titre: 'Kinésithérapeute pédiatrique, CHU de Bordeaux',
    bio: "Kinésithérapeute au CHU de Bordeaux depuis 12 ans, Julien est référent en kinésithérapie respiratoire pédiatrique. Il a formé plus de 300 professionnels aux techniques de désencombrement bronchique du nourrisson et participe aux recommandations HAS sur la kinésithérapie des voies aériennes chez l'enfant.",
    avatarUrl: '', // TODO: URL à fournir
    nbCours: 1,
  },
  {
    slug: 'sophie-andre',
    nom: 'Sophie André',
    titre: 'Kinésithérapeute neurologique, Réseau de Neurorééducation',
    bio: "Spécialisée en rééducation neurologique depuis 8 ans, Sophie travaille en réseau de neurorééducation ambulatoire. Elle maîtrise les approches Bobath, Perfetti et la thérapie miroir. Elle anime des formations continues sur la reprogrammation neuromusculaire pour des équipes de rééducation pluridisciplinaires.",
    avatarUrl: '', // TODO: URL à fournir
    nbCours: 1,
  },
]

// ─── Cours ───────────────────────────────────────────────────────────────────

export const cours: Cours[] = [
  {
    slug: 'reeducation-coiffe-rotateurs-post-chirurgie',
    titre: 'Rééducation de la coiffe des rotateurs post-chirurgie',
    descriptionCourte: 'Protocole complet de rééducation après chirurgie de la coiffe : de la phase inflammatoire à la reprise fonctionnelle.',
    description: "Ce cours couvre l'intégralité de la prise en charge kinésithérapeutique après réparation chirurgicale de la coiffe des rotateurs. Vous apprendrez à évaluer le patient à chaque phase de cicatrisation, à doser la progression de la rééducation et à anticiper les complications. Le protocole intègre les dernières données probantes en orthopédie et vous donne des outils concrets pour adapter votre prise en charge.",
    thematique: 'Rééducation ortho',
    niveau: 'Expert',
    dateMaj: '2025-01-15',
    formateurSlug: 'marie-leclerc',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1663126424006-45bcce333a3a?q=80&w=2087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    videoUrl: 'https://www.youtube.com/watch?v=0hP9JdlY5WE',
    objectifs: [
      'Maîtriser les phases de cicatrisation tendineuse post-opératoire',
      'Doser la progression des exercices selon le stade de réparation',
      'Évaluer la force et la mobilité à chaque étape du protocole',
      "Identifier les signes d'alerte et adapter la prise en charge",
      'Préparer la reprise des activités de la vie quotidienne et du sport',
      'Appliquer les techniques manuelles adaptées à chaque phase',
    ],
    chapitres: [
      {
        titre: 'Phase inflammatoire (J0–J45)',
        lecons: [
          { slug: 'anatomie-chirurgie', titre: 'Rappels anatomiques et types de réparations chirurgicales', duree: 18, description: "Vue d'ensemble des structures anatomiques impliquées et des différentes techniques chirurgicales utilisées.", videoUrl: 'https://www.youtube.com/watch?v=HYKUtMzeLsE' },
          { slug: 'evaluation-initiale', titre: 'Évaluation initiale et objectifs de phase', duree: 14, description: 'Comment structurer la première consultation et définir les objectifs thérapeutiques de la phase inflammatoire.', videoUrl: 'https://www.youtube.com/watch?v=Og_1PzA6_eI' },
          { slug: 'mobilisation-douce', titre: 'Techniques de mobilisation douce en phase aiguë', duree: 20, description: "Pendulaire de Codman, mobilisations passives guidées, gestion de la douleur et de l'œdème.", videoUrl: 'https://www.youtube.com/watch?v=_kIYWYO0Qyw' },
        ],
      },
      {
        titre: 'Phase de cicatrisation (J45–J90)',
        lecons: [
          { slug: 'renforcement-progressif', titre: 'Débuter le renforcement progressif en chaîne ouverte', duree: 22, description: "Protocole d'introduction du renforcement isométrique puis dynamique des rotateurs en toute sécurité." },
          { slug: 'proprioception-epaule', titre: 'Proprioception et stabilisation gléno-humérale', duree: 17, description: 'Exercices de proprioception, activation des stabilisateurs péri-scapulaires et coordination neuromusculaire.' },
          { slug: 'bilan-phase2', titre: 'Bilan de phase et critères de progression', duree: 11, description: 'Tests fonctionnels validés pour objectiver la progression vers la phase suivante.' },
        ],
      },
      {
        titre: 'Phase de remodelage et reprise fonctionnelle (J90–J6 mois)',
        lecons: [
          { slug: 'renforcement-chaine-fermee', titre: 'Renforcement en chaîne fermée et mouvements fonctionnels', duree: 25, description: 'Transition vers des exercices multiarticulaires en charge, simulation des gestes du quotidien.' },
          { slug: 'retour-sport', titre: "Protocole de retour au sport ou à l'activité physique", duree: 20, description: 'Critères de clearance, progression sport-spécifique et prévention de la récidive.' },
          { slug: 'cas-complexes', titre: 'Gestion des cas complexes et comorbidités', duree: 15, description: 'Prise en charge des patients âgés, des ré-interventions et des situations de récupération lente.' },
        ],
      },
    ],
    get dureeTotal() { return this.chapitres.flatMap(c => c.lecons).reduce((s, l) => s + l.duree, 0) },
    get nbLecons() { return this.chapitres.reduce((s, c) => s + c.lecons.length, 0) },
  },
  {
    slug: 'apa-patients-post-avc-12-semaines',
    titre: 'APA pour patients post-AVC : progression sur 12 semaines',
    descriptionCourte: 'Programme APA structuré pour accompagner la récupération fonctionnelle des patients après un accident vasculaire cérébral.',
    description: "Ce cours propose un programme complet d'Activité Physique Adaptée sur 12 semaines destiné aux patients en phase subaiguë et chronique post-AVC. Chaque semaine est détaillée avec objectifs, exercices, progressions et points de vigilance. Le programme intègre les principes de plasticité cérébrale et les recommandations internationales en neuro-rééducation par l'exercice.",
    thematique: 'Neuro',
    niveau: 'Intermédiaire',
    dateMaj: '2025-02-20',
    formateurSlug: 'claire-fontaine',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1681995839744-0a1940b7c659?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    objectifs: [
      "Comprendre les mécanismes de plasticité cérébrale induits par l'exercice",
      'Construire un programme APA sécurisé et progressif sur 12 semaines',
      'Adapter les exercices aux séquelles motrices et cognitives du patient',
      'Évaluer les capacités fonctionnelles à chaque checkpoint du programme',
      "Gérer les risques cardiovasculaires liés à l'effort post-AVC",
      "Favoriser l'autonomie et la compliance du patient sur le long terme",
    ],
    chapitres: [
      {
        titre: 'Semaines 1–3 : Éveil moteur et sécurité',
        lecons: [
          { slug: 'bilan-fonctionnel-initial', titre: "Bilan fonctionnel initial : outils d'évaluation AVC", duree: 20, description: 'MRC, Fugl-Meyer, BBS, 6-MWT : choisir les bons outils pour objectiver le point de départ.' },
          { slug: 'exercices-eveil-moteur', titre: "Exercices d'éveil moteur côté hémiparétique", duree: 18, description: "Mobilisations actives-aidées, travail de l'activation volontaire et stimulation proprioceptive." },
          { slug: 'vigilance-cardiovasculaire', titre: "Surveillance et adaptation cardiovasculaire à l'effort", duree: 12, description: "Zones cibles de fréquence cardiaque, signes d'alarme et conduite à tenir." },
        ],
      },
      {
        titre: 'Semaines 4–8 : Consolidation et progression',
        lecons: [
          { slug: 'equilibre-posture', titre: "Travail de l'équilibre et de la posture debout", duree: 22, description: "Circuit d'exercices progressifs pour améliorer le contrôle postural et réduire le risque de chute." },
          { slug: 'marche-transferts', titre: 'Amélioration de la marche et des transferts', duree: 20, description: "Travail de la qualité du pas, de la symétrie d'appui et des transferts assis-debout." },
          { slug: 'coordination-membre-superieur', titre: 'Coordination du membre supérieur : tâches fonctionnelles', duree: 15, description: "Activités orientées sur l'objet, thérapie par contrainte induite et bimanualité." },
          { slug: 'checkpoint-semaine8', titre: 'Checkpoint S8 : réévaluation et ajustement du programme', duree: 10, description: "Protocole de réévaluation à mi-parcours et critères d'ajustement de l'intensité." },
        ],
      },
      {
        titre: 'Semaines 9–12 : Autonomie et intégration',
        lecons: [
          { slug: 'aerobic-adapte', titre: 'Activité aérobie adaptée : marche rapide et vélo couché', duree: 18, description: 'Programmer et monitorer une activité aérobie sécurisée en phase chronique post-AVC.' },
          { slug: 'avd-iadl', titre: 'Réintégration dans les activités de la vie quotidienne', duree: 14, description: 'Transfert des acquis moteurs vers les AVD et IADL : autonomie à domicile et au dehors.' },
          { slug: 'bilan-final-retour-maison', titre: 'Bilan final et plan de maintien des acquis', duree: 16, description: 'Évaluation finale, programme de maintien auto-géré et ressources pour les proches aidants.' },
        ],
      },
    ],
    get dureeTotal() { return this.chapitres.flatMap(c => c.lecons).reduce((s, l) => s + l.duree, 0) },
    get nbLecons() { return this.chapitres.reduce((s, c) => s + c.lecons.length, 0) },
  },
  {
    slug: 'reprogrammation-neuromusculaire-genou',
    titre: 'Reprogrammation neuromusculaire du genou',
    descriptionCourte: 'Approche sensorimotrice pour restaurer le contrôle neuromusculaire du genou après lésion ou chirurgie.',
    description: 'Ce cours explore les fondements scientifiques et les applications cliniques de la reprogrammation neuromusculaire du genou. À travers des protocoles progressifs basés sur les preuves, vous apprendrez à restaurer le contrôle sensimoteur, à travailler la stabilité dynamique et à réduire le risque de récidive lésionnelle.',
    thematique: 'Rééducation ortho',
    niveau: 'Intermédiaire',
    dateMaj: '2025-03-10',
    formateurSlug: 'marie-leclerc',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1661636145144-0d0636bbcc31?q=80&w=2464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    objectifs: [
      'Comprendre les mécanismes de la proprioception et du contrôle neuromusculaire',
      'Évaluer les déficits sensimoteurs après lésion ligamentaire ou méniscale',
      'Appliquer des exercices de reprogrammation progressifs et fonctionnels',
      'Intégrer les stimuli visuels, vestibulaires et cutanés dans la rééducation',
      'Préparer le retour aux activités sportives avec des critères objectifs',
      'Construire un programme de prévention secondaire personnalisé',
    ],
    chapitres: [
      {
        titre: 'Bases neurophysiologiques',
        lecons: [
          { slug: 'proprioception-genou', titre: 'Proprioception du genou : récepteurs et voies afférentes', duree: 16, description: 'Anatomie fonctionnelle des mécanorécepteurs ligamentaires, capsulaires et musculaires.' },
          { slug: 'deficits-apres-lesion', titre: 'Déficits sensimoteurs après lésion ligamentaire', duree: 14, description: 'Impact des lésions ligamentaires sur la proprioception, le temps de réaction et le schéma moteur.' },
        ],
      },
      {
        titre: 'Protocole de reprogrammation',
        lecons: [
          { slug: 'stabilisation-statique', titre: 'Phase 1 : stabilisation statique et appui monopodal', duree: 20, description: 'Exercices en appui monopodal sur surfaces stables puis instables, avec et sans vision.' },
          { slug: 'stabilisation-dynamique', titre: 'Phase 2 : stabilisation dynamique et perturbations', duree: 22, description: 'Squats, fentes, réponses aux perturbations externes, travail en plyométrie légère.' },
          { slug: 'taches-sport-specifiques', titre: 'Phase 3 : tâches sport-spécifiques et double tâche', duree: 18, description: 'Intégration de tâches cognitives et motrices simultanées, simulation gestuelle sport-spécifique.' },
        ],
      },
      {
        titre: 'Retour au sport et prévention',
        lecons: [
          { slug: 'criteres-return-to-play', titre: 'Critères de Return to Play : tests fonctionnels validés', duree: 15, description: 'Triple hop test, Y-Balance Test, asymétries acceptables et seuils de clearance.' },
          { slug: 'programme-prevention', titre: 'Programme de prévention secondaire : FIFA 11+ adapté', duree: 12, description: 'Déclinaison du protocole FIFA 11+ pour différents sports et niveaux de pratique.' },
        ],
      },
    ],
    get dureeTotal() { return this.chapitres.flatMap(c => c.lecons).reduce((s, l) => s + l.duree, 0) },
    get nbLecons() { return this.chapitres.reduce((s, c) => s + c.lecons.length, 0) },
  },
  {
    slug: 'prevention-chutes-personne-agee',
    titre: 'Prévention des chutes chez la personne âgée',
    descriptionCourte: "Évaluation du risque de chute et programmes d'exercices multifactoriels pour maintenir l'autonomie des seniors.",
    description: "La chute est la première cause de mortalité accidentelle chez les plus de 65 ans. Ce cours vous donne les outils pour évaluer le risque, identifier les facteurs modifiables et mettre en place des programmes d'exercices validés. Il intègre les recommandations HAS et les données de la revue Cochrane sur l'efficacité des interventions multifactorielles.",
    thematique: 'Gériatrie',
    niveau: 'Débutant',
    dateMaj: '2024-11-30',
    formateurSlug: 'claire-fontaine',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1661715618313-c26337d41542?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    objectifs: [
      'Identifier les facteurs de risque intrinsèques et extrinsèques de chute',
      "Utiliser les outils d'évaluation validés (TUG, BBS, SPPB)",
      "Construire un programme d'exercices multifactoriel adapté au profil du patient",
      "Intégrer le travail d'équilibre, de force et de marche dans la pratique quotidienne",
      'Sensibiliser le patient et son entourage aux mesures préventives',
      "Évaluer l'efficacité du programme à 3 et 6 mois",
    ],
    chapitres: [
      {
        titre: 'Épidémiologie et facteurs de risque',
        lecons: [
          { slug: 'epidemiologie-chutes', titre: 'Épidémiologie des chutes chez le sujet âgé', duree: 10, description: 'Données épidémiologiques, coûts humains et économiques, enjeux de santé publique.' },
          { slug: 'facteurs-risque', titre: 'Facteurs de risque intrinsèques et extrinsèques', duree: 14, description: 'Inventaire complet des facteurs modifiables (force, équilibre, vision, médicaments, environnement).' },
        ],
      },
      {
        titre: 'Évaluation clinique',
        lecons: [
          { slug: 'outils-evaluation-chute', titre: "Tests et outils d'évaluation du risque de chute", duree: 18, description: 'Protocoles TUG, BBS, SPPB, Tinetti : passation, score, interprétation clinique.' },
          { slug: 'profil-patient-risque', titre: 'Construire le profil de risque personnalisé', duree: 12, description: "Synthèse des données d'évaluation pour prioriser les axes de travail." },
        ],
      },
      {
        titre: "Programmes d'exercices",
        lecons: [
          { slug: 'exercices-equilibre-force', titre: 'Équilibre et force : le duo indispensable', duree: 20, description: "Programme type d'exercices de renforcement du membre inférieur et de travail de l'équilibre (Otago, Tai Chi adapté)." },
          { slug: 'marche-double-tache', titre: 'Marche et double tâche cognitive', duree: 15, description: "Intégration de tâches cognitives pendant la marche pour améliorer l'automatisation et la vigilance." },
          { slug: 'education-patient', titre: "Éducation thérapeutique et aménagement de l'environnement", duree: 11, description: "Guide de l'entretien motivationnel, points de sécurité à domicile et rôle de l'entourage." },
        ],
      },
    ],
    get dureeTotal() { return this.chapitres.flatMap(c => c.lecons).reduce((s, l) => s + l.duree, 0) },
    get nbLecons() { return this.chapitres.reduce((s, c) => s + c.lecons.length, 0) },
  },
  {
    slug: 'reprise-sport-lca-protocole-complet',
    titre: 'Reprise du sport après LCA : protocole complet',
    descriptionCourte: 'De la chirurgie au terrain : 9 mois de rééducation structurés, des critères de progressions validés et la préparation mentale.',
    description: "La reconstruction du LCA est la chirurgie ligamentaire la plus pratiquée en France. Ce cours détaille un protocole de rééducation de 9 mois basé sur les dernières données probantes, intégrant la rééducation physique, les critères fonctionnels de progression et l'accompagnement psychologique du retour au sport.",
    thematique: 'Sport-santé',
    niveau: 'Expert',
    dateMaj: '2025-01-05',
    formateurSlug: 'thomas-renaud',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1663076442826-ca44fe6b070d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    objectifs: [
      'Maîtriser le protocole de rééducation post-LCA de J0 à M9',
      'Appliquer les critères de progression basés sur les preuves à chaque étape',
      'Travailler la plyométrie et le renforcement musculaire spécifique',
      "Intégrer l'évaluation psychologique et le fear avoidance dans la prise en charge",
      "Préparer la reprise de l'entraînement collectif et de la compétition",
      'Rédiger un compte-rendu de fin de rééducation orienté return to sport',
    ],
    chapitres: [
      {
        titre: 'Phase pré-opératoire et post-opératoire immédiate (J0–M2)',
        lecons: [
          { slug: 'prehabilitation-lca', titre: 'Préhabilitation : préparer le genou avant la chirurgie', duree: 15, description: "Renforcement préopératoire, réduction de l'épanchement et travail de l'extension complète." },
          { slug: 'post-op-immediate', titre: "J0–J15 : gestion de la douleur, de l'œdème et du réveil musculaire", duree: 20, description: 'Protocole post-opératoire immédiat : mise en charge, électrostimulation, cryothérapie.' },
          { slug: 'recuperation-mobilite', titre: 'Récupération de la mobilité complète sans forcer la greffe', duree: 18, description: 'Objectifs de flexion et extension par semaine, techniques manuelles et automobilisation.' },
        ],
      },
      {
        titre: 'Phase de renforcement (M2–M5)',
        lecons: [
          { slug: 'chaine-fermee-ouverte', titre: 'Chaîne fermée vs chaîne ouverte : quand et comment', duree: 22, description: "Débat scientifique et recommandations pratiques sur l'utilisation des deux chaînes cinétiques." },
          { slug: 'renforcement-ischio-quadriceps', titre: 'Renforcement ischio-jambiers et quadriceps : ratios cibles', duree: 20, description: 'Protocoles de renforcement orientés sur la symétrie et les ratios H/Q.' },
          { slug: 'proprioception-avancee', titre: 'Proprioception avancée et stabilisation dynamique', duree: 17, description: 'Travail en instabilité, perturbations multidirectionnelles et double tâche.' },
        ],
      },
      {
        titre: 'Phase de préparation au retour au sport (M5–M9)',
        lecons: [
          { slug: 'plyometrie-progressive', titre: 'Introduction de la plyométrie : sauts, réceptions, changements de direction', duree: 25, description: 'Progression plyométrique basse vers haute intensité, critères de sécurité et monitoring de la charge.' },
          { slug: 'return-to-sport-tests', titre: 'Batterie de tests Return to Sport : seuils et interprétation', duree: 20, description: 'LSI quadriceps et ischio-jambiers, hop tests, Y-Balance, ACL-RSI score.' },
          { slug: 'accompagnement-psy', titre: 'Accompagnement psychologique et fear avoidance', duree: 14, description: 'ACL-RSI, techniques de visualisation, gestion de la peur de la récidive et motivation.' },
        ],
      },
    ],
    get dureeTotal() { return this.chapitres.flatMap(c => c.lecons).reduce((s, l) => s + l.duree, 0) },
    get nbLecons() { return this.chapitres.reduce((s, c) => s + c.lecons.length, 0) },
  },
  {
    slug: 'kinesitherapie-respiratoire-nourrisson',
    titre: 'Kinésithérapie respiratoire du nourrisson',
    descriptionCourte: 'Maîtrisez les techniques de désencombrement bronchique du nourrisson en toute sécurité et efficacité.',
    description: "Ce cours couvre les techniques de kinésithérapie respiratoire pédiatrique adaptées au nourrisson et au jeune enfant. Basé sur les recommandations HAS et les données scientifiques récentes, il vous donnera les compétences pour prendre en charge les infections respiratoires basses, la mucoviscidose et les pathologies chroniques de l'enfant.",
    thematique: 'Pédiatrie',
    niveau: 'Intermédiaire',
    dateMaj: '2025-02-01',
    formateurSlug: 'julien-moreau',
    imageUrl: 'https://images.unsplash.com/photo-1489087584469-437d40177a45?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    objectifs: [
      "Maîtriser l'anatomie et la physiologie respiratoire spécifique au nourrisson",
      'Réaliser un bilan respiratoire adapté au jeune enfant',
      'Appliquer les techniques ILB, DA et ELTGOL en sécurité',
      'Adapter la fréquence et la durée des séances selon le tableau clinique',
      'Rassurer les parents et les impliquer dans la prise en charge',
      'Reconnaître les signes de détresse respiratoire et les contre-indications',
    ],
    chapitres: [
      {
        titre: 'Physiologie et bilan',
        lecons: [
          { slug: 'anatomie-resp-pediatrique', titre: 'Anatomie et physiologie respiratoire du nourrisson', duree: 16, description: 'Spécificités anatomiques (voies aériennes étroites, compliance thoracique élevée) et implications cliniques.' },
          { slug: 'bilan-respiratoire-enfant', titre: 'Bilan respiratoire pédiatrique : observation, auscultation, SpO2', duree: 14, description: "Protocole d'évaluation adapté au jeune enfant, signes de lutte et interprétation de l'auscultation." },
        ],
      },
      {
        titre: 'Techniques de désencombrement',
        lecons: [
          { slug: 'ilb-technique', titre: 'ILB — Inspiration Lente et Basse : technique et indications', duree: 20, description: "Explication détaillée de l'ILB, positionnement du thérapeute, ajustement aux réponses du nourrisson." },
          { slug: 'da-pep-pfep', titre: 'DA, PEP et PFEP : variantes selon le tableau clinique', duree: 18, description: "Drainage autogène, PEP instrumentée, PFEP : choix de la technique selon l'âge et la pathologie." },
          { slug: 'gestion-seance', titre: 'Gestion de la séance : durée, fréquence, confort et sécurité', duree: 12, description: "Organisation pratique d'une séance, gestion du pleurs, critères d'arrêt et recommandations post-séance." },
        ],
      },
      {
        titre: 'Pathologies spécifiques et communication',
        lecons: [
          { slug: 'bronchiolite-reco-has', titre: 'Bronchiolite : recommandations HAS et protocole de prise en charge', duree: 15, description: "Indications, contre-indications, fréquence des séances selon la sévérité d'après les recommandations 2023." },
          { slug: 'mucoviscidose-enfant', titre: "Mucoviscidose chez l'enfant : spécificités et programme à long terme", duree: 20, description: "Prise en charge kinésithérapeutique de la mucoviscidose, coordination avec l'équipe pluridisciplinaire CRCM." },
          { slug: 'communication-parents', titre: 'Communication avec les parents : rassurer, expliquer, impliquer', duree: 10, description: 'Techniques de communication adaptée, éducation thérapeutique des proches et gestion des angoisses parentales.' },
        ],
      },
    ],
    get dureeTotal() { return this.chapitres.flatMap(c => c.lecons).reduce((s, l) => s + l.duree, 0) },
    get nbLecons() { return this.chapitres.reduce((s, c) => s + c.lecons.length, 0) },
  },
  {
    slug: 'lombalgie-chronique-approche-active',
    titre: 'Lombalgie chronique : approche active',
    descriptionCourte: "Sortir du paradigme passif : accompagner le patient lombalgique chronique vers l'autonomie et le mouvement.",
    description: "La lombalgie chronique représente un enjeu majeur de santé publique. Ce cours adopte une approche bio-psycho-sociale pour comprendre la douleur persistante et met en place des stratégies actives basées sur les recommandations internationales (HAS, KCE). L'accent est mis sur l'éducation à la douleur, le réentraînement à l'effort et la levée des peurs.",
    thematique: 'Rééducation ortho',
    niveau: 'Intermédiaire',
    dateMaj: '2024-12-10',
    formateurSlug: 'marie-leclerc',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1723629603701-da928761941a?q=80&w=2121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    objectifs: [
      'Adopter le modèle bio-psycho-social dans la prise en charge de la lombalgie',
      'Expliquer les mécanismes de la douleur persistante avec des outils pédagogiques',
      "Appliquer la thérapie d'exposition graduelle pour lever le fear avoidance",
      "Construire un programme de réentraînement à l'effort progressif et individualisé",
      'Évaluer et monitorer les indicateurs clés (douleur, incapacité, kinésiophobie)',
      'Orienter vers les autres acteurs de soins selon le profil du patient',
    ],
    chapitres: [
      {
        titre: 'Comprendre la douleur chronique',
        lecons: [
          { slug: 'modele-bps', titre: 'Le modèle bio-psycho-social : outil de lecture clinique', duree: 15, description: "Comment intégrer les dimensions biologiques, psychologiques et sociales dans l'évaluation initiale." },
          { slug: 'neurobiologie-douleur', titre: 'Neurobiologie de la douleur : du message nociceptif à la sensibilisation centrale', duree: 18, description: "Comprendre la sensibilisation centrale, l'hyperalgésie et les implications pour la rééducation." },
          { slug: 'fear-avoidance-kinesiophobia', titre: 'Fear avoidance et kinésiophobie : évaluation et conséquences', duree: 14, description: 'TSK, FABQ : évaluer la peur et la catastrophisation, comprendre le cercle vicieux inactivité-douleur.' },
        ],
      },
      {
        titre: 'Éducation et approche active',
        lecons: [
          { slug: 'pain-neuroscience-education', titre: 'Pain Neuroscience Education : expliquer la douleur en consultation', duree: 20, description: 'Outils concrets (métaphores, schémas) pour reconceptualiser la douleur chronique avec le patient.' },
          { slug: 'exposition-graduelle', titre: "Thérapie d'exposition graduelle : protocole PHODA adapté", duree: 22, description: 'Identification des activités redoutées, hiérarchisation et exposition progressive avec le patient.' },
        ],
      },
      {
        titre: "Programme d'exercices et suivi",
        lecons: [
          { slug: 'reentrainement-effort', titre: "Réentraînement à l'effort : dosage, progression, auto-gestion", duree: 20, description: "Prescrire l'exercice comme médicament : intensité, volume, fréquence et autonomisation du patient." },
          { slug: 'gainage-fonctionnel', titre: 'Gainage fonctionnel et renforcement du tronc : evidence-based', duree: 17, description: 'Sélection et progression des exercices de gainage en accord avec les données probantes actuelles.' },
          { slug: 'suivi-long-terme', titre: 'Suivi à long terme et prévention de la récidive', duree: 12, description: "Indicateurs de suivi, signaux d'alerte de rechute et ressources pour maintenir les acquis." },
        ],
      },
    ],
    get dureeTotal() { return this.chapitres.flatMap(c => c.lecons).reduce((s, l) => s + l.duree, 0) },
    get nbLecons() { return this.chapitres.reduce((s, c) => s + c.lecons.length, 0) },
  },
  {
    slug: 'apa-maladies-chroniques-diabete-obesite',
    titre: 'APA et maladies chroniques : diabète et obésité',
    descriptionCourte: "Concevoir et animer des séances d'activité physique adaptée pour des patients atteints de diabète de type 2 et/ou d'obésité.",
    description: "Ce cours pratique vous donne les outils pour concevoir et animer des séances d'APA sécurisées et efficaces pour des patients atteints de diabète de type 2 et/ou d'obésité. Basé sur les recommandations de la SFD, de la HAS et de la SFMES, il couvre l'évaluation des capacités, la prescription de l'exercice et l'éducation thérapeutique.",
    thematique: 'APA',
    niveau: 'Débutant',
    dateMaj: '2025-01-25',
    formateurSlug: 'claire-fontaine',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1723662058668-496da82fa67d?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    objectifs: [
      "Comprendre les effets de l'exercice sur le métabolisme glucidique et la composition corporelle",
      'Évaluer les capacités physiques du patient et identifier les contre-indications',
      "Prescrire l'exercice selon les recommandations (FITT) pour le DT2 et l'obésité",
      "Gérer les risques hypo/hyperglycémiques pendant l'effort",
      'Adapter les séances aux comorbidités associées (HTA, dyslipidémie, neuropathie)',
      "Favoriser la compliance et l'autonomie à long terme",
    ],
    chapitres: [
      {
        titre: "Physiologie de l'exercice dans le DT2 et l'obésité",
        lecons: [
          { slug: 'effets-exercice-glycemie', titre: "Effets de l'exercice sur la glycémie et la sensibilité à l'insuline", duree: 16, description: "Mécanismes physiologiques de la captation du glucose par le muscle pendant et après l'effort." },
          { slug: 'exercice-composition-corporelle', titre: 'Exercice et composition corporelle : ce que montrent les études', duree: 12, description: "Cardio vs résistance vs combiné : quelle modalité pour quels objectifs dans l'obésité ?" },
        ],
      },
      {
        titre: 'Évaluation et prescription',
        lecons: [
          { slug: 'evaluation-apa-chronique', titre: 'Évaluation initiale du patient et bilan APA', duree: 18, description: 'VO2max estimé, test de marche de 6 min, force de préhension, questionnaire IPAQ : choisir les bons outils.' },
          { slug: 'prescription-fitt', titre: 'Prescription FITT : fréquence, intensité, temps, type', duree: 20, description: "Déclinaison des recommandations pour le DT2 et l'obésité : aérobie, résistance et étirements." },
          { slug: 'gestion-risques-hypoglycemie', titre: "Gestion des risques d'hypoglycémie et d'hyperglycémie à l'effort", duree: 15, description: 'Protocoles de surveillance glycémique, adaptation de la charge selon les valeurs et conduite à tenir.' },
        ],
      },
      {
        titre: 'Mise en pratique et suivi',
        lecons: [
          { slug: 'seance-type-dt2', titre: 'Construire et animer une séance type pour patient DT2', duree: 18, description: "Échauffement, corps de séance, retour au calme : timing, choix d'exercices et gestion du groupe." },
          { slug: 'education-therapeutique-apa', titre: "Éducation thérapeutique et motivation à l'activité physique", duree: 14, description: "Entretien motivationnel, fixation d'objectifs SMART et outils pour soutenir la compliance au long cours." },
        ],
      },
    ],
    get dureeTotal() { return this.chapitres.flatMap(c => c.lecons).reduce((s, l) => s + l.duree, 0) },
    get nbLecons() { return this.chapitres.reduce((s, c) => s + c.lecons.length, 0) },
  },
  {
    slug: 'preparation-physique-sports-raquette',
    titre: 'Préparation physique pour sports de raquette',
    descriptionCourte: 'Programmes de préparation physique spécifiques au tennis, au badminton et au squash, avec focus prévention des blessures.',
    description: "Ce cours est destiné aux kinésithérapeutes et enseignants APA travaillant avec des joueurs de sports de raquette. Il couvre l'analyse biomécanique des gestes, les filières énergétiques sollicitées, les muscles à prioriser et les pathologies spécifiques à prévenir. Chaque module est illustré par des séances pratiques adaptables au niveau amateur ou compétiteur.",
    thematique: 'Sport-santé',
    niveau: 'Intermédiaire',
    dateMaj: '2025-03-01',
    formateurSlug: 'thomas-renaud',
    imageUrl: 'https://images.unsplash.com/photo-1545809074-59472b3f5ecc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    objectifs: [
      'Analyser les exigences biomécaniques et physiologiques des sports de raquette',
      'Concevoir des cycles de préparation physique spécifiques tennis/badminton/squash',
      'Prévenir les blessures de surcharge (coude, épaule, cheville, genou)',
      'Développer la vitesse de déplacement, la coordination et la réactivité',
      "Adapter la charge d'entraînement selon la période (compétition, hors-saison)",
      'Intégrer la récupération active dans le programme',
    ],
    chapitres: [
      {
        titre: 'Analyse des sports de raquette',
        lecons: [
          { slug: 'biomecanique-service-smash', titre: 'Biomécanique du service et du smash : risques et corrections', duree: 18, description: 'Analyse du geste de service au tennis et du smash au badminton : contraintes et facteurs de risque.' },
          { slug: 'filieres-energetiques-raquette', titre: "Filières énergétiques sollicitées et implications pour l'entraînement", duree: 14, description: 'ATP-PC, glycolytique et aérobie : proportions et conséquences sur la conception des séances.' },
        ],
      },
      {
        titre: 'Qualités physiques clés',
        lecons: [
          { slug: 'vitesse-deplacement-agilite', titre: 'Vitesse de déplacement et agilité : exercices spécifiques', duree: 22, description: 'Séances de fractionnés courts, shadow tennis/badminton, relais multidirectionnels avec raquette.' },
          { slug: 'renforcement-specifique-raquette', titre: 'Renforcement spécifique : épaule, avant-bras, gainage rotatoire', duree: 20, description: 'Programme de renforcement ciblé sur les groupes musculaires sollicités et les zones à risque.' },
          { slug: 'coordination-neuromousculaire', titre: 'Coordination et précision motrice : drills de hand-eye coordination', duree: 16, description: 'Exercices de coordination main-oeil, anticipation et automatisation des déplacements.' },
        ],
      },
      {
        titre: 'Prévention et planification',
        lecons: [
          { slug: 'prevention-epicondylite-epaule', titre: "Prévention épicondylite latérale et tendinopathies de l'épaule", duree: 18, description: "Programmes de prévention spécifiques, bilan de risque et critères d'alerte à surveiller." },
          { slug: 'planification-saison', titre: "Planification sur la saison : périodisation et charge d'entraînement", duree: 14, description: 'Construire un plan annuel avec périodes de charge, de récupération et de pointe de forme.' },
          { slug: 'recuperation-active', titre: 'Récupération active : stretching, bains froids, nutrition', duree: 10, description: 'Protocoles de récupération validés à intégrer systématiquement dans le programme.' },
        ],
      },
    ],
    get dureeTotal() { return this.chapitres.flatMap(c => c.lecons).reduce((s, l) => s + l.duree, 0) },
    get nbLecons() { return this.chapitres.reduce((s, c) => s + c.lecons.length, 0) },
  },
]

// ─── Témoignages ─────────────────────────────────────────────────────────────

export const temoignages: Temoignage[] = [
  {
    nom: 'Benoît Martel',
    metier: 'Kinésithérapeute libéral',
    ville: 'Nantes',
    avatarUrl: '', // TODO: URL à fournir
    citation: "« J'ai pu approfondir la rééducation neuro sans bouger de mon cabinet. La qualité des contenus est bluffante pour un format en ligne, j'ai directement transposé les techniques de la semaine suivante. »",
  },
  {
    nom: 'Isabelle Dumont',
    metier: 'Kinésithérapeute hospitalière',
    ville: 'Strasbourg',
    avatarUrl: '', // TODO: URL à fournir
    citation: "« Le module lombalgie chronique m'a donné une vraie boîte à outils pour les patients difficiles. L'approche bio-psycho-sociale est enfin présentée de façon concrète et applicable. »",
  },
  {
    nom: 'Kévin Saunier',
    metier: 'Enseignant APA, CHU de Lyon',
    ville: 'Lyon',
    avatarUrl: '', // TODO: URL à fournir
    citation: "« Exactement ce que je cherchais pour la prescription d'exercice en oncologie. Les recommandations sont à jour et les protocoles sont directement utilisables avec mes patients. »",
  },
  {
    nom: 'Amina Bouchère',
    metier: 'Étudiante en kinésithérapie, IFMK Paris',
    ville: 'Paris',
    avatarUrl: '', // TODO: URL à fournir
    citation: "« Une façon de se préparer aux stages que je n'avais pas trouvée ailleurs. Les cas cliniques et les vidéos de techniques m'ont permis d'arriver en stage avec un vrai niveau de confiance. »",
  },
  {
    nom: 'Pierre-Yves Corbin',
    metier: 'Directeur de centre de rééducation',
    ville: 'Bordeaux',
    avatarUrl: '', // TODO: URL à fournir
    citation: "« On a souscrit une licence équipe pour 8 kinés. Le retour est unanimement positif. La plateforme répond à un vrai besoin de formation continue de qualité, accessible à l'hôpital comme à domicile. »",
  },
  {
    nom: 'Romain Castets',
    metier: 'Coach sportif reconverti, ancien rugbyman',
    ville: 'Toulouse',
    avatarUrl: '', // TODO: URL à fournir
    citation: '« Je me suis formé sur la reprise après LCA pour mieux comprendre la rééducation de mes athlètes. Des contenus sérieux, accessibles même sans bagage médical poussé. »',
  },
]

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function getCoursParSlug(slug: string): Cours | undefined {
  return cours.find(c => c.slug === slug)
}

export function getFormateurParSlug(slug: string): Formateur | undefined {
  return formateurs.find(f => f.slug === slug)
}

export function getLeconParSlug(coursSlug: string, leconSlug: string): { lecon: Lecon; indexGlobal: number; total: number } | undefined {
  const c = getCoursParSlug(coursSlug)
  if (!c) return undefined
  const toutesLecons = c.chapitres.flatMap(ch => ch.lecons)
  const index = toutesLecons.findIndex(l => l.slug === leconSlug)
  if (index === -1) return undefined
  return { lecon: toutesLecons[index], indexGlobal: index, total: toutesLecons.length }
}

export function getLeconSuivante(coursSlug: string, leconSlug: string): Lecon | undefined {
  const result = getLeconParSlug(coursSlug, leconSlug)
  if (!result) return undefined
  const c = getCoursParSlug(coursSlug)!
  const toutesLecons = c.chapitres.flatMap(ch => ch.lecons)
  return toutesLecons[result.indexGlobal + 1]
}
