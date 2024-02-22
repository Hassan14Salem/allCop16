import { Component, OnInit } from '@angular/core';
// declare var $: any;
// import * as Aos from 'aos';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // Aos.init();

  }
  isSearchInputVisible: boolean = false;

  toggleSearchInput(): void {
    this.isSearchInputVisible = !this.isSearchInputVisible;
  }
  removeInutSearch(){
    this.isSearchInputVisible = this.isSearchInputVisible;

  }

  fakeData = [
    { question: 'Q 1', answer: 'Q 1 Answer here.' },
    { question: 'Q 2', answer: 'Q 2 Answer here.' },
    { question: 'Q 3', answer: 'Q 3 Answer here.' }
  ];
  fakeData2 = [
    { question: 'Q 4', answer: 'Q 4 Answer here.' },

  ];
  filteredData = this.fakeData;
  searchValue: string = '';
  filteredData2 = this.fakeData2;

  search1() {
    if (this.searchValue.trim() !== '') {
      this.filteredData = this.fakeData.filter(item =>
        item.question.toLowerCase().includes(this.searchValue.toLowerCase())
      );

    }

    else {
      this.filteredData = this.fakeData;
    }
  }
  search2(){
     if(this.searchValue.trim() !== ''){
      this.filteredData2 = this.fakeData2.filter(item =>
        item.question.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    }

    else {
      this.filteredData2 = this.fakeData2;
    }
  }
  allSearch() {
    this.filteredData = this.fakeData.filter(item =>
      item.question.toLowerCase().includes(this.searchValue.toLowerCase())
    );
    this.filteredData2 = this.fakeData2.filter(item =>
      item.question.toLowerCase().includes(this.searchValue.toLowerCase())
    );
  }
}
