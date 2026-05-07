import type { ComponentType } from 'react';
import { PhSlider } from './PhSlider';
import { NumerosOxidacion } from './NumerosOxidacion';
import { LeChatelier } from './LeChatelier';

const REGISTRY: Record<string, ComponentType> = {
  'ph-slider': PhSlider,
  'numeros-oxidacion': NumerosOxidacion,
  'le-chatelier': LeChatelier,
};

interface Props {
  id: string;
}

export function Visualizador({ id }: Props) {
  const Component = REGISTRY[id];
  if (!Component) {
    return (
      <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-3 text-xs text-amber-300">
        Visualizador "{id}" no encontrado.
      </div>
    );
  }
  return <Component />;
}
