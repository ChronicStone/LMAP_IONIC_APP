import { Injectable } from "@angular/core";
import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";
const { Camera } = Plugins;

@Injectable({
  providedIn: "root",
})
export class PhotoService {
  constructor() {}

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
  }
}
