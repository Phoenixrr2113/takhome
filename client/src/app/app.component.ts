import { Component } from "@angular/core";
import { UserFormService } from "./user-form.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  user = { name: "", dob: "" };

  colors = ["red", "blue", "green"];

  constructor(private userFormService: UserFormService) {}

  handleChange = event => {
    this.user[event.target.name] = event.target.value;
  };
  handleDateChange = event => {
    this.user.dob = event.target.value;
    console.log(this.user);
  };

  handleSubmit(event) {
    event.preventDefault();
    this.userFormService.addPerson(this.user).subscribe(
      data => console.log("success", data),
      error => console.warn("Error", error)
    );
  }
}
