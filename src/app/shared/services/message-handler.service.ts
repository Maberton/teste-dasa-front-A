import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageHandlerService {

  constructor(
    private toastr: ToastrService
  ) { }

 /**
  * @description Gerencia o retorno de mensagens da aplicacao, considerando os parâmetros abaixo
  * @param tipo tipo: string, opcional - tipo da mensagem, os possíveis são: success/error/warning/info
  * @param titulo tipo: string, opcional - titulo desejado para a mensagem.
  * @param descricao tipo: string, opcional - descricao da mensagem.
  */
  handleMessage(tipo?: string, descricao = 'Descrição não informada', titulo?: string): void {
    switch (tipo) {
      case 'warning':
        this.toastr.warning(descricao, titulo || 'Atenção!')
        break;
      case 'success':
        this.toastr.success(descricao, titulo || 'Sucesso!')
        break;
      case 'info':
        this.toastr.info(descricao, titulo || 'Informação!')
        break;
      case 'error':
        this.toastr.error(descricao, titulo || 'Erro')
        break;
      default :
        this.toastr.info('Mensagem Informativa: tipo de erro não informado', 'Info')
    }
  }

}
