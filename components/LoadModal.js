import Image from 'next/image';

export default function LoadModal() {

    return (
        <>
        <section className="modal-wrapper">
            <div className="modal">
                <div className='overlay'></div>
                <div className="modal-cntr">                    
                    <div className="modal-cntr__img-cntr">
                        {/* {data.img.map((img) => ( */}
                            {/* <Image src="/data/img" alt="modal" height={1000} width={1000} /> */}
                        {/* ))} */}
                    </div>
                </div>            
                
            </div>
        </section>
        </>
    )
}