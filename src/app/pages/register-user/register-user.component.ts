import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
  showPassword = false;
  @ViewChild('emailUser') emailUser!: ElementRef;
  @ViewChild('senhaUser') senhaUser!: ElementRef;
  @ViewChild('confirmSenha') confirmSenha!: ElementRef;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    this.senhaUser.nativeElement.type = this.showPassword ? 'text' : 'password';
  }

  toggleConfirmPasswordVisibility() {
    this.confirmSenha.nativeElement.type = this.showPassword ? 'text' : 'password';
  }

  ngAfterViewInit() {
  }

  imprimir() {
    const getEmail = this.emailUser.nativeElement.value;
    const getSenha = this.senhaUser.nativeElement.value;
    const getConfirmSenha = this.confirmSenha.nativeElement.value;


    if (getSenha == getConfirmSenha) {
      console.log(getEmail, getSenha);
    }
  }
}
