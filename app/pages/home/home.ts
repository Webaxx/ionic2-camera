import {Page, NavController, Alert} from 'ionic-angular';
import {Camera, SocialSharing} from 'ionic-native';

@Page({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {

  private _nav:NavController;
  public path;
  public displayPhotoMenu:boolean;

  constructor(nav: NavController) {
    this._nav = nav;
  }

  /**
  *  Open the camera device
  */
  public openCamera():void{

    let options = {
      sourceType:Camera.PictureSourceType.CAMERA,
      destinationType:Camera.DestinationType.NATIVE_URI,
      correctOrientation:true,
      saveToPhotoAlbum:true
    };

    Camera.getPicture(options).then((path) => {
      this.path = path;
      this.displayPhotoMenu = true;
    });
  }

  /**
  * Share via Twitter
  */
  public shareViaTwitter():void{

    let prompt:any = this._initAlert('Via Twitter');

    prompt['buttons'][1] = {
      text:'Send',
      handler: data => {
        SocialSharing.shareViaTwitter(data.message, this.path)
      }
    };

    this._nav.present(Alert.create(prompt));
  }

  /**
  * Share via WhatsApp
  */
  public shareViaWhatsApp():void{

    let prompt:any = this._initAlert('Via WhatsApp');

    prompt['buttons'][1] = {
      text:'Send',
      handler: data => {
        SocialSharing.shareViaWhatsApp(data.message, this.path)
      }
    };

    this._nav.present(Alert.create(prompt));

  }

  /**
  * Share via Facebook
  */
  public shareViaFacebook():void{

    let prompt:any = this._initAlert('Via Facebook');

    prompt['buttons'][1] = {
      text:'Send',
      handler: data => {
        SocialSharing.shareViaFacebook(data.message, this.path)
      }
    };

    this._nav.present(Alert.create(prompt));
  }

  /**
  * Share via Instagram
  */
  public shareViaInstagram():void{

    let prompt:any = this._initAlert('Via Instagram');

    prompt['buttons'][1] = {
      text:'Send',
      handler: data => {
        SocialSharing.shareViaInstagram(data.message, this.path)
      }
    };

    this._nav.present(Alert.create(prompt));

  }

  /**
  * Create prompt aletr
  */
  private _initAlert(title: string):any{

      return {
        title: title,
        message: "Enter a short description",
        inputs: [
          {
            name: 'message',
            placeholder: 'Message'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          }
        ]
      }
  }
}
