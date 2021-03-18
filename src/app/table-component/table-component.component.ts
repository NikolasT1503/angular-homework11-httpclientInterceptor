import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { MyHttpServiceService } from '../http-service.service';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {
  users;

  constructor(public myHttp: MyHttpServiceService) { }

  ngOnInit(): void {
    this.myHttp.loadUsers();
    //console.log('Загрузка users', this.myHttp.users);
  }

}


/* #todo

Пример filter pipe
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(studs, filterStr) {
        console.log('filterPipe',studs);
        console.log('filterPipe',filterStr);
        const fios: string[] = studs.map(s => s.split(",",1)[0]);
        console.log('filterPipe',fios);

        return fios.filter(fio => {
            return fio.includes(filterStr)
        })
    }
} */