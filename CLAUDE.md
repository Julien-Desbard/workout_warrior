# Instructions génériques — Claude Code

> Règles transversales à tous les projets de ce workspace.
> À compléter par un CLAUDE.md spécifique dans chaque projet.

---

## Gestionnaire de paquets

**Toujours utiliser `pnpm`**, jamais `npm` ni `npx` :

```bash
pnpm install          # installer les dépendances
pnpm add <pkg>        # ajouter une dépendance
pnpm add -D <pkg>     # ajouter une dépendance de développement
pnpm run <script>     # lancer un script
pnpm run dev          # démarrer en développement
pnpm run build        # builder
```

---

## Comportement attendu

### Penser avant de coder

Avant de générer ou modifier du code, énoncer explicitement :

- Les fichiers qui vont être créés ou modifiés
- Les hypothèses sur les données ou comportements ambigus
- Les alternatives envisagées si la demande a plusieurs interprétations

Si un point est ambigu, demander confirmation **avant** de commencer.

### Modifications chirurgicales

- Ne toucher que les fichiers directement concernés par la demande
- Ne pas refactoriser, renommer ni réorganiser ce qui n'a pas été demandé
- Ne pas ajouter de features non demandées
- Ne pas modifier le style de code existant (indentation, quotes, etc.)
- Si une modification a des effets de bord sur d'autres fichiers, les signaler avant d'agir

### Simplicité d'abord

- La solution minimale qui résout le problème est préférable
- Pas d'abstraction prématurée pour un usage unique
- Pas de gestion d'erreur pour des cas qui ne peuvent pas se produire
- Pas de commentaires sur du code auto-explicite

### Strings et apostrophes françaises

- **Toujours utiliser des double quotes `"..."` pour les strings JS/TS contenant du texte français.** Les guillemets simples `'...'` entrent en conflit avec les apostrophes typographiques françaises (`l'`, `d'`, `j'`, etc.) qui peuvent être produites en U+2019 au lieu de U+0027, causant une erreur de parsing `Expected ',', got 'ident'`.
- **Dans le texte JSX (entre balises), toujours échapper les apostrophes avec `&apos;`.** Écrire `l&apos;exemple` et non `l'exemple` dans le JSX pour éviter les warnings de parsing et les comportements inattendus.

### Suivi du dev

- en mode plan, penser à bien morceler le développement en petite étapes, afin de pouvoir les commit au fur et à mesure
- penser à enregistrer dans un fichier PROGRESS.md les étapes définies dans le mode plan
- quand une étape est finalisée, la cocher pour indiquer son état dans le fichier PROGRESS.md

---

## RTK — Optimisation tokens (RÈGLE ABSOLUE)

RTK (Rust Token Killer) est installé globalement. **Toutes les lectures de fichiers et recherches DOIVENT passer par RTK via le Bash tool.** Ne jamais utiliser les outils natifs `Read`, `Grep`, `Glob`.

### Substitutions obligatoires — sans exception

| ❌ INTERDIT | ✅ OBLIGATOIRE |
| --- | --- |
| Outil natif `Read` | `cat fichier` ou `rtk read fichier` |
| Outil natif `Grep` | `rg "pattern" .` |
| Outil natif `Glob` | `find . -name "*.ts"` |

### Modes de lecture selon le besoin

```bash
rtk smart fichier              # résumé heuristique 2 lignes — toujours commencer par là
rtk read fichier -l aggressive # signatures uniquement, sans corps de fonctions
rtk read fichier -l moderate   # compression modérée
rtk read fichier               # lecture compressée standard
```

**Règle :** commencer par `rtk smart` ou `-l aggressive`. Ne lire en détail que ce qui est nécessaire.

### Commandes auto-interceptées par le hook

RTK réécrit automatiquement :
`git`, `ls`, `cat`, `head`, `tail`, `rg`, `grep`, `find`, `pnpm list/outdated`, `vitest`, `playwright`, `tsc`, `eslint`, `prettier`, `prisma generate`, `docker ps/images/logs`

### Diagnostic

```bash
rtk gain      # stats d'économie de tokens
rtk discover  # opportunités d'économie manquées
```

---

## Déploiement Vercel

Ne déployer sur Vercel (`vercel --prod`) que sur **demande explicite**.

---

## Git

- Créer un `.gitignore` adapté au projet avant le premier commit
- Ne jamais commiter `node_modules`, `.next/`, `.env*`, `.vercel`, `*.tsbuildinfo`
- Préférer des commits atomiques avec un message explicite
- Ne pas amender un commit existant — créer un nouveau commit

## mémoire de dev

- lorsque tu développes, vérifie l'existence d'un fichier PROGRESS.md pour voir ou tu en étais dans le projet concerné, ce qui a été fait et ce qu'il reste à faire.
