import { range, of } from "rxjs";
import { groupBy, mergeMap, map, toArray } from "rxjs/operators";

range(1, 20).pipe(
    groupBy(n => n % 3),
    mergeMap(nGroup => nGroup.pipe(toArray()))
).subscribe(console.log);