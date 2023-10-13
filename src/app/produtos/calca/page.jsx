import Link from 'next/link'
import Image from 'next/image'

export default function Calca(){
    return(
        <>
            <div class="paginas">
                <h1>Calça</h1>
                <figure>
                    <Image src="/img/calça.jpg" width={500} height={500}></Image>
                </figure>
                <p><Link href="/">Voltar</Link></p>
            </div>
        </>
    )
}  