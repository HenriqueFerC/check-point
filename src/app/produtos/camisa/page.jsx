import Link from 'next/link'
import Image from 'next/image'

export default function Camisa(){
    return(
        <>
            <div class="paginas">
                <h1>Camisa</h1>
                <figure>
                    <Image src="/img/camisa.jpg" width={500} height={500}></Image>
                </figure>
                <p><Link href="/">Voltar</Link></p>
            </div>
        </>
    )
}  