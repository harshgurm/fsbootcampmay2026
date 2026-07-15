type ButtonProps = {
    text: string
    message: string
    className: string
}

function handleClick(message: string) {
    alert(message)
}

export function Button({ text, message, className }: ButtonProps) {
    return (
        <button className={className} onClick={() => alert(message)}>
            {text}
        </button>
    )
}

// if submit it should submitted successfully,
// if cancel it should cancelled successfully.