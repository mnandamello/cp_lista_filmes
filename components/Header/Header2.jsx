import Link from 'next/link'
import './Header2.css'
import 'src/app/globals.css'

export default function Header2() {
  return (
    <div className="header">
      <nav>
        <ul className="ul-header">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/ListagemFilmes">Listagem Filmes</Link>
          </li>
          <li>
            <Link href="/Recomendacoes">Recomendações</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}