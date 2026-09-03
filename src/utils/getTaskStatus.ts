import type { TaskModel } from '../models/TaskModel';

export function getTaskStatus(
  { completeDate, interruptDate }: TaskModel,
  activeTask: TaskModel | null,
): 'Concluída' | 'Interrompida' | 'Em andamento' | 'Abandonada' {
  if (completeDate) {
    return 'Concluída';
  } else if (interruptDate) {
    return 'Interrompida';
  } else if (activeTask && activeTask?.id === activeTask.id) {
    return 'Em andamento';
  }
  return 'Abandonada';
}
