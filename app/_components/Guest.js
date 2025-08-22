import Image from "next/image";

export default function Guest({ image, text }) {
    return (
        <div className={ 'flex gap-3 items-center' }>
            { image &&
                <Image
                    src={ image }
                    alt={ text }
                    height={ 42 }
                    width={ 42 }
                    referrerPolicy={ 'no-referrer' }
                    className={ 'rounded-full object-cover' }
                />
            }
            <span>{ text }</span>
        </div>
    );
}
