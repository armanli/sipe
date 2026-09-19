import { Component } from '@angular/core';
import { PlanningAndReviewKpisComponent } from '../../shared/components/planning-and-review-kpis/planning-and-review-kpis.component';
import { FlowBannerComponent } from './components/flow-banner/flow-banner.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { RevisionsComponent } from './components/revisions/revisions.component';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  standalone: true,
  imports: [
    PlanningAndReviewKpisComponent,
    FlowBannerComponent,
    TimelineComponent,
    RevisionsComponent,
  ],
})
export class FeedbackComponent {}
