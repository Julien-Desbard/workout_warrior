const blocs = [
  {
    titre: "UNE APPROCHE EXCLUSIVE ACCESSIBLE À TOUS",
    description:
      "Des formations conçues par des cliniciens pour des cliniciens. Chaque contenu est ancré dans la pratique réelle, validé par les données probantes, et directement transposable en consultation.",
  },
  {
    titre: "LA CONSTANCE AVANT LA PERFORMANCE",
    description:
      "La progression durable ne se fait pas en un week-end. Notre modèle favorise l'apprentissage régulier, l'ancrage des connaissances et l'évolution pas à pas de votre expertise.",
  },
  {
    titre: "L'ÉNERGIE D'UNE COMMUNAUTÉ UNIE",
    description:
      "Plus de 2 000 kinés et professionnels APA partagent expériences, questions et réussites. Apprendre seul, c'est bien. Apprendre ensemble, c'est aller plus loin.",
  },
  {
    titre: "DE LA RÉÉDUCATION À LA RÉATHLÉTISATION",
    description:
      "Du premier jour post-opératoire au retour sur le terrain : notre catalogue couvre l'intégralité du continuum thérapeutique. Une seule plateforme pour toute votre pratique.",
  },
  {
    titre: "DES EXPERTS SANTÉ À VOTRE SERVICE",
    description:
      "Nos formateurs sont des praticiens actifs, reconnus dans leur domaine. Pas de théorie creuse : des protocoles testés, des cas cliniques réels, des méthodes qui fonctionnent.",
  },
  {
    titre: "BOUGEZ MIEUX, VIVEZ MIEUX",
    description:
      "Parce que prendre soin des autres commence par se former sérieusement. Investir dans vos compétences, c'est investir dans la qualité de soin que vous offrez à chaque patient.",
  },
]

export function PasDePlanB() {
  return (
    <section className="px-8 pb-24 max-w-[1440px] mx-auto">
      <h2
        className="font-display text-white text-center leading-none tracking-tight mb-16"
        style={{ fontSize: "clamp(48px, 6vw, 88px)" }}
      >
        <span style={{ color: '#FF6B1A' }}>#</span>PASDEPLANB
      </h2>

      <div className="grid grid-cols-3 gap-x-16 gap-y-14">
        {blocs.map((bloc) => (
          <div key={bloc.titre}>
            <h3 className="font-display text-white text-xl tracking-wide mb-3 leading-snug">
              {bloc.titre}
            </h3>
            <p className="text-[#A0A0A0] text-sm leading-relaxed">
              {bloc.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
