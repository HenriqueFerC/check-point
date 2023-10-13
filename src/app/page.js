import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1 class="home">
        HOME
      </h1>
      <div>
      <h2 class="nome">
        Lista de Produtos
      </h2>
        <ul class="lista">
          <li class="item"><Link href="/produtos/bone">Boné</Link></li>
          <li class="item"><Link href="/produtos/oculos">Óculos</Link></li>
          <li class="item"><Link href="/produtos/camisa">Camisa</Link></li>
          <li class="item"><Link href="/produtos/calca">Calça</Link></li>
          <li class="item"><Link href="/produtos/sapato">Sapato</Link></li>
        </ul>
      </div>
    </>
  )
}
