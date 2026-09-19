import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'flow-banner',
  styleUrl: './flow-banner.components.scss',
  templateUrl: './flow-banner.components.html',
})
export class FlowBannerComponents {
  protected flows = new Array<FlowStep>(
    {
      label: 'Professor Cria',
      isDone: true,
      isActual: false,
    },
    {
      label: 'Envia à Coord.',
      isDone: true,
      isActual: false,
    },
    {
      label: 'Análise',
      isDone: true,
      isActual: false,
    },
    {
      label: 'Correções',
      isDone: true,
      isActual: false,
    },
    {
      label: 'Aprovação Final',
      isDone: false,
      isActual: true,
    },
  );
}

interface FlowStep {
  label: string;
  isDone: boolean;
  isActual: boolean;
}
