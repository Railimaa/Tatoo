import { RiEmotionHappyLine, RiMedalFill } from 'react-icons/ri';
import { TbTools } from 'react-icons/tb';
import { AiOutlineTeam } from 'react-icons/ai';

export default function useInfos() {
  const experience = [
    {
      id: Math.random(),
      icon: RiEmotionHappyLine,
      title: '1470',
      set: '+',
      text: 'Clientes satisfeitos',
    },
    {
      id: Math.random(),
      icon: TbTools,
      title: '1200',
      set: '+',
      text: 'Artes completas',
    },
    {
      id: Math.random(),
      icon: RiMedalFill,
      title: '20',
      set: '+',
      text: 'Anos experiência',
    },
    {
      id: Math.random(),
      icon: AiOutlineTeam,
      title: '100',
      set: '%',
      text: 'Profissional',
    },
  ];

  return { experience };
}
