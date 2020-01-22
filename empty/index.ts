import { empty } from 'rxjs';

empty().subscribe({
    next: console.log,
    complete: console.log.call(this, 'Complete')
})