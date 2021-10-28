export interface IFilme {
  nome: string;
  lancamento: string;
  duracao: string;
  classificacao: number;
  cartaz: string;
  generos: string[]; //por ser uma relação
  pagina?: string;
}
