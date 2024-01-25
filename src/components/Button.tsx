function Button({ children, style, onClick, disabled }: { children: JSX.Element | string, style?: React.CSSProperties, onClick: React.MouseEventHandler<HTMLButtonElement>, disabled: boolean }) {
    return (
        <button type="button" style={style} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}

export default Button;