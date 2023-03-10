import { Box, Button, Input } from 'dracula-ui'
import 'dracula-ui/styles/dracula-ui.css'

export default function EditForm({
    currentTodo,
    setIsEditing,
    onEditInputChange,
    onEditFormSubmit
}) {
    return (
        <form style={{display: "flex", flexDirection: "row",  alignItems: "center"}} onSubmit={onEditFormSubmit}>
            <Input mt="sm" mb="sm" size="md" color="cyan"
                name="updateTodo"
                type="text"
                placeholder="Update todo"
                value={currentTodo.text}
                onChange={onEditInputChange}
            />
            <Box display="flex" >
            <Button mx="sm" size="md" color="cyan" variant="ghost" type="submit" onClick={onEditFormSubmit}>
                Update
            </Button>
            <Button size="md" color="cyan" variant="ghost" onClick={() => setIsEditing(false)}>Cancel</Button>
            </Box>

        </form>
    );
}
