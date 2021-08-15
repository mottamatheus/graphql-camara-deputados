import { gql } from 'apollo-server';

const EventoTypes = gql`
  type Evento {
    id: ID!
    dataHoraFim: String
    dataHoraInicio: String
    descricaoSituacao: String
    descricaoTipo: String
    fases: String
    localCamara: LocalCamara
    localExterno: String
    orgaos: [OrgaoEvento]
    titulo: String
    uri: String
    uriConvidados: String
    uriDeputados: String
  }

  type EventoCursor {
    pageInfo: PageInfo
    edges: [EventoEdge]
  }

  type EventoEdge {
    node: Evento
    cursor: String
  }

  type LocalCamara {
    andar: String
    nome: String
    predio: String
    sala: String
  }

  type TipoEvento {
    id: ID!
    descricao: String
    nome: String
    sigla: String
  }

  type OrgaoEvento {
    id: ID!
    apelido: String
    idTipoOrgao: Int
    nome: String
    sigla: String
    tipoOrgao: String
    uri: String
  }
`;

export default { EventoTypes };
