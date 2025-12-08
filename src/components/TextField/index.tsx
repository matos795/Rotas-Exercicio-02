import './styles.css'

type Props = {
    text : string;
}

export default function TextField({ text }:Props) {
    return(
        <div className="rt-container rt-text-field">
            <p>
                { text }
            </p>
        </div>
    );
}