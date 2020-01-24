import { interval } from "rxjs";
import { windowToggle, filter, concatMap, toArray } from "rxjs/operators";
import { fromStdIn } from "../utility";

interval(100).pipe(
    windowToggle(
        fromStdIn().pipe(filter(key=> key === 'p')),
        ()=> fromStdIn().pipe(filter(key => key === 'o'))
    ),
    concatMap(a => a.pipe(toArray()))
).subscribe(console.log)