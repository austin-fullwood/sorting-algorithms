function ComboBox({ value, onChange}: { value: string, onChange: React.ChangeEventHandler<HTMLSelectElement>}) {
    return (
        <form>
            <label htmlFor="algorithms">Choose an algorithm: </label>
            <select name="algorithms" id="algorithms" onChange={onChange}>
                <option value="selection">Selection</option>
                <option value="quick">Quick</option>
                <option value="insertion">Insertion</option>
            </select>
        </form>
    )
}

export default ComboBox;