import {RouterModule, Routes} from "@angular/router";
import {SearchComponent} from "../areas/search/search.component";
import {ResultModalComponent} from "../areas/result/result-modal/result-modal.component";
/**
 * Created by ryanlauer on 6/8/17.
 */
export const ROUTES: Routes = [
{
  path: 'contact',
    component: SearchComponent
}
];
