import './styles.css'

const Button = ({ children, title, onClick, disabled = false }) => {
    return (
        <button 
            title={title} 
            disabled={disabled}
            onClick={onClick}
            className="btn"
        >
            {children}
        </button>
    )
}

export default Button