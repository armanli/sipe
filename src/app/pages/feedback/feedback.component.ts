import { Component } from '@angular/core';
import { PlanningAndReviewKpisComponent } from '../../shared/components/planning-and-review-kpis/planning-and-review-kpis.component';
import { FlowBannerComponents } from './components/flow-banner/flow-banner.components';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  standalone: true,
  imports: [PlanningAndReviewKpisComponent, FlowBannerComponents],
})
export class FeedbackComponent {}
