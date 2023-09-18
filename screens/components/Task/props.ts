import { TaskType } from "../../TodoListScreen"

export type TaskComponent = {
    task: TaskType,
    index: number,
    onCompleted: (index: number) => void
}