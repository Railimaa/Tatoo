import { LiaCertificateSolid, LiaSyringeSolid } from 'react-icons/lia';
import { AiOutlineLike } from 'react-icons/ai';

export default function useCard() {
  const cards = [
    {
      id: Math.random(),
      Icon: LiaCertificateSolid,
      title: 'Melhores tattoos',
      li1: 'Escolha a tattoo perfeita para você !',
      li2: 'Tattoos incríveis que elevam sua autoestima e estilo !',
      li3: 'Explore a arte da tattoo e deixe sua marca no mundo !',
    },
    {
      id: Math.random(),
      Icon: AiOutlineLike,
      title: 'Ótima qualidade',
      li1: 'Tattoos feitas com altíssima qualidade !',
      li2: 'Garanta a melhor qualidade para sua pele !',
      li3: 'Tattoos com a excelência que você merece !',
    },
    {
      id: Math.random(),
      Icon: LiaSyringeSolid,
      title: 'Higienização',
      li1: 'Higienização de Padrão Excepcional !',
      li2: 'Ambiente higienizado!',
      li3: 'Aparelhos higienizados !',
    },
  ];

  return { cards };
}
