<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" v-on:click="nameTask = String(task.name)"
        ><v-icon>mdi-pencil-outline</v-icon></v-btn
      >
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Editar tarea</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="nameTask"
                label="Legal first name*"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn
          color="blue darken-1"
          text
          @click="
            () => {
              dialog = false;
              editTask(task.id);
            }
          "
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import { Task } from "@/interfaces/Todo";
import taskService from "@/services/taskService";
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
@Component({
  name: "Form",
})
export default class Form extends Vue {
  dialog = false;
  @Prop() task: Task | undefined;
  public nameTask = "";
  
  public editTask(id: number) {
    const editForm: Task = {
      name: this.nameTask,
    };
    const data = taskService.updateTask(id, editForm);
    this.$emit('edited', data)
    return data;
  }
}
</script>