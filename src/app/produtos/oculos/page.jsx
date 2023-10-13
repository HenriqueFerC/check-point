import Link from 'next/link'
import Image from 'next/image'

export default function Oculos(){
    return(
        <>
            <div class="paginas">
                <h1>Óculos</h1>
                <figure>
                    <Image src="/img/óculos.jpeg" width={500} height={500}></Image>
                </figure>
                <p><Link href="/">Voltar</Link></p>
            </div>
        </>
    )
}  