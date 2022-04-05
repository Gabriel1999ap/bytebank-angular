import { Component } from "@angular/core";

@Component({
  selector: 'app-novaTransferencia',
  templateUrl: './novaTransferencia.component.html',
  styleUrls: ['./novaTransferencia.component.scss']
})

export class novaTransferenciaComponent {

  valor:number;
  destino:number;

  transferir() {
    console.log("Solicitada nova transferencia")
    console.log("valor: ",this.valor);
    console.log("destino: ",this.destino);
  }

}