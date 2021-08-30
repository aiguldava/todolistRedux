//View
export const Todo = ({ onClick, completed, text }) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none',
            'listStyleType':'none'
        }}
    >
        {text}
    </li>
  )