import { Component } from '@angular/core';
import { FakeApiService } from '../fake-api.service';

@Component({
  selector: 'app-dados-alunos',
  templateUrl: './dados-alunos.component.html',
  styleUrls: ['./dados-alunos.component.css']
})
export class DadosAlunosComponent {
  alunos: any[] = [];

  constructor(private alunoService: FakeApiService) {}

  ngOnInit(): void {
    this.carregarAlunos();
  }

  carregarAlunos(): void {
    this.alunoService.getAlunos().subscribe((alunos) => {
      this.alunos = alunos;
    });
  }

  calcularMedia(aluno: any): number {
    const notas = aluno.disciplinas.map((disciplina: any) => disciplina.nota);
    const media = notas.reduce((acc: number, nota: number) => acc + nota, 0) / notas.length;
    return isNaN(media) ? 0 : media;
  }
}