import Button from "../../components/Button";
import TextField from "../../components/TextField";
import './styles.css'

export default function Inscricao() {
    return(
        <>
            <main>
                <div className='rt-container'>
                    <h1>Faça sua inscrição!</h1>                 
                    <TextField text='Página de inscrição' />
                    <div className='dflex'>
                        <Button text='Ver promoção' />
                    </div>
                </div>
            </main>
        </>
    );
}