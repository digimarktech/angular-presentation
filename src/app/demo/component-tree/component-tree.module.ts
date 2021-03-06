import {NgModule} from '@angular/core';
import {ComponentTreeComponent} from './component-tree.component';
import {RouterModule} from '@angular/router';
import {SlidesRoutes} from '../../presentation/slide-routes';

import {ExerciseModule} from '../../exercise/exercise.module';
import {PresentationModule} from '../../presentation/presentation.module';
import {FeedbackModule} from '../../feedback/feedback.module';
import {BrowserWindowModule} from '../../browser-window/browser-window.module';
import {Ng2TsExercises} from '../../../../ng2ts/ng2ts';

const routes = RouterModule.forChild(
  SlidesRoutes.get(ComponentTreeComponent)
);

@NgModule({
  imports: [routes, PresentationModule, ExerciseModule, BrowserWindowModule, FeedbackModule],
  providers: [Ng2TsExercises],
  declarations: [ComponentTreeComponent],
  exports: [ComponentTreeComponent]
})
export class ComponentTreeModule {

}
