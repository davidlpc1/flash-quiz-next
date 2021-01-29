import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import Widget from '../Widget';

import animationData from './loading.json';

const LottieContainer = styled.div`
    display:flex;
    width:100%;
    justify-content: center;
    align-items: center;

    pointer-events:none;
`;

export default function LoadingWidget() {
  // eslint-disable-next-line no-unused-vars
  const [animationState, setAnimationState] = useState({
    isStopped: false, isPaused: false,
  });

  return (
    <Widget
      as={motion.section}
      transition={{ delay: 0.5, duration: 0.5 }}
      variants={{
        show: { opacity: 1, y: '0' },
        hidden: { opacity: 0, y: '100%' },
      }}
      initial="hidden"
      animate="show"
    >
      <Widget.Header>Loading...</Widget.Header>

      <Widget.Content>

        <LottieContainer>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
              },
            }}
            height={300}
            width={300}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
          />
        </LottieContainer>

      </Widget.Content>
    </Widget>

  );
}
