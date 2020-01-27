import { fromStdIn } from "../../utility";
import { filter } from "rxjs/operators";

fromStdIn().pipe(
    filter((ev: string) => ['p', 'a', 'd'].indexOf(ev) > -1)
).subscribe(console.log);