import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "forms-multi-select-example",
  templateUrl: "./forms-multi-select-example.component.html",
  styleUrls: ["./forms-multi-select-example.component.scss"]
})
export class FormsMultiSelectExampleComponent implements OnInit {
  heroForm: FormGroup;
  isCitiesControlVisible = true;
  cities: any[] = [
    { value: 1, text: "Vilnius" },
    { value: 2, text: "Kaunas" },
    { value: 3, text: "Pavilnys (Disabled)" },
    { value: 4, text: "Pabradė" }
  ];
  // countries = ["India", "Japan", "China", "USA", "Asia", "Russia"];

  mappedCountries = [];

  public addTagNowRef: (name) => void;
  constructor(private fb: FormBuilder) {
    this.addTagNowRef = name => this.addNewItem(name);
  }

  ngOnInit() {
    this.heroForm = this.fb.group({
      selectedCitiesIds: []
    });
    this.mappedCountries = this.getDataWithUniqueIds(this.cities);
  }

  toggleCitiesControl() {
    this.isCitiesControlVisible = !this.isCitiesControlVisible;
  }

  clearCities() {
    this.heroForm.get("selectedCitiesIds").patchValue([]);
  }

  addTagPromise = name => {
    return { name: name, id: this.mappedCountries.length };
  };

  addNewItem(item) {
    this.mappedCountries.push({
      name: item,
      id: this.mappedCountries.length
    });
    console.log(this.mappedCountries);
  }

  getDataWithUniqueIds(data: any[]) {
    let result = [];
    data.forEach((x, index) => {
      result.push({
        name: x,
        id: index
      });
    });
    return result;
  }

  selectAll() {
    this.heroForm.get("selectedCitiesIds").setValue(this.cities);
  }

  unselectAll() {
    this.heroForm.get("selectedCitiesIds").setValue([]);
  }

  // addItem() :Promise{

  // }
}
