import logoFr from '../../assets/logo fr.png'

interface Props {
  small?: boolean
}

// Kramna wordmark (French, plum + gold fig leaf) — used across the site.
export default function Wordmark({ small }: Props) {
  return (
    <a
      href="#hero"
      className="inline-flex items-center select-none"
      aria-label="Kramna, retour à l’accueil"
    >
      <img
        src={logoFr}
        alt="Kramna"
        className="block w-auto object-contain"
        style={{ height: small ? 34 : 46 }}
      />
    </a>
  )
}
