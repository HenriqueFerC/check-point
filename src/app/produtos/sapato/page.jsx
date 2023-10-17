import Link from 'next/link'
import Image from 'next/image'

export default function Sapato(){
    return(
        <>
            <div class="card">
                <h1 class="nome">Sapato</h1>
                <figure>
                    <Image src="/img/sapato.webp" width={200} height={250}></Image>
                </figure>
                <p class="nome"><Link href="/">Voltar</Link></p>
            </div>
        </>
    )
}  