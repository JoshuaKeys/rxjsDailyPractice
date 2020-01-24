import { range, partition, concat } from "rxjs";
import { filter} from "rxjs/operators";

const [even$, odd$] = partition(range(1, 20), (n => n % 2 === 0)
)//.subscribe(console.log);

// odd$.pipe(concat(odd$)).subscribe(console.log);

concat(even$, odd$).subscribe(console.log);