import { Routes } from '@angular/router';
import { LibraryComponent } from './pages/library/library.component';
import { PlanningComponent } from './pages/planning/planning.component';
import { ReviewComponent } from './pages/review/review.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CasesComponent } from './pages/cases/cases.component';
import { ChatbotComponent } from './pages/chatbot/chatbot.component';
import { PoliciesComponent } from './pages/policies/policies.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SignComponent } from './pages/sign/sign.component';
import { SupportComponent } from './pages/support/support.component';
import { TermsOfUseComponent } from './pages/terms-of-use/terms-of-use.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'cases',
    component: CasesComponent,
  },
  {
    path: 'chatbot',
    component: ChatbotComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
  },
  {
    path: 'library',
    component: LibraryComponent,
  },
  {
    path: 'planning',
    component: PlanningComponent,
  },
  {
    path: 'policies',
    component: PoliciesComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'review',
    component: ReviewComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'sign',
    component: SignComponent,
  },
  {
    path: 'support',
    component: SupportComponent,
  },
  {
    path: 'terms-of-use',
    component: TermsOfUseComponent,
  },
];
