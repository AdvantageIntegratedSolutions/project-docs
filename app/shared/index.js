import DocSectionComponent from './doc-elements/section.component';
import DocHeaderComponent from './doc-elements/header.component';
import DocCaptionComponent from './doc-elements/caption.component';
import DocNoticeComponent from './doc-elements/notice.component';
import DocWarningComponent from './doc-elements/warning.component';
import DocBestPracticeComponent from './doc-elements/best-practice.component';
import DocTaskComponent from './doc-elements/task.component';
import DocCommandComponent from './doc-elements/command.component';

import "../vendor/prism/main"

angular
  .module('app.shared', [])
  .component('docSection', DocSectionComponent)
  .component('docHeader', DocHeaderComponent)
  .component('docCaption', DocCaptionComponent)
  .component('docNotice', DocNoticeComponent)
  .component('docWarning', DocWarningComponent)
  .component('docBestPractice', DocBestPracticeComponent)
  .component('docTask', DocTaskComponent)
  .component('docCommand', DocCommandComponent)