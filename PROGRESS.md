# PROGRESS — Workout Warrior Academy

## Étapes de développement

- [x] Phase 0 — Symlinks skills (taste-skill + ui-ux-pro-max)
- [x] Étape 1 — Init projet Next.js 16 + deps (framer-motion, @phosphor-icons/react, shadcn/ui)
- [x] Étape 2 — Types & données mockées (`/types/index.ts`, `/data/mock.ts`)
- [x] Étape 3 — Config design global (`globals.css` Tailwind v4, `layout.tsx` Bebas Neue + Inter)
- [x] Étape 4 — Composants layout (Header, Footer, SideBanner, MediaPlaceholder)
- [x] Étape 5 — Landing page (/) — Hero, CoursCarousel, PasDePlanB, Temoignages
- [x] Étape 6 — Catalogue (/cours) — CoursCard, CoursFilters, filtrage client
- [x] Étape 7 — Détail cours (/cours/[slug]) — Hero 60/40, objectifs, ChapitresList, FormateurCard
- [x] Étape 8 — Lecteur vidéo (/cours/[slug]/lecon/[lessonSlug]) — VideoPlayer, LeconsSidebar
- [x] Utils — `formatDuration()`, `getInitials()` dans `lib/utils.ts`
- [x] Vérification finale — `pnpm build` sans erreur TypeScript ✓

## Notes techniques

- Next.js 16.2.4 (installé au lieu de 15 via create-next-app@latest)
- Tailwind CSS v4 — configuration en CSS via `@theme inline`, pas de `tailwind.config.ts`
- Shadcn/ui — thème dark forcé par défaut dans `:root` (pas de toggle)
- `--accent-color: #FF6B1A` — variable CSS facilement ajustable dans `globals.css`
- Taste Skill curseurs : DESIGN_VARIANCE=7, MOTION_INTENSITY=6, VISUAL_DENSITY=6
- Desktop-only 1440px, pas de responsive

## TODOs médias (à remplir par le prospect)

Tous les `imageUrl`, `avatarUrl`, `videoUrl`, `posterUrl` sont `""` dans `/data/mock.ts`.
Chaque champ a un commentaire `// TODO: URL à fournir`.
MediaPlaceholder s'affiche automatiquement quand la valeur est vide.
