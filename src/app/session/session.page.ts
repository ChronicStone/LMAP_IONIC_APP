import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute, Resolve, Router } from "@angular/router";
import { FormControl } from "@angular/forms";

import { ApiService } from "../services/api.service";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: "app-session",
  templateUrl: "./session.page.html",
  styleUrls: ["./session.page.scss"],
})
export class SessionPage implements OnInit {
  session: any;
  users: any = [];
  onsite_session_status: state = null;
  filter: any = null;
  searchMode: Boolean = false;
  public searchControl: FormControl;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private apiService: ApiService
  ) {
    this.searchControl = new FormControl();
  }

  ngOnInit() {
    if (!this.apiService.isLoggedIn()) {
      this.router.navigateByUrl("/");
    }
    if (this.route.snapshot.data["special"]) {
      this.session = this.route.snapshot.data["special"];
      for (let t = 0; t < this.session.assessments.length; t++) {
        this.users.push(this.session.assessments[t]);
      }

      for (let i = 0; i < this.users.length; i++) {
        this.users[i].full_name =
          this.users[i].first_name + " " + this.users[i].last_name;
      }
      console.log(this.users);
    }
    this.searchControl.valueChanges
      .pipe(debounceTime(100))
      .subscribe((search) => {
        this.setFilteredItems(search);
      });
  }

  setFilteredItems(searchTerm) {
    this.users = this.filterItems(searchTerm);
  }

  filterItems(searchTerm) {
  if(searchTerm !=null){
    return this.users.filter((item) => {
      return (
        item.first_name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
      );
    });
  }else{
    return this.users
  }
  }
  resetSearch() {
    this.searchControl.reset();
    this.users = [];
    for (let t = 0; t < this.session.assessments.length; t++) {
      this.users.push(this.session.assessments[t]);
    }
    this.searchMode = false
  }

  goBack() {
    this.location.back();
  }

  seeDone() {
    this.filter = { onsite_session_status: 1 };
  }

  seeEdit() {
    this.filter = { onsite_session_status: 2 };
  }

  seeAbsent() {
    this.filter = { onsite_session_status: 0 };
  }

  seeReset() {
    this.filter = null;
  }

  goSearch() {
    this.searchMode = true;
  }
}

interface state {
  statut: statut;
}

enum statut {
  absent = 0,
  present = 1,
  nonValide = 2,
}
