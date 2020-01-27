import { of, zip } from "rxjs";

const age$ = of<number>(27, 25, 29, 89);
const name$ = of<string>('Foo', 'Bar', 'Beer', 'Baboon');
let isDev$ = of<boolean>(true, true, false, true);

zip(age$, name$, isDev$).subscribe(console.log);