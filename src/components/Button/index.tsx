import './styles.css'

type Props = {
    text: string;
}

export default function Button({text}:Props) {
    return(
        <div className='rt-container'>
            <div className='rt-button'>
                {text}
            </div>
        </div>
    );
}