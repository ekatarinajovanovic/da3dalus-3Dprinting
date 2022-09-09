import {Component, Input, OnInit} from '@angular/core';
import {Type} from "../../models/Type";
import {TypeService} from "../service/type.service";
import {Filament} from "../../models/Filament";
import {Slicer} from "../../models/Slicer";
import {FilamentService} from "../service/filament.service";
import {PrinterService} from "../service/printer.service";
import {Printer} from "../../models/Printer";
import Swal from "sweetalert2";
import {SlicerService} from "../service/slicer.service";
import {Filaments} from "../../models/StepsFilament";


@Component({
  selector: 'app-filament',
  templateUrl: './filament.component.html',
  styleUrls: ['./filament.component.css']
})
export class FilamentComponent implements OnInit {
  public types: Type[] = [];
  public message: String = "";
  public names: String[] = [];
  public colors: String[] = [];
  public brands: String [] = [];
  public printers: Printer [] = [];
  public page: number = 1;
  public widths:Number[]=[];
  public showtable: boolean=false;
  public countslicer:number=0;
  public counttype: number=0;
  public selectedMaterialDL: String = "";
  public selectedPrinterDL: number = 0;
  public selectedWidthDL: number=0;
  public selectedprinter: Printer = {printerId: 0, printerType: "", bedMaterial: ""};
  public selectedBrandDL: String = "";
  public selectedColorDL: String = "";
  public slicer: Slicer = {
    regFanSpeed: 0,
    printSpeedMin: 0,
    slicerId: 0,
    fanSpeedThreshold: 0,
    regFanSpeedAtLayer: 0,
    initLayerSpeed: 0,
    initLayerHeight: 0,
    fanSpeed: 0,
    initFanSpeed: 0,
    layerHeight: 0,
    maxFanSpeed: 0,
    bedTempMax: 0,
    bedTempRecommended: 0,
    bedTempMin: 0,
    printingTempMax: 0,
    printingTemp: 0,
    printingTempMin: 0,
    printSpeedMax: 0,
    printSpeedRecommended: 0,
    enablePrintCooling: false,
    printingTempInitLayer: 0,
    enableRetraction: false,
    retractionDIstance: 0,
    retractionSpeed: 0
  };
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
  public typedelete: Type = {
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
  public filaments:Filament[]=[];
  public filament: Filament = {
    slicer: this.slicer,
    filamentId: 0,
    type: this.selectedType,
    printer: this.selectedprinter
  };
  public filamentdelete: Filament = {
    slicer: this.slicer,
    filamentId: 0,
    type: this.typedelete,
    printer: this.selectedprinter
  };


  constructor(private typeservice: TypeService, private slicerservice: SlicerService, private filamentservice: FilamentService, private printerservice: PrinterService) {
  }

  ngOnInit() {
    this.getTypes();
    this.getWidths();
    this.getAllNames();
    this.getAllBrands();
    this.getAllColors();
    this.getAllPrinters();
  }
public getWidths(){
    this.typeservice.getAllWidths().subscribe(data=>
    this.widths=data)
}
  public getTypes(): void {
    this.typeservice.getTypes().subscribe(
      res => {
        this.types = res;
      });


  }

  public getAllPrinters() {
    this.printerservice.getAllPrinters().subscribe(res =>
      this.printers = res);
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
    this.showtable=false;

    if (this.selectedPrinterDL == 0) {
      this.message = "Sie müssen 3D-Drucker auswählen";
      this.filaments = [];
      this.selectedType = {
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
      this.selectedprinter = {printerId: 0, printerType: "", bedMaterial: ""};
      this.slicer = {
        regFanSpeed: 0,
        printSpeedMin: 0,
        slicerId: 0,
        fanSpeedThreshold: 0,
        regFanSpeedAtLayer: 0,
        initLayerSpeed: 0,
        initLayerHeight: 0,
        fanSpeed: 0,
        initFanSpeed: 0,
        layerHeight: 0,
        maxFanSpeed: 0,
        bedTempMax: 0,
        bedTempRecommended: 0,
        bedTempMin: 0,
        printingTempMax: 0,
        printingTemp: 0,
        printingTempMin: 0,
        printSpeedMax: 0,
        printSpeedRecommended: 0,
        enablePrintCooling: false,
        printingTempInitLayer: 0,
        enableRetraction: false,
        retractionDIstance: 0,
        retractionSpeed: 0
      };
      this.filament = {slicer: this.slicer, filamentId: 0, type: this.selectedType, printer: this.selectedprinter};
    } else {

      this.message = "";
      if (this.selectedColorDL != "" && this.selectedBrandDL == "" && this.selectedMaterialDL == "") {
        this.filamentservice.findByColor(this.selectedColorDL, this.selectedPrinterDL).subscribe(data =>{
          this.filaments = data;
          if(this.filaments.length==0)
          {
            Swal.fire({
              title: 'Nicht gefunden!',
              text: 'Wir haben momental keine Daten für eingegebenes Filament',
              icon: 'error',
              confirmButtonColor: 'black',

            })
          }

        });




      } else if (this.selectedBrandDL != "" && this.selectedColorDL == "" && this.selectedMaterialDL == "") {
        this.filamentservice.findByBrand(this.selectedBrandDL, this.selectedPrinterDL).subscribe(data =>{
          this.filaments = data;
          if(this.filaments.length==0)
          {
            Swal.fire({
              title: 'Nicht gefunden!',
              text: 'Wir haben momental keine Daten für eingegebenes Filament',
              icon: 'error',
              confirmButtonColor: 'black'


            })
          }

        });


      } else if (this.selectedMaterialDL != "" && this.selectedColorDL == "" && this.selectedBrandDL == "") {
        this.filamentservice.findByMaterialType(this.selectedMaterialDL, this.selectedPrinterDL).subscribe(data =>{
          this.filaments = data;
          if(this.filaments.length==0)
          {
            Swal.fire({
              title: 'Nicht gefunden!',
              text: 'Wir haben momental keine Daten für eingegebenes Filament',
              icon: 'error',
              confirmButtonColor: 'black',

            })
          }

        });


      } else if (this.selectedColorDL == "" && this.selectedBrandDL == "" && this.selectedMaterialDL == "") {
        this.filamentservice.findByPrinterId(this.selectedPrinterDL).subscribe(data =>{

          this.filaments = data;
          if(this.filaments.length==0)
          {
            Swal.fire({
              title: 'Nicht gefunden!',
              text: 'Wir haben momental keine Daten für eingegebenes Filament',
              icon: 'error',
              confirmButtonColor: 'black',

            })
          }
        });


      } else if (this.selectedColorDL != "" && this.selectedBrandDL != "" && this.selectedMaterialDL == "") {
        this.filamentservice.findByColorANDBrand(this.selectedColorDL, this.selectedBrandDL, this.selectedPrinterDL).subscribe(data =>{
          this.filaments = data;
          if(this.filaments.length==0)
          {
            Swal.fire({
              title: 'Nicht gefunden!',
              text: 'Wir haben momental keine Daten für eingegebenes Filament',
              icon: 'error',
              confirmButtonColor: 'black',

            })
          }
        });


      } else if (this.selectedColorDL != "" && this.selectedBrandDL == "" && this.selectedMaterialDL != "") {
        this.filamentservice.findByColorANDType(this.selectedColorDL, this.selectedMaterialDL, this.selectedPrinterDL).subscribe(data =>{
          this.filaments = data;
          if(this.filaments.length==0)
          {
            Swal.fire({
              title: 'Nicht gefunden!',
              text: 'Wir haben momental keine Daten für eingegebenes Filament',
              icon: 'error',
              confirmButtonColor: 'black',

            })
          }
        });


      } else if (this.selectedColorDL == "" && this.selectedBrandDL != "" && this.selectedMaterialDL != "") {
        this.filamentservice.findByBrandANDType(this.selectedBrandDL, this.selectedMaterialDL, this.selectedPrinterDL).subscribe(data =>{
          this.filaments = data;
          if(this.filaments.length==0)
          {
            Swal.fire({
              title: 'Nicht gefunden!',
              text: 'Wir haben momental keine Daten für eingegebenes Filament',
              icon: 'error',
              confirmButtonColor: 'black',

            })
          }
        });

      } else if (this.selectedColorDL != "" && this.selectedBrandDL != "" && this.selectedMaterialDL != "") {
        this.filamentservice.findByBrandANDTypeANDColor(this.selectedBrandDL, this.selectedMaterialDL, this.selectedColorDL, this.selectedPrinterDL).subscribe(data =>{
          this.filaments = data;
          if(this.filaments.length==0)
          {
            Swal.fire({
              title: 'Nicht gefunden!',
              text: 'Wir haben momental keine Daten für eingegebenes Filament',
              icon: 'error',
              confirmButtonColor: 'black',

            })
          }
        });
      }
    }

  }

  public openDetails(value: number) {
this.showtable=true;
    this.filamentservice.getFilamentByPrinterId(value, this.selectedPrinterDL).subscribe(
      res => {
        this.filament = res;
      })


  }

  public delete(value: number) {

    this.filamentservice.getFilamentById(value).subscribe(
      res => {
        this.filamentdelete = res;

        Swal.fire({
          title: 'Sind Sie sicher?',
          text: "Daten für Filament " + this.filamentdelete.type.materialType + "- " + this.filamentdelete.type.brand + "- " + this.filamentdelete.type.color + " (3D Drucker: " + this.filamentdelete.printer.printerType + ") löschen?",
          icon: 'question',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Ja, löschen!',
          cancelButtonText: 'Nein'
        }).then((result) => {
          if (result.isConfirmed) {
            this.filamentservice.countFilamentBySlicerId(this.filamentdelete.slicer.slicerId).subscribe(res=> {
              this.countslicer = res;
              if (this.countslicer == 1) {
this.slicerservice.deleteSlicer(this.filamentdelete.slicer.slicerId).subscribe(data=>
  console.log(data)
)}
            });
            this.filamentservice.countFilamentByTypeId(this.filamentdelete.type.typeId).subscribe(res=>{
              this.counttype=res;
              if(this.counttype==1){
                this.typeservice.deleteType(this.filamentdelete.type.typeId).subscribe(data=>
                console.log(data));
              }
            })
this.filamentservice.deleteFilament(this.filamentdelete.filamentId).subscribe(data=>{
  console.log(data);
  Swal.fire({
    title: 'Gelöscht!',
    text: 'Daten werden erfolgreich gelöscht',
    icon: 'success',
    showConfirmButton:false,
    timer:1000
  })
setTimeout(()=>{
  this.startSearch();
}, 1000);


})
          }
        })

      })


  }
}

