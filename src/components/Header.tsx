import { useState } from "react";
import Button from "./Button";
import ComboBox from "./ComboBox";

function Header({ onExecute, onRandomize, disabled }: { onExecute: (algorithm: string) => void, onRandomize: () => void, disabled: boolean }) {
    const [algorithm, setAlgorithm] = useState("selection");

    const onClick = () => {
        onExecute(algorithm);
    }

    return (
        <div style={{backgroundColor: "yellow"}}>
            <ComboBox value={algorithm} onChange={(e) => { setAlgorithm(e.target.value) }} />
            <Button onClick={onClick} disabled={disabled}>
                Execute
            </Button>
            <Button onClick={onRandomize} disabled={disabled}>
                Randomize
            </Button>
        </div>
    )
}

export default Header;