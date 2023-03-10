import React from 'react';

export interface CarModel {
    modelName: string
    overlayNode: React.ReactNode
    sectionRef: React.RefObject<HTMLElement>
}

interface ModelsContext {
    wrapperRef: React.RefObject<HTMLElement>
    registeredModels: CarModel[]
    regModels: (model: CarModel) => void
    unregisterModels: (modelName: string) => void
    getModelByName: (modelName: string) => (CarModel | null)
}

export default React.createContext<ModelsContext>(
    {} as ModelsContext
)