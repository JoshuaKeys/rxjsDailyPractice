import { timer } from 'rxjs';

timer(5000, 1000).subscribe(console.log)