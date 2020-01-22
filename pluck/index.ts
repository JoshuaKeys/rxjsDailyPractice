import { interval } from "rxjs";
import { map, pluck, take } from "rxjs/operators";

interval(1000).pipe(
    map(i => ({name: `Friend #${i}`, mutualFriends: i * 2 + 1})),
    pluck('name'),
    take(10)
).subscribe(console.log, console.log, ()=>{console.log('Completed')})