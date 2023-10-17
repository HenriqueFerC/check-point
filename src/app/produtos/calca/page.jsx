import Link from 'next/link'
import Image from 'next/image'

export default function Calca(){
    return(
        <>
            <div class="card">
                <h1 class="nome">Calça</h1>
                <figure>
                    <Image src="/img/calça.jpg" width={200} height={250} alt="calça"></Image>
                </figure>
                <p class="nome"><Link href="/">Voltar</Link></p>
            </div>
        </>
    )
}  