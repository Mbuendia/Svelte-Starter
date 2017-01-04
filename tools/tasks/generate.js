import gulp from 'gulp';
import { env } from 'gulp-util';

import { DIST_ROOT } from '../constants';
import { ServiceWorker } from '../utils';

gulp.task('generate', (done) => {
  new ServiceWorker(DIST_ROOT, (env.mode === 'prod'), done);
});
