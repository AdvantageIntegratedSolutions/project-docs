import quickbase from './quickbase-client';
import SortableTableComponent from './sortable-table/sortable-table.component';
import ProgressCircleComponent from './progress-circle/progress-circle.component';
import LegendComponent from './legend/legend.component';

angular
  .module('app.shared', [])
  .constant('quickbase', quickbase)
  .component('sortableTable', SortableTableComponent)
  .component('progressCircle', ProgressCircleComponent)
  .component('skillLegend', LegendComponent)