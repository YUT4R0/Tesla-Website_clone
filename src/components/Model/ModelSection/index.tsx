import React, { useEffect, useRef } from 'react';
import { Container } from './styles';
import useModel from '../useModel';

interface Props extends React.HTMLAttributes<HTMLDivElement>{
  modelName: string;
  overlayNode: React.ReactNode;
}

const ModelSection:React.FC<Props> = ( {
  modelName,
  overlayNode,
  children,
  ...props
} ) => {

  const { regModels } = useModel(modelName)

  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(
    () => {
      if (sectionRef.current) {
        regModels({ modelName, overlayNode, sectionRef })
      }
    },
    [modelName, overlayNode, regModels]
  )

  return (
    <Container ref={sectionRef} {...props} >
      {children}
    </Container>
  );
}

export default ModelSection;
