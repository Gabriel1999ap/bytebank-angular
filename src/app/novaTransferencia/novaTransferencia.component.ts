import { Component, EventEmitter, Output } from "@angular/core";


@Component({
  selector: 'app-novaTransferencia',
  templateUrl: './novaTransferencia.component.html',
  styleUrls: ['./novaTransferencia.component.scss']
})

export class novaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter <any>();


  valor:number;
  destino:number;

  transferir() {
    console.log("Solicitada nova transferencia")
    const valorEmitir = {valor: this.valor, destino: this.destino}
    this.aoTransferir.emit(valorEmitir)
    
    this.limparCampos()
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }

}