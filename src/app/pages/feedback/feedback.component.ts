import { Component } from '@angular/core';
import { PlanningAndReviewKpisComponent } from '../../shared/components/planning-and-review-kpis/planning-and-review-kpis.component';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  standalone: true,
  imports: [PlanningAndReviewKpisComponent],
})
export class FeedbackComponent {}
