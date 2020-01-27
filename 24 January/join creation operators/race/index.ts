import { interval, race } from "rxjs";
import { mapTo, take } from "rxjs/operators";

const obs1 = interval(1000).pipe(mapTo('fast one'));
const obs2 = interval(3000).pipe(mapTo('medium one'));
const obs3 = interval(5000).pipe(mapTo('slow one'))

race(obs1, obs2, obs3).pipe(take(5)).subscribe(console.log);