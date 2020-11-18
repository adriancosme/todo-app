import { Task } from '@/interfaces/Todo';
import http from "../http-common";

export default new class TaskService {
  async getAll() {
    return await http.get("/task").then(
      response => response.data
    );
  }
  async updateTask(id: number, task: Task) {
    return await http.put(`/task/${id}`, task).then(
      response => response.data
    )
  }

  async addTask(task: Task) {
    return await http.post('/task', task).then(
      response => response.data
    )
  }
  async deleteTask(id: number) {
    return await http.delete(`/task/${id}`).then(
      response => response.data
    )
  }
}