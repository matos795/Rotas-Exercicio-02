import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import TextField from "../../../components/TextField";

export default function HomeIndex() {
    return (
        <>
            <main>
                <TextField text="Página inicial" />
                <Link to='/promocao'>
                    <Button text="Ver promoção" />
                </Link>
            </main>
        </>
    );
}