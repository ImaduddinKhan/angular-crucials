import { Component, EventEmitter, Output} from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent{
    @Output() featureSelected = new EventEmitter<string>();
    constructor(){

    }
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
    }

    onSelect(recipeFeature: string){
        this.featureSelected.emit(recipeFeature);
    }
}