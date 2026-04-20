export type Formateur = {
  slug: string
  nom: string
  titre: string
  bio: string
  avatarUrl: string // TODO: URL à fournir
  nbCours: number
}

export type Lecon = {
  slug: string
  titre: string
  duree: number // en minutes
  description: string
  videoUrl?: string // TODO: URL à fournir
  posterUrl?: string // TODO: URL à fournir
}

export type Chapitre = {
  titre: string
  lecons: Lecon[]
}

export type Cours = {
  slug: string
  titre: string
  description: string
  descriptionCourte: string
  thematique: Thematique
  niveau: Niveau
  dureeTotal: number // calculé en minutes
  nbLecons: number // calculé depuis chapitres
  dateMaj: string
  formateurSlug: string
  imageUrl: string
  videoUrl?: string
  objectifs: string[]
  chapitres: Chapitre[]
}

export type Temoignage = {
  nom: string
  metier: string
  ville: string
  avatarUrl: string // TODO: URL à fournir
  citation: string
}

export type Thematique =
  | 'Rééducation ortho'
  | 'Neuro'
  | 'APA'
  | 'Sport-santé'
  | 'Gériatrie'
  | 'Pédiatrie'

export type Niveau = 'Débutant' | 'Intermédiaire' | 'Expert'
