import { gql } from 'apollo-server';

const DeputadoTypes = gql`
  type Deputado {
    id: ID!
    cpf: String
    dataFalecimento: String
    dataNascimento: String
    escolaridade: String
    municipioNascimento: String
    nomeCivil: String
    redeSocial: [String]
    sexo: String
    ufNascimento: String
    uri: String
    urlWebsite: String
    ultimoStatus: UltimoStatus
  }

  type DeputadoSimples {
    id: ID!
    idLegislatura: Int
    nome: String
    siglaPartido: String
    siglaUf: String
    uri: String
    uriPartido: String
    urlFoto: String
  }

  type DeputadoSimplesCursor {
    edges: [DeputadoSimplesEdge]!
    pageInfo: PageInfo!
  }

  type DeputadoSimplesEdge {
    node: DeputadoSimples
    cursor: String
  }

  type UltimoStatus {
    id: ID!
    condicaoEleitoral: String
    data: String
    descricaoStatus: String
    gabinete: Gabinete
    idLegislatura: Int
    nome: String
    nomeEleitoral: String
    siglaPartido: String
    siglaUf: String
    situacao: String
    uri: String
    uriPartido: String
    urlFoto: String
  }

  type Gabinete {
    andar: String
    email: String
    nome: String
    predio: String
    sala: String
    telefone: String
  }

  type Despesa {
    ano: Int
    cnpjCpfFornecedor: String
    dataDocumento: String
    idDocumento: Int
    idLote: Int
    idTipoDocumento: Int
    mes: Int
    nomeFornecedor: String
    numDocumento: String
    numRessarcimento: String
    parcela: Int
    tipoDespesa: String
    tipoDocumento: String
    urlDocumento: String
    valorDocumento: Float
    valorGlosa: Float
    valorLiquido: Float
  }

  type DespesaCursor {
    edges: [DespesaEdge]!
    pageInfo: PageInfo!
  }

  type DespesaEdge {
    node: Despesa
    cursor: String
  }
`;

export default { DeputadoTypes };
