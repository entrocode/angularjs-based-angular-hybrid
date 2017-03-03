import {Injectable} from '@angular/core';

@Injectable()
export class DowngradeableService {
    getMessage () {
        return 'WAT? Which angular is this?';
    }
}