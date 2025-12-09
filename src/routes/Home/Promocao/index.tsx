import Button from '../../../components/Button';
import TextField from '../../../components/TextField';

export default function Promocao() {
    return(
        <>
            <main>
                <div className='rt-container'>
                    <TextField text='Página de promoção' />
                    <div className='dflex'>
                        <Button text='Quero participar' />
                    </div>
                </div>
            </main>
        </>
    );
}