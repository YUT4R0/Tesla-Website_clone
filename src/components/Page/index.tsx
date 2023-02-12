import React from 'react';
import { Container, Spacer } from './styles';
import DefaultOverlayContent from '../DefaultOverlayContent';
import { ModelSection, ModelsWrapper } from '../Model'
import UniqueOverlay from '../UniqueOverlay';

const Page: React.FC = () => {
  return (
    <Container>
        <ModelsWrapper>

            <div>
            {
                [
                  "Fiat Uno Sporting",
                  "Peugeot 207 SW Escapade",
                  "Chevrolet Prisman Joy",
                  "Honda Civic LX G7",
                  "Fiat Cronos Precision 1.8 AT6 ",
                  "Citroen C4",
                  "Audi A3 Turbo 20v",
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
            
              <Spacer />
                
              <UniqueOverlay />

        </ModelsWrapper>
    </Container>
  );
}

export default Page;