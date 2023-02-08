import React from 'react';
import { Container } from './styles';
import DefaultOverlayContent from '../DefaultOverlayContent';
import { ModelSection, ModelsWrapper } from '../Model'

const Page: React.FC = () => {
  return (
    <Container>
        <ModelsWrapper>
            <div>
              {
                [
                  "Model 1",
                  "Model 2",
                  "Model 3",
                  "Model 4",
                  "Model 5",
                  "Model 6",
                  "Model 7",
                ].map(model => (
                  <ModelSection
                  key={model}
                  className='colored'
                  modelName={model}
                  overlayNode={
                    <DefaultOverlayContent
                    label={model}
                    description='Eu amo comer fezes'
                    />
                  }
                  />
                ))
              }
            </div>
        </ModelsWrapper>
    </Container>
  );
}

export default Page;