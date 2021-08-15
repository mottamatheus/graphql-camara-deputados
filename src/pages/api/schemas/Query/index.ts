import { gql } from 'apollo-server';

const QueryTypes = gql`
  type Query {
    blocos(
      id: [Int]
      idLegislatura: [Int]
      siglaPartido: [String]
      after: String
      first: Int
      ordem: String
      ordenarPor: String
    ): BlocoCursor
    bloco(id: ID!): Bloco

    deputados(
      id: [Int]
      nome: String
      idLegislatura: [Int]
      siglaUf: [String]
      siglaPartido: [String]
      siglaSexo: String
      after: String
      first: Int
      dataInicio: String
      dataFim: String
      ordem: String
      ordenarPor: String
    ): DeputadoSimplesCursor

    deputado(id: ID!): Deputado
    deputadoDespesas(
      id: ID!
      idLegislatura: [Int]
      ano: [Int]
      mes: [Int]
      cnpjCpfFornecedor: String
      after: String
      first: Int
      ordem: String
      ordenarPor: String
    ): DespesaCursor
    deputadoEventos(
      id: ID!
      dataInicio: String
      dataFim: String
      after: String
      first: Int
      ordem: String
      ordenarPor: String
    ): EventoCursor
    deputadoOrgaos(
      id: ID!
      dataInicio: String
      dataFim: String
      after: String
      first: Int
      ordem: String
      ordenarPor: String
    ): OrgaoCursor

    eventos(
      id: [Int]
      idTipoEvento: [Int]
      idSituacao: [Int]
      idTipoOrgao: [Int]
      idOrgao: [Int]
      dataInicio: String
      dataFim: String
      horaInicio: String
      horaFim: String
      after: String
      first: Int
      ordem: String
      ordenarPor: String
    ): EventoCursor
    evento(id: ID!): Evento
    eventoDeputados(id: ID!): [Deputado]
    eventoOrgaos(id: ID!): [Orgao]
    eventoPautas(id: ID!): [Pauta]
    eventoSituacoes: [Situacao]
    eventoTipos: [TipoEvento]

    legislaturas(
      id: [Int]
      data: String
      after: String
      first: Int
      ordem: String
      ordenarPor: String
    ): LegislaturaCursor
    legislatura(id: ID!): Legislatura
    legislaturaMesa(id: String, dataInicio: String, dataFim: String): [Mesa]

    partidos(
      sigla: [String]
      dataInicio: String
      dataFim: String
      idLegislatura: [Int]
      after: String
      first: Int
      ordem: String
      ordenarPor: String
    ): PartidoCursor
    partido(id: ID!): Partido
    partidoMembros(
      id: ID!
      dataInicio: String
      dataFim: String
      idLegislatura: [Int]
      ordenarPor: String
      ordem: String
      first: Int
      after: String
    ): [Deputado]

    proposicoes(
      id: [Int]
      siglaTipo: [String]
      numero: [Int]
      ano: [Int]
      idAutor: [Int]
      autor: String
      siglaPartidoAutor: [String]
      idPartidoAutor: Int
      siglaUfAutor: [String]
      keywords: [String]
      tramitacaoSenado: Boolean
      dataInicio: String
      dataFim: String
      dataApresentacaoInicio: String
      dataApresentacaoFim: String
      idSituacao: [Int]
      after: String
      first: Int
      ordem: String
      ordenarPor: String
    ): ProposicaoCursor
    proposicao(id: ID!): Proposicao
    proposicaoAutores(id: ID!): [AutorProposicao]
    proposicaoTramitacoes(
      id: ID!
      dataInicio: String
      dataFim: String
    ): [Tramitacao]
    proposicaoVotacoes(id: ID!): [Votacao]
    proposicaoSituacoes: [Situacao]

    orgaos(
      id: [Int]
      sigla: [String]
      idTipoOrgao: [Int]
      dataInicio: String
      dataFim: String
      after: String
      first: Int
      ordem: String
      ordenarPor: String
    ): OrgaoCursor
    orgao(id: ID!): Orgao
    orgaoEventos(
      id: ID!
      idTipoEvento: [Int]
      dataInicio: String
      dataFim: String
      after: Int
      first: Int
      ordem: String
      ordenarPor: String
    ): EventoCursor
    orgaoMembros(
      id: ID!
      dataInicio: String
      dataFim: String
      after: Int
      first: Int
    ): [MembroOrgao]
    orgaoSituacoes: [Situacao]

    votacao(id: ID!): Votacao
    votacaoVotos(id: ID!, after: String, first: Int!): VotoCursor
  }
`;

export default { QueryTypes };
