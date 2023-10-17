import Link from 'next/link'
import Image from 'next/image'

export default function Oculos(){
    return(
        <>
            <div class="card">
                <h1 class="nome">Óculos</h1>
                <figure>
                    <Image src="/img/óculos.jpeg" width={200} height={250}></Image>
                </figure>
                <p class="nome"><Link href="/">Voltar</Link></p>
            </div>
        </>
    )
}  