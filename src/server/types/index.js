import BlocoTypes from './Bloco/types.graphql';
import DeputadoTypes from './Deputado/types.graphql';
import EventoTypes from './Evento/types.graphql';
import LegislaturaTypes from './Legislatura/types.graphql';
import MesaTypes from './Mesa/types.graphql';
import OrgaoTypes from './Orgao/types.graphql';
import PageInfoTypes from './PageInfo/types.graphql';
import PartidoTypes from './Partido/types.graphql';
import PautaTypes from './Pauta/types.graphql';
import ProposicaoTypes from './Proposicao/types.graphql';
import QueryTypes from './Query/types.graphql';
import SituacaoTypes from './Situacao/types.graphql';
import VotacaoTypes from './Votacao/types.graphql';

const { gql } = require('apollo-server');

const typeDefs = gql`
  ${BlocoTypes}
  ${DeputadoTypes}
  ${EventoTypes}
  ${LegislaturaTypes}
  ${MesaTypes}
  ${OrgaoTypes}
  ${PageInfoTypes}
  ${PartidoTypes}
  ${PautaTypes}
  ${ProposicaoTypes}
  ${QueryTypes}
  ${SituacaoTypes}
  ${VotacaoTypes}
`;

export default typeDefs;
