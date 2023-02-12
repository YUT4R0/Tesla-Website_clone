import React, { useCallback, useRef, useState } from 'react';
import { Container, OverlaysRoot } from './styles';
import ModelsContext, { CarModel } from '../ModelsContext';
import ModelOverlay from '../ModelOverlay';

interface Props {
  children: React.ReactNode;
}

const ModelsWrapper:React.FC<Props> = ( { children } ) => {

  const wrapperRef = useRef<HTMLDivElement>(null)

  const [registeredModels, setRegisteredModels] = useState<CarModel[]>([])

  const regModels = useCallback(
    (model: CarModel) => {
      setRegisteredModels(state => [...state, model])
    },
    []
  )

  const unregisterModels = useCallback(
    (modelName: string) => {
      setRegisteredModels(state => state.filter(
        model => model.modelName !== modelName
      ))
    },
    []
  )

  const getModelByName = useCallback(
    (modelName: string) => {
      return registeredModels.find(item => item.modelName === modelName) || null
    },
    [registeredModels]
  )

  return (
    <ModelsContext.Provider
    value={ {
      wrapperRef,
      registeredModels,
      regModels,
      unregisterModels,
      getModelByName,
    } }
    >
      <Container ref={wrapperRef}>

        <OverlaysRoot>
          {
            registeredModels.map( item => (
              <ModelOverlay
              key={item.modelName}
              model={item}
              >
                {item.overlayNode}
              </ModelOverlay>
            ))
          }
        </OverlaysRoot>

        {children}

      </Container>
    </ModelsContext.Provider>
  );
}

export default ModelsWrapper