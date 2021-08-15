import BlocoTypes from './Bloco/';
import DeputadoTypes from './Deputado/';
import EventoTypes from './Evento/';
import LegislaturaTypes from './Legislatura/';
import MesaTypes from './Mesa/';
import OrgaoTypes from './Orgao/';
import PageInfoTypes from './PageInfo/';
import PartidoTypes from './Partido/';
import PautaTypes from './Pauta/';
import ProposicaoTypes from './Proposicao/';
import QueryTypes from './Query/';
import SituacaoTypes from './Situacao/';
import VotacaoTypes from './Votacao/';

import { gql } from 'apollo-server';

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
