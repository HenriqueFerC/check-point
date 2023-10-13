import Link from 'next/link'
import Image from 'next/image'

export default function Bone(){
    return(
        <>
            <div class="paginas">
                <h1>Boné</h1>
                <figure>
                    <Image src="/img/boné.avif" width={500} height={500}></Image>
                </figure>
                <p><Link href="/">Voltar</Link></p>
            </div>
        </>
    )
}  