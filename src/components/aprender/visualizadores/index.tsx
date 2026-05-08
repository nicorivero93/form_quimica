import type { ComponentType } from 'react';
import { PhSlider } from './PhSlider';
import { NumerosOxidacion } from './NumerosOxidacion';
import { LeChatelier } from './LeChatelier';
import { DiagramaMoeller } from './DiagramaMoeller';
import { OrbitalesAtomicos } from './OrbitalesAtomicos';
import { GasesIdealesSliders } from './GasesIdealesSliders';
import { DiagramaEnergia } from './DiagramaEnergia';
import { BalanceadorEcuaciones } from './BalanceadorEcuaciones';
import { FormacionEnlace } from './FormacionEnlace';
import { CurvaCinetica } from './CurvaCinetica';

const REGISTRY: Record<string, ComponentType> = {
  'ph-slider': PhSlider,
  'numeros-oxidacion': NumerosOxidacion,
  'le-chatelier': LeChatelier,
  'diagrama-moeller': DiagramaMoeller,
  'orbitales-atomicos': OrbitalesAtomicos,
  'gases-ideales-sliders': GasesIdealesSliders,
  'diagrama-energia': DiagramaEnergia,
  'balanceador-ecuaciones': BalanceadorEcuaciones,
  'formacion-enlace': FormacionEnlace,
  'curva-cinetica': CurvaCinetica,
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
