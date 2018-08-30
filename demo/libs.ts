import 'core-js';
import 'zone.js/dist/zone';

// angular
import '@angular/platform-browser-dynamic';
import '@angular/common';

if(IS_DEV) {
  Error.stackTraceLimit = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}
