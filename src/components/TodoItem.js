import { Button, Box, Text} from 'dracula-ui'
import 'dracula-ui/styles/dracula-ui.css'


export default function TodoItem({
    todo,
    onEditClick,
    onDeleteClick
}) {
    return (
        <li key={todo.id}>
            <Box color="black" p="sm" mb="sm" rounded="lg">
                <Box display="flex" mb="sm" style={{ textAlign: "left", alignItems: "left"}}>
                    <Text color={"purpleCyan"} style={{ wordBreak: "break-all" }}>
                        {todo.text}
                    </Text>
                </Box>
                <Box display="flex" as="articles">
                
                    <Button size="sm" color="cyan" variant="ghost" onClick={() => onEditClick(todo)}>Edit</Button>
                    <Button mx="sm" size="sm" color="cyan" variant="ghost" onClick={() => onDeleteClick(todo.id)}>Delete</Button>
                </Box>
            </Box>

        </li>


    );
}
