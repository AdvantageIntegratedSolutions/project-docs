import DocSectionComponent from './doc-elements/section.component';
import DocHeaderComponent from './doc-elements/header.component';
import DocSubHeaderComponent from './doc-elements/sub-header.component';
import DocCaptionComponent from './doc-elements/caption.component';
import DocCodeComponent from './doc-elements/code.component';
import DocNoticeComponent from './doc-elements/notice.component';
import DocWarningComponent from './doc-elements/warning.component';
import DocBestPracticeComponent from './doc-elements/best-practice.component';
import DocCardComponent from './doc-elements/card.component';

angular
  .module('app.shared', [])
  .component('docSection', DocSectionComponent)
  .component('docHeader', DocHeaderComponent)
  .component('docSubHeader', DocSubHeaderComponent)
  .component('docCaption', DocCaptionComponent)
  .component('docCode', DocCodeComponent)
  .component('docNotice', DocNoticeComponent)
  .component('docWarning', DocWarningComponent)
  .component('docBestPractice', DocBestPracticeComponent)
  .component('docCard', DocCardComponent)