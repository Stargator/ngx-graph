import { Component } from '@angular/core';
import * as shape from 'd3-shape';
import { Subject } from 'rxjs/Subject';
import {generateHierarchialGraph} from './data';

@Component({
  selector: 'app',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  theme = 'dark';
  hierarchialGraph: { links: any[]; nodes: any[] };

  // observables
  update$: Subject<any> = new Subject();

  // line interpolation
  curve: any = shape.curveBundle.beta(1);

  constructor() {
      this.hierarchialGraph =  generateHierarchialGraph();
  }

  updateChart() {
    const node = {id: 'jlf8k44i', label: 'bitbucket'};
    const link = {source: 'jlf8k44i', target: '6', label: ''};

    this.hierarchialGraph.nodes.push(node);
    this.hierarchialGraph.links.push(link);

    this.update$.next(true);
  }
}
