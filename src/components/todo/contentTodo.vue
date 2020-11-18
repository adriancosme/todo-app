<template>
  <v-container fluid>
    <v-row>
      <v-col class="headerTodo">
        <h1>Mi día</h1>
        <h2>{{ this.getDate() }}</h2>
      </v-col>
    </v-row>
    <v-card class="d-flex pa-2" color="#455A64">
      <v-container fluid>
        <v-row
          align="center"
          justify="space-between"
          no-gutters
          v-for="(task, index) in tasks"
          :key="index"
          style="height: 70px"
        >
          <v-col
            ><v-card color="#455A64" class="tasks-text" outlined tile>
              <v-btn color="white" icon v-if="task.isCompleted">
                <v-icon>mdi-checkbox-marked-circle-outline</v-icon>
              </v-btn>
              <v-btn color="white" icon v-else v-on:click="completeTask(task)">
                <v-icon> mdi-checkbox-blank-circle-outline </v-icon>
              </v-btn></v-card
            ></v-col
          >
          <v-col>
            <v-card color="#455A64" class="pa-4 tasks-text" outlined tile>
              <p>{{ task.name }}</p>
            </v-card>
          </v-col>
          <v-col
            ><v-card color="#455A64" class="pa-2 tasks-text" outlined tile>
              <Form :task="task" @edited="editTask" />
              <v-btn v-on:click="deleteTask(task.id)"
                ><v-icon>mdi-trash-can-outline</v-icon></v-btn
              >
            </v-card></v-col
          >
        </v-row>
      </v-container>
      <h2 v-show="noData">No hay tareas pendientes</h2>
    </v-card>
    <v-row>
      <v-col cols="12">
        <v-form class="form" @submit.prevent="addTask">
          <v-row>
            <v-col>
              <v-text-field
                autocomplete="off"
                class="text-field"
                color="#212121"
                label="Agrega una tarea"
                prepend-icon="mdi-plus"
                hide-details="auto"
                v-model="nameTask"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TaskService from "@/services/taskService";
import { Task } from "@/interfaces/Todo";
import Form from "./form.vue";

@Component({
  name: "ContentTodo",
  components: { Form },
})
export default class ContentTodo extends Vue {
  public nameTask = "";
  public tasks: Task[] = [];
  private dias: string[] = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  private meses: string[] = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  noData = true;
  isEdit = false;
  data: any;
  public async getTasks() {
    this.tasks = await TaskService.getAll();
    if (this.tasks.length > 0) {
      this.noData = false;
    }
  }

  public async addTask() {
    const formTask: Task = {
      name: this.nameTask,
    };

    const data = await TaskService.addTask(formTask);
    this.tasks.push(data);
    this.nameTask = "";
  }

  public async editTask(e) {
    //todo
    const data = await e;
    const index = this.tasks.findIndex((e) => {
      return e.id == data.id;
    });
    this.$nextTick(() => {
      this.tasks[index].name = data.name;
    });
  }

  public async completeTask(task: Task) {
    const taskData: Task = {
      isCompleted: true,
    };
    const data = await TaskService.updateTask(Number(task.id), taskData);
    const index = this.tasks.findIndex((e) => {
      return e.id == data.id;
    });
    this.$nextTick(() => {
      this.tasks[index].isCompleted = true;
    });
  }

  public async deleteTask(id: number) {
    //todo
    const data = await TaskService.deleteTask(id);
    const index = this.tasks.findIndex((e) => {
      return e.id == data.id;
    });
    this.tasks.splice(index);
  }
  public getDate(): string {
    const date: Date = new Date();
    const today = `${this.dias[date.getDay()]}, ${date.getDate()} ${
      this.meses[date.getMonth()]
    }`;
    return today;
  }

  mounted() {
    this.getTasks();
  }
}
</script>
<style lang="scss" scoped>
.headerTodo {
  color: #788CDE;
}
.form {
  background-color: #455A64;
}
.tasks-text {
  color: white;
}
.menu-item {
  color: white;
}
</style>
