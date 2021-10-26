import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { IFilme } from '../models/iFilme.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

titulo = 'Vídeos';
listaVideos: IFilme[] = [
  {
      nome: 'Venom (2018)',
      lancamento: '14 05/10/2018',
      duracao: '1h 50m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w220_and_h330_face/apZJb9kdHXhPu6oDTeztDSd41zw.jpg',
      generos: ['Ação', 'Aventura', 'Terror']
  }
];


  constructor(
    public alertController: AlertController,
    public toastController: ToastController) {}

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Deseja favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim, favoritar',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }


  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}
