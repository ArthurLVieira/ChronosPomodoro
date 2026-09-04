import MainTemplate from '../../templates/MainTemplate';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import { TrashIcon } from 'lucide-react';
import Styles from './styles.module.css';
import Container from '../../components/Container';
import { Table, type Column } from '../../components/Table';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import type { TaskModel } from '../../models/TaskModel';
import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
import { TaskAcontionType } from '../../contexts/TaskContext/taskActions';
import { useConfirmDialogStore } from '../../stores/confirmDialogStore';

export const History: React.FC = () => {
  const { state, dispatch } = useTaskContext();
  const showConfirm = useConfirmDialogStore(state => state.showConfirm);

  const taskTypeDictionary = {
    workTime: 'foco',
    shortBreakTime: 'descanço curto',
    longBreakTime: 'descanço longo',
  };

  const columns: Column<TaskModel>[] = [
    { key: 'id', header: 'ID' },
    { key: 'name', header: 'Nome' },
    {
      key: 'duration',
      header: 'Duração',
      render: row => `${row.duration} min`,
    },
    {
      key: 'startDate',
      header: 'Início',
      render: row => formatDate(row.startDate),
    },
    {
      key: 'completeDate',
      header: 'Concluído',
      render: row => formatDate(row.completeDate),
    },
    {
      key: 'interruptDate',
      header: 'Status',
      render: row => getTaskStatus(row, state.activeTask),
    },
    {
      key: 'type',
      header: 'Tipo',
      render: row => taskTypeDictionary[row.type],
    },
    {
      key: 'actions',
      header: 'Ações',
      render: row => (
        <span className={Styles.buttonContainer}>
          <Button
            icon={<TrashIcon />}
            color='red'
            aria-label='Apagar todo o histórico'
            title='Apagar histórico'
            onClick={() => {
              showConfirm(
                {
                  title: 'Excluir item',
                  message: 'Deseja realmente excluir?',
                  variant: 'danger',
                },
                () => console.log('Excluído'),
              );

              dispatch({
                type: TaskAcontionType.REMOVE_TASK,
                payload: row.id,
              });
            }}
          />
        </span>
      ),
    },
  ];

  const handleDeleteAllTasks = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    showConfirm(
      {
        title: 'Excluir item',
        message: 'Deseja realmente excluir?',
        variant: 'danger',
      },
      () => console.log('Excluído'),
    );

    dispatch({
      type: TaskAcontionType.REMOVE_ALL_TASKS,
    });
  };

  return (
    <MainTemplate>
      <Container>
        {(state.tasks.length === 0 && (
          <Heading>Nenhuma tarefa encontrada 😒</Heading>
        )) || (
          <>
            <Container>
              <Heading>History 🕰️</Heading>

              <span className={Styles.buttonContainer}>
                <Button
                  icon={<TrashIcon />}
                  color='red'
                  aria-label='Apagar todo o histórico'
                  title='Apagar histórico'
                  type='button'
                  onClick={handleDeleteAllTasks}
                />
              </span>
            </Container>

            <Table
              columns={columns}
              data={state.tasks}
              className={Styles.responsiveTable}
            />
          </>
        )}
      </Container>
    </MainTemplate>
  );
};
