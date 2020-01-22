import { interval } from "rxjs";
import { mapTo } from "rxjs/operators";

interval(1000).pipe(
    mapTo({type: 'Notification Arrived'})
).subscribe(console.log)