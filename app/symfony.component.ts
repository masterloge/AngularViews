/**
 * Created by pedroferreira on 09/08/16.
 */
import { Component } from '@angular/core';


@Component({
    selector: 'my-select',
    templateUrl: 'app/symfony.component.html',

})
export class SymfonyComponent {
	inicial = false;

	onclicked(value:boolean)
	{
		this.inicial = value;
	}

	htmlExample =`<div [hidden]="estado()">ola tudo bem</div>`;
	estado()
	{
		return true;
	}
}
