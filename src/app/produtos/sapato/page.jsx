import Link from 'next/link'
import Image from 'next/image'

export default function Sapato(){
    return(
        <>
            <div class="paginas">
                <h1>Sapato</h1>
                <figure>
                    <Image src="/img/sapato.webp" width={500} height={500}></Image>
                </figure>
                <p><Link href="/">Voltar</Link></p>
            </div>
        </>
    )
}  