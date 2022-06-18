import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {
  listTareas: Tarea[] = []
  nombreTarea = '';

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea() {
    // console.log(this.nombreTarea);
    // Crear un objeto tarea
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }

    // Agregar el objeto tarea al array
    this.listTareas.push(tarea);


    // Resetear formulario
    this.nombreTarea = '';
  }

  eliminarTarea(index: number): void {
    // console.log(index);
    this.listTareas.splice(index, 1);
  }

  actualizarTarea(tarea: Tarea, index: number): void {
    this.listTareas[index].estado = !tarea.estado;
  }

}
