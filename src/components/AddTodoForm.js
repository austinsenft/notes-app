import { Button, Input, Box } from 'dracula-ui'
import 'dracula-ui/styles/dracula-ui.css'

export default function AddTodoForm({
    todo,
    onAddFormSubmit,
    onAddInputChange
}) {
    return (
        <form style={{display: "flex", flexDirection: "row",  alignItems: "center"}} onSubmit={onAddFormSubmit}>
            <Input size="md" color="cyan"
                name="todo"
                type="text"
                placeholder="What's on your mind?"
                value={todo}
                onChange={onAddInputChange}
            />
            <Box display="flex">
            <Button m="sm" size="md" color="cyan" variant="ghost">+</Button>
            </Box>
        </form>
        
    );
}
