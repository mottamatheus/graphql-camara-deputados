import { gql } from 'apollo-server';

const MesaTypes = gql`
  type Mesa {
    id: ID!
    dataFim: String
    dataInicio: String
    idLegislatura: Int
    idPapel: String
    nome: String
    nomePapel: String
    siglaPartido: String
    siglaUf: String
    uri: String
    uriPartido: String
    urlFoto: String
  }
`;

export default { MesaTypes };
