import { useCallback, useContext, useEffect } from 'react';
import ModelsContext from './ModelsContext';

const useModel = (modelName: string) => {
  const { regModels, unregisterModels, getModelByName } = useContext(ModelsContext)

  useEffect(
    () =>  () => unregisterModels(modelName),
    [modelName, unregisterModels]
  )  

  //essa função retornará o model que o usuario ja especificou o nome quando ele chamou o Hook
  const getModel = useCallback(
    () => getModelByName(modelName),
    [getModelByName, modelName]
  )

  return {
    regModels,
    getModel
  }

}

export default useModel;