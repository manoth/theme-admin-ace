import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUp = new SignUp();
  password: string;
  repassword: string;
  image: any;
  imgURL: any = './assets/images/profile-avatar-user-1.png';

  constructor() { }

  ngOnInit(): void {
  }

  useImg(str: string) {
    this.imgURL = './assets/images/profile-avatar-user-' + str + '.png';
  }

  fileProgress(files: any) {
    this.image = null;
    this.imgURL = this.useImg(this.signUp.sex);
    if (files.length > 0) {
      const mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        return;
      } else {
        this.image = files[0];
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
          this.imgURL = reader.result;
        }
      }
    }
  }

}

export class SignUp {
  username: string;
  password: string;
  image: string;
  cid: string;
  hospcode: string = '';
  pname: string = '';
  fname: string;
  lname: string;
  birth: any;
  sex: string = '1';
  email: string;
  tel: string;
}