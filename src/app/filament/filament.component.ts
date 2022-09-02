import {Component, Input, OnInit} from '@angular/core';
import {Type} from "../../models/Type";
import {TypeService} from "../service/type.service";
import {Filament} from "../../models/Filament";
import {Slicer} from "../../models/Slicer";
import {FilamentService} from "../service/filament.service";

@Component({
  selector: 'app-filament',
  templateUrl: './filament.component.html',
  styleUrls: ['./filament.component.css']
})
export class FilamentComponent implements OnInit {
  public types: Type[] = [];
  public selectedTypes: Type[] = [];
 public message: String = "no";
  public names: String[] = [];
  public colors: String[] = [];
  public brands: String [] = [];
public page: number=1;
  public selectedMaterialDL: String = "";
public selectedPrinterDL: String="";
  public selectedBrandDL: String = "";
  public selectedColorDL: String = "";
  public slicer: Slicer = {regFanSpeed: 0, printSpeedMin:0, slicerId: 0, fanSpeedThreshold: 0, regFanSpeedAtLayer:0, initLayerSpeed:0, initLayerHeight:0, fanSpeed:0, initFanSpeed:0, layerHeight: 0, maxFanSpeed:0, bedTempMax:0, bedTempRecommended:0, bedTempMin:0, printingTempMax:0, printingTemp:0, printingTempMin:0, printSpeedMax:0, printSpeedRecommended:0, enablePrintCooling: false, printingTempInitLayer:0, enableRetraction:false, retractionDIstance:0, retractionSpeed:0};
  public selectedType: Type = {
    typeId: 0,
    color: "",
    brand: "",
    materialType: "",
    bedAdhesionAid: "",
    bedEnclosure: false,
    bedHeating: "",
    compositeFilament: false,
    filamentPath: "",
    filamentWidth: 0,
    density: 0,
    nozzleDiameter: 0,
    nozzleRecommendation: "",
    preparation: ""
  }
  public filament: Filament = {slicer: this.slicer, filamentId: 0, type: this.selectedType} ;


  constructor(private typeservice: TypeService, private  filamentservice: FilamentService) {
  }

  ngOnInit() {
    this.getTypes();
    this.getAllNames();
    this.getAllBrands();
    this.getAllColors();
  }

  public getTypes(): void {
    this.typeservice.getTypes().subscribe(
      res => {
        this.types = res;
      });


  }



  public getAllNames() {
    this.typeservice.getAllNames().subscribe(data =>
      this.names = data);
  }

  public getAllBrands() {
    this.typeservice.getAllBrands().subscribe(data =>
      this.brands = data);
  }

  public getAllColors() {
    this.typeservice.getAllColors().subscribe(data =>
      this.colors = data);
  }

  public startSearch() {

    if (this.selectedColorDL != "" &&  this.selectedBrandDL == "" && this.selectedMaterialDL == "" ){
      this.typeservice.findByColor(this.selectedColorDL).subscribe(data =>
        this.selectedTypes = data);
      this.message="no";

    } else if (this.selectedBrandDL != ""  && this.selectedColorDL == "" &&  this.selectedMaterialDL == ""){
      this.typeservice.findByBrand(this.selectedBrandDL).subscribe(data =>
        this.selectedTypes = data);
      this.message="no";

    } else if (this.selectedMaterialDL != "" && this.selectedColorDL == ""  && this.selectedBrandDL == "") {
      this.typeservice.findByMaterialType(this.selectedMaterialDL).subscribe(data =>
        this.selectedTypes = data);
      this.message="no";


    } else if (this.selectedColorDL == "" && this.selectedBrandDL == ""  && this.selectedMaterialDL == "" ) {
      this.typeservice.getTypes().subscribe(data =>
        this.selectedTypes = data);
      this.message="no";

    } else if (this.selectedColorDL != "" && this.selectedBrandDL != "" && this.selectedMaterialDL == "") {
      this.typeservice.findByColorANDBrand(this.selectedColorDL, this.selectedBrandDL).subscribe(data =>
        this.selectedTypes = data);
      this.message="no";

    }  else if (this.selectedColorDL != "" && this.selectedBrandDL == "" && this.selectedMaterialDL != "") {
      this.typeservice.findByColorANDType(this.selectedColorDL, this.selectedMaterialDL).subscribe(data =>
        this.selectedTypes = data);
      this.message="no";

    }else if (this.selectedColorDL == "" && this.selectedBrandDL != "" && this.selectedMaterialDL != "") {
      this.typeservice.findByBrandANDType(this.selectedBrandDL, this.selectedMaterialDL).subscribe(data =>
        this.selectedTypes = data);
      this.message="no";

    }else if (this.selectedColorDL != "" && this.selectedBrandDL != "" && this.selectedMaterialDL != ""){
      this.typeservice.findByBrandANDTypeANDColor(this.selectedBrandDL, this.selectedMaterialDL, this.selectedColorDL).subscribe(data =>
        this.selectedTypes = data);
      this.message="no";

    }


  }
  public openDetails(value: number){
    this.typeservice.getTypeById(Number(value)).subscribe(data =>
      this.selectedType = data);
    console.log(value);
    this.filamentservice.getFilamentByTypeId(value).subscribe(
      res => {
        this.filament = res;
  })



  }
}
