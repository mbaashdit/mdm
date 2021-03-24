import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Console } from 'node:console';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {



  items = [
    {
      name: "Manabendu",
      roll: "1",
      src: "https://i.imgur.com/1o1zEDM.png"
    },
    {
      name: "Manabendu",
      roll: "2",
      src: "https://i.imgur.com/1o1zEDM.png"
    },
    {
      name: "Manabendu",
      roll: "3",
      src: "https://i.imgur.com/1o1zEDM.png"
    },
    {
      name: "Manabendu",
      roll: "4",
      src: "https://i.imgur.com/1o1zEDM.png"
    },
    {
      name: "Manabendu",
      roll: "5",
      src: "https://i.imgur.com/1o1zEDM.png"
    },
    {
      name: "Manabendu",
      roll: "2",
      src: "https://i.imgur.com/1o1zEDM.png"
    },
    {
      name: "Manabendu",
      roll: "3",
      src: "https://i.imgur.com/1o1zEDM.png"
    },
    {
      name: "Manabendu",
      roll: "4",
      src: "https://i.imgur.com/1o1zEDM.png"
    },
    {
      name: "Manabendu",
      roll: "5",
      src: "https://i.imgur.com/1o1zEDM.png"
    },
    {
      name: "Manabendu",
      roll: "2",
      src: "https://i.imgur.com/1o1zEDM.png"
    },
    {
      name: "Manabendu",
      roll: "3",
      src: "https://i.imgur.com/1o1zEDM.png"
    },
    {
      name: "Manabendu",
      roll: "4",
      src: "https://i.imgur.com/1o1zEDM.png"
    },
    {
      name: "Manabendu",
      roll: "5",
      src: "https://i.imgur.com/1o1zEDM.png"
    }

  ];
  constructor(private camera: Camera,
    public toastController: ToastController) {

  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Image captured',
      duration: 2000
    });
    toast.present();
  }
  myDate: String = new Date().toISOString();

  openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;

      console.log(base64Image);
      this.presentToast() ;

    }, (err) => {
      // Handle error
      console.log(err);
    });
  }

}
