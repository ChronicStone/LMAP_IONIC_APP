import { Injectable } from "@angular/core";
import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";
const { Camera } = Plugins;
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  private b64toArrayBuffer(dataURI) {
    const byteString = atob(dataURI.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return ia;
    }
    
    
    private b64toBlob(dataURI, mimetype) {
        return new Blob([this.b64toArrayBuffer(dataURI)], {
            type: mimetype
        });
    }

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: 100,
      
    });


    var formData = new FormData()
    const blob = this.b64toBlob(capturedPhoto.dataUrl, "image/png");
    formData.append('image', blob);

    return {formData: formData, base64: capturedPhoto.dataUrl}
  }
  
  public base64ToFormData(input) {
    var formData = new FormData()
    const blob = this.b64toBlob(input, "image/png");
    formData.append('image', blob);
    return formData
  }
}
