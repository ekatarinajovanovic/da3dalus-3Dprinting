import {Type} from "./Type";
import {Slicer} from "./Slicer";
import {Printer} from "./Printer";

export interface Filament{
  filamentId: number,
  type: Type,
  slicer : Slicer,
  printer: Printer

}
