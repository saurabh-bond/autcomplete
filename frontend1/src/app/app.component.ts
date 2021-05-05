import {Component, OnInit} from '@angular/core';

import {Autocomplete} from 'src/app/autocomplete';
import * as $ from 'jquery';
import {DataserviceService} from './dataservice.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Autocomplete';
    autoCompletArr = new Array<Autocomplete>();

    constructor(private dataService: DataserviceService) {
    }

    ngOnInit() {
        $(document).on('click', function(event) {
            if (!$(event.target).closest('#spnauto').length) {
                $('#ulautocomplete').hide();
            } else {
                $('#ulautocomplete').show();
            }

        });
    }

    autoComplete($event) {
        let search = (<HTMLInputElement> document.getElementById('searchCourse')).value;

        if (search.length > 2) {
            this.dataService.autoComplete(search).subscribe(response => {
                this.autoCompletArr = response.map(item => {
                    return new Autocomplete(
                        item.name,
                        item.description
                    );
                });

            });
            console.log("auto complete arr ", this.autoCompletArr);
        }


    }
}
