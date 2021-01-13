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
  * @description Gerencia o retorno de mensagens da aplicacao, considerando os parâmetros abaixo. o uso de um parâmetro torna
  * obrigatória a informção dos anteriores
  * @param tipo tipo: string, opcional - tipo da mensagem, os possíveis são: success/error/warning/info
  * @param titulo tipo: string, opcional - titulo desejado para a mensagem.
  * @param descricao tipo: string, opcional - descricao da mensagem.
  * @param userOptions tipo: objeto, opcional - opções para a mensagem (informação detalhada em https://www.npmjs.com/package/ngx-toastr)
  */
  handleMessage(tipo?: string, descricao = 'Descrição não informada', titulo?: string, userOptions?: {}): void {

    const options = {closeButton: true, timeOut: 1000};

    switch (tipo) {
      case 'warning':
        this.toastr.warning(descricao, titulo || 'Atenção!', userOptions || options)
        break;
      case 'success':
        this.toastr.success(descricao, titulo || 'Sucesso!', userOptions || options)
        break;
      case 'info':
        this.toastr.info(descricao, titulo || 'Informação!', userOptions || options)
        break;
      case 'error':
        this.toastr.error(descricao, titulo || 'Erro!', userOptions || options)
        break;
      default :
        this.toastr.info('Mensagem Informativa: tipo de erro não informado', 'Info')
    }
  }

}
