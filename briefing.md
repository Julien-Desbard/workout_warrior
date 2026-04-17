# Briefing — Prototype Workout Warrior Academy
Contexte
Prototype non-fonctionnel d'une plateforme e-learning francophone dédiée aux professionnels de la kinésithérapie et de l'activité physique adaptée. Destiné à être présenté à un prospect pour lui donner une vision concrète du rendu final. Pas de logique métier réelle (pas d'auth, pas de paiement, pas de backend, pas de base de données) : uniquement de la navigation entre 4 pages avec des données mockées en dur.
Stack
Next.js 15 avec App Router, TypeScript, Tailwind CSS, shadcn/ui pour les primitives de composants, framer-motion pour les animations (utilisé dans le composant source). Pas de base de données, pas de Prisma, pas d'auth. Données mockées dans /data/mock.ts. Déploiement cible : Vercel.
Pas de responsive. Desktop-only. Largeur de travail 1440px minimum. Pas de breakpoints mobiles à gérer, pas de menu burger, pas d'adaptations tablette.
Langue : intégralement en français. Tous les textes UI, labels, placeholders, CTAs, descriptions de cours, etc.

Architecture des pages
Quatre routes à créer, toutes navigables entre elles via des liens réels (pas de placeholders) :
/ — Landing page publique
/cours — Catalogue de cours
/cours/[slug] — Page détail d'un cours
/cours/[slug]/lecon/[lessonSlug] — Lecteur vidéo avec sidebar leçons
La navigation principale (header) pointe vers ces pages. Un clic sur une carte de cours depuis la landing ou le catalogue ouvre sa page détail. Un clic sur une leçon (ou sur "Commencer le cours") depuis la page détail ouvre le lecteur.

Direction visuelle — charte Workout Warrior adaptée à la structure PulseFit
La structure (layout, composants, animations, interactions) vient du template PulseFit fourni en référence. La charte graphique vient du site Workout Warrior actuel. L'inversion visuelle est le point central : PulseFit est clair sur fond bleu pâle, Workout Warrior est sombre, dense, urbain, mat.
Palette :
Fond dominant : noir profond #0A0A0A (pas de pur #000 qui fait trop plat)
Texte principal : blanc #FFFFFF ou blanc légèrement cassé #F5F5F5
Texte secondaire : gris #A0A0A0
Bordures et dividers : gris très sombre #1F1F1F à #2A2A2A
Couleur d'accent : à laisser en variable CSS --accent initialisée à un orange sport #FF6B1A (valeur par défaut, facilement ajustable par le prospect)
Les boutons CTA primaires : fond blanc, texte noir, coins très arrondis (rounded-full) — inversion du template PulseFit où c'est fond noir sur fond clair
Les boutons secondaires : bordure blanche 1px, fond transparent, texte blanc
Typographies :
Titres principaux : Bebas Neue (Google Fonts) — sans-serif condensée, majuscules, très bold. C'est ce qui donne l'identité "#PASDEPLANB" au site actuel
Corps de texte : Inter (Google Fonts) — sans-serif neutre et lisible
Le logo "Workout Warrior Academy" dans le header peut rester en Bebas Neue pour cohérence (on ne tente pas de reproduire la typo manuscrite du logo original, ce serait trop fragile en prototype)
Éléments graphiques récurrents du site actuel à reproduire :
Les images affichées principalement en noir et blanc ou fortement désaturées, avec léger overlay sombre pour améliorer la lisibilité des textes en overlay
Sur les cartes de cours, même pattern que PulseFit : image en fond, dégradé sombre vers le bas, catégorie en uppercase avec letter-spacing au-dessus du titre
Bannière verticale fixe à droite de l'écran avec texte "INSCRIPTION" en rotation 90° (décorative, non cliquable pour le prototype) — reprendre le pattern du site actuel
Hover sur les cartes : léger scale (1.03) + passage de l'image de désaturée à couleur + light shadow

Écran 1 — Landing page (/)
Structure calquée sur le composant PulseFitHero fourni, avec les adaptations suivantes :
Header — fond transparent sur fond noir, logo "WORKOUT WARRIOR ACADEMY" à gauche en Bebas Neue, navigation au centre avec les items : Accueil, Cours, Formateurs, Témoignages, Contact. CTA à droite "Essai gratuit" (bouton arrondi blanc sur noir).
Hero central — titre accrocheur en Bebas Neue très gros (clamp 56px à 96px) sur 2 ou 3 lignes. Proposition de titre : "FORMEZ-VOUS AU SPORT-SANTÉ. N'IMPORTE OÙ. N'IMPORTE QUAND." Sous-titre Inter en gris clair, environ 500px de large. Deux CTAs : primaire "Commencer maintenant" (blanc sur noir avec flèche), secondaire "Parcourir les cours" (bordure blanche, transparent). Disclaimer en petit italique gris : "Sans engagement". Social proof : 4 avatars circulaires superposés + "Rejoint par plus de 2 000 kinés et professionnels de l'APA".
Carousel de cours — reprise exacte du pattern PulseFit : scroll horizontal infini, cartes 356×480px, avec défilement automatique framer-motion. 9 cartes affichées (dupliquées pour la boucle). Utiliser les 9 cours mockés.
Bloc "Pourquoi Workout Warrior Academy" (nouveau, inspiré de #PASDEPLANB) — Section en dessous du carousel. Titre centré en Bebas Neue : "#PASDEPLANB". Puis une grille 3 colonnes × 2 lignes de blocs texte (6 blocs). Chaque bloc : titre court en Bebas Neue majuscules, description Inter 3-4 lignes. Thèmes à reprendre du site actuel : "Une approche exclusive accessible à tous", "La constance avant la performance", "L'énergie d'une communauté unie", "De la rééducation à la réathlétisation", "Des experts santé à votre service", "Bougez mieux, vivez mieux". Fond noir, textes blancs, pas de cartes ni bordures — juste de la typo aérée.
Section témoignages (ajoutée par rapport au template) — Titre "ILS NOUS FONT CONFIANCE" en Bebas Neue centré. En dessous, grille 3 colonnes de témoignages. Chaque témoignage : avatar circulaire (80px), citation en guillemets français (« »), nom + métier + ville. Fond légèrement plus clair que le fond global (#111111) pour créer une zone distincte, ou fond noir avec bordures subtiles #2A2A2A autour de chaque carte. 3 à 6 témoignages mockés (voir section données). Ajouter une mention discrète en footer du bloc : "Témoignages fictifs - maquette de présentation".
Footer — Simple, sur fond noir. 4 colonnes : logo + baseline courte, "Plateforme" (liens Cours, Formateurs, Tarifs), "Entreprise" (À propos, Contact, Blog), "Légal" (CGU, CGV, Mentions légales, Confidentialité). En bas, copyright centré. Tous les liens peuvent être des <a href="#"> pour le prototype.

Écran 2 — Catalogue (/cours)
Header identique à la landing.
Titre de page — "CATALOGUE DES COURS" en Bebas Neue grande taille, aligné à gauche, avec un sous-titre Inter "9 cours disponibles pour kinés et professionnels de l'APA".
Barre de filtres — En dessous du titre, une ligne avec :
Un champ recherche (icône loupe, placeholder "Rechercher un cours…")
Des chips cliquables pour filtrer par thématique : Tout, Rééducation ortho, Neuro, APA, Sport-santé, Gériatrie, Pédiatrie
Des chips pour filtrer par niveau : Tous niveaux, Débutant, Intermédiaire, Expert
Le filtrage est fonctionnel et s'effectue côté client sur les données mockées
Grille de cours — 3 colonnes, cartes au même format que le carousel de la landing (356×480, image désaturée, overlay sombre, catégorie + titre en bas). Ajouter sur chaque carte en bas un petit badge durée ("4h 30") et niveau ("INTERMÉDIAIRE"). Cards cliquables qui redirigent vers /cours/[slug].

Écran 3 — Page détail cours (/cours/[slug])
Header identique.
Hero du cours — Layout 2 colonnes. À gauche (60%) : catégorie en uppercase letter-spacing, titre du cours en Bebas Neue très gros, courte description Inter, métadonnées en ligne (durée totale, nombre de leçons, niveau, date de mise à jour), ligne d'auteur ("Par [Nom formateur]" avec petit avatar), CTA principal "Commencer le cours" (blanc sur noir, arrondi) qui mène à la première leçon. À droite (40%) : grande vignette du cours 4:3 avec bouton play overlay centré (play décoratif, le vrai clic sur le CTA lance).
Section "Ce que vous allez apprendre" — Titre Bebas Neue, puis grille 2 colonnes × 3 lignes d'objectifs pédagogiques (6 bullets). Chaque ligne : petite icône check blanche + texte Inter.
Section "Programme du cours" — Liste dépliable des chapitres. Chaque chapitre : header cliquable avec titre en Bebas Neue medium + nombre de leçons + durée totale à droite, et chevron. Déplié, affiche la liste des leçons avec titre + durée + petite icône play. Chaque leçon est cliquable et mène à /cours/[slug]/lecon/[lessonSlug].
Section formateur — Carte avec avatar formateur (120px), nom en Bebas Neue, titre professionnel, bio courte 3-4 lignes, nombre de cours publiés.

Écran 4 — Lecteur vidéo (/cours/[slug]/lecon/[lessonSlug])
Layout plein écran, 2 colonnes.
Colonne principale (70%) — En haut, breadcrumb discret : "Cours › [Titre du cours] › [Titre de la leçon]". Puis grand lecteur vidéo 16:9 avec coins arrondis légers (rounded-xl), contrôles standards. Pas de Mux, juste une balise <video> HTML5 stylée, avec une TODO commentée dans le code à côté du src, formulée ainsi : {/* TODO: remplacer par l'URL de la vidéo de démo. Format recommandé : mp4 1080p */}. Prévoir un poster image à côté (même TODO). En dessous du player : titre de la leçon en Bebas Neue, métadonnées en ligne (durée, numéro de leçon sur total), puis courte description Inter 3-4 lignes.
Sidebar droite (30%) — Fond très légèrement plus clair que le main (#0F0F0F), bordure gauche #1F1F1F. En haut : titre du cours en Bebas Neue medium. En dessous, barre de progression (remplie à 23% sur le mock). Puis liste des chapitres et leçons. Chaque leçon : numéro, titre, durée. État visuel selon trois cas : leçon terminée (check blanc, texte légèrement grisé), leçon en cours (bordure d'accent à gauche, fond légèrement plus clair), leçon verrouillée ou à venir (texte standard, petit icône play). Toutes cliquables, mène à /cours/[slug]/lecon/[lessonSlug] correspondant.
En bas du main (sous la description) : bouton "Leçon suivante →" aligné à droite (blanc sur noir arrondi) qui navigue vers la leçon suivante.

Données mockées (/data/mock.ts)
Exporter les types TypeScript et les datasets suivants :
Types à créer :
type Formateur = { slug, nom, titre, bio, avatarUrl, nbCours }
type Lecon = { slug, titre, duree, description, videoUrl?, posterUrl? }
type Chapitre = { titre, lecons: Lecon[] }
type Cours = { slug, titre, description, descriptionCourte, thematique, niveau, dureeTotal, nbLecons, dateMaj, formateurSlug, imageUrl, objectifs: string[], chapitres: Chapitre[] }
type Temoignage = { nom, metier, ville, avatarUrl, citation }

9 cours à créer, répartis par thématique. Voici la liste avec titre + thématique + niveau (Claude Code peut générer le reste) :
Rééducation de la coiffe des rotateurs post-chirurgie — Rééducation ortho — Expert
APA pour patients post-AVC : progression sur 12 semaines — Neuro — Intermédiaire
Reprogrammation neuromusculaire du genou — Rééducation ortho — Intermédiaire
Prévention des chutes chez la personne âgée — Gériatrie — Débutant
Reprise du sport après LCA : protocole complet — Sport-santé — Expert
Kinésithérapie respiratoire du nourrisson — Pédiatrie — Intermédiaire
Lombalgie chronique : approche active — Rééducation ortho — Intermédiaire
APA et maladies chroniques : diabète et obésité — APA — Débutant
Préparation physique pour sports de raquette — Sport-santé — Intermédiaire
Chaque cours : 3 à 5 chapitres, chaque chapitre : 3 à 6 leçons, chaque leçon avec titre métier crédible et durée entre 8 et 25 min. La durée totale et le nombre de leçons se calculent à partir de ces données.
4 ou 5 formateurs fictifs (kinés DE, masseurs-kinés du sport, APA-isés), avec bio crédible.
6 témoignages fictifs : kiné libéral, kiné hospitalier, enseignant APA, étudiant en kiné, directeur de centre de rééducation, coach sportif reconverti. Citations courtes (2-3 phrases) et orientées bénéfice concret ("J'ai pu approfondir la rééducation neuro sans bouger de mon cabinet…").

Gestion des médias
Aucune image ou vidéo à inclure dans le prototype. Partout où une image ou vidéo est attendue (vignettes de cours, avatars formateurs, avatars social proof, avatars témoignages, poster vidéo, vidéo de leçon), deux choses à faire :
Dans le fichier de données mock, chaque champ imageUrl, avatarUrl, videoUrl, posterUrl doit être initialisé à une chaîne vide "" avec un commentaire // TODO: URL à fournir juste à côté
Dans les composants qui consomment ces champs, prévoir un placeholder visuel propre quand la valeur est vide : bloc de couleur unie #1F1F1F avec une petite icône centrée (image ou vidéo selon le cas) et un texte discret gris "Média à intégrer". Comme ça le prototype reste présentable même sans médias, et l'utilisateur pourra remplir les URLs une par une.
Pour les avatars, même principe : si vide, afficher un cercle gris avec les initiales du nom en blanc dedans.

Ce qu'on ne fait pas (à rappeler explicitement à Claude Code)
Pas d'authentification, pas de page login, pas de page signup. Pas de système de paiement ni page pricing détaillée. Pas de dashboard apprenant. Pas de back-office admin. Pas d'emails. Pas de base de données ni ORM. Pas de Mux, pas de Stripe, pas de Clerk, pas de Resend. Pas de fetching côté serveur (toutes les données viennent d'un import statique). Pas de responsive mobile/tablette. Pas de dark mode toggle (le site est déjà full dark). Pas de tests unitaires.

Structure de dossiers attendue
/app
  /page.tsx (landing)
  /cours/page.tsx (catalogue)
  /cours/[slug]/page.tsx (détail)
  /cours/[slug]/lecon/[lessonSlug]/page.tsx (lecteur)
  /layout.tsx (header/footer global, police chargée)
/components
  /layout/Header.tsx
  /layout/Footer.tsx
  /layout/SideBanner.tsx
  /landing/Hero.tsx
  /landing/CoursCarousel.tsx
  /landing/PasDePlanB.tsx
  /landing/Temoignages.tsx
  /cours/CoursCard.tsx
  /cours/CoursFilters.tsx
  /cours/ChapitresList.tsx
  /cours/FormateurCard.tsx
  /lecteur/VideoPlayer.tsx
  /lecteur/LeconsSidebar.tsx
  /ui/ (shadcn primitives)
  /ui/MediaPlaceholder.tsx (pour les TODOs images/vidéos)
/data
  /mock.ts
/lib
  /utils.ts (cn helper, formatters durée)
/types
  /index.ts


Livrable final attendu
Un projet Next.js 15 fonctionnel en local via npm run dev, qui se déploie tel quel sur Vercel sans configuration supplémentaire. Les 4 pages doivent être navigables, les filtres du catalogue doivent fonctionner, le carousel doit défiler tout seul, les animations framer-motion doivent être présentes aux bons endroits (header fade-in, hero fade-up, carousel animation infinie, hover cards). Toutes les TODOs d'URL de médias clairement identifiables par un commentaire // TODO dans le code.


