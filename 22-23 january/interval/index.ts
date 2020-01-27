import { interval, asyncScheduler } from 'rxjs';
import { mapTo } from 'rxjs/operators';

interval(1000).subscribe(console.log)