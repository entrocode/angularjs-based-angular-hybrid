import {Injectable} from '@angular/core';

@Injectable()
export class DowngradeableService {  
    getMessage () {
        return 'Angular 2 service';
    }
}