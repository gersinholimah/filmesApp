import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  private dados: any = [];                                         //recebe qualquer coisa, essas coisas ficam guardadas dentro do meu array

  constructor() { }
//chave  index do tipo string pra facilitar encontrar as informações e retorna um boolean pra saber se deu certo ou não

  guardarDados(index: string, dados: any): boolean{
    if(index){
      this.dados[index] = dados;
      return true;
    } else {
      return false;
    }
  }
  pegarDados(index: string): any {
    if (index) {
      return this.dados[index];
    } else {
      return null;
    }
  }

  deletaDados(index: string): boolean{
    return delete this.dados[index];
  }

}
