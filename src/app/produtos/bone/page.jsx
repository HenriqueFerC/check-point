import Link from 'next/link'
import Image from 'next/image'


export default function Bone(){
    return(
        <>
                <div class="card">
                    <h1 class="nome">Boné</h1>
                    <figure>
                        <Image src="/img/boné.avif" width={200} height={250 }></Image>
                    </figure>
                    <p class="nome"><Link href="/">Voltar</Link></p>
                </div>
            

        </>
    )
}  