import Link from 'next/link'
import Image from 'next/image'

export default function Camisa(){
    return(
        <>
            <div class="card">
                <h1 class="nome">Camisa</h1>
                <figure>
                    <Image src="/img/camisa.jpg" width={200} height={250}></Image>
                </figure>
                <p class="nome"><Link href="/">Voltar</Link></p>
            </div>
        </>
    )
}  