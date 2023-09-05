import { useCallback, useEffect, useState } from 'react';

import { AiOutlineTeam } from 'react-icons/ai';
import { SlDiamond } from 'react-icons/sl';
import { GiQueenCrown, GiStrikingArrows } from 'react-icons/gi';
import { RiEmotionHappyLine, RiMedalFill } from 'react-icons/ri';
import { TbTools } from 'react-icons/tb';

export default function useHome() {
  const skills = [
    {
      id: Math.random(),
      icon: SlDiamond,
      title: 'Realismo P&B',
      description: 'Obras de arte que ganham vida na pele. Traços precisos e riqueza de detalhes capturam a essência de sombras e luzes.Uma expressão intensa e atemporal. Adorne sua pele com significados profundos e duradouros.',
    },
    {
      id: Math.random(),
      icon: GiQueenCrown,
      title: 'Geek',
      description: ' Transforme sua paixão em arte na pele. Heróis e ícones ganham vida em traços precisos. Expressão intensa de sua cultura e paixões. Marque sua pele com significados únicos e eternos.',
    },
    {
      id: Math.random(),
      icon: GiStrikingArrows,
      title: 'Aquarela',
      description: 'Cores fluindo na pele como arte viva. Leveza e beleza em cada traço, criando magia única. Expressão suave e encantadora de emoções. Deixe-se envolver pela pintura da sua alma. Aquarele sua história em sua pele, uma obra de arte eterna.',
    },
  ];

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

  const [text, setText] = useState('Realismo');

  const words = ['Realismo', 'Geek', 'Aquarela'];
  let currentIndex = 0;

  const wordsHome = useCallback(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % words.length;
      setText(words[currentIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    wordsHome();
  }, []);

  return {
    skills,
    experience,
    text,
  };
}
