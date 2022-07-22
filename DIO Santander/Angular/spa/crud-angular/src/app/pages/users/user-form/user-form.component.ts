import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component
({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit 
{
  userForm: FormGroup;
  users: Array<User> = [];
  valorId: number = 0;

  constructor(private fb: FormBuilder, private userservice: UserService) 
  { 
    this.userForm = this.fb.group({id: 0, nome: '', sobrenome: '', idade: '', profissao: ''})
  }

  ngOnInit(): void 
  {
    this.getUsers();
  }

  getUsers()
  {
    // this.userservice.getUsers().subscribe(response => {this.users = response;});
    this.userservice.getUsers().subscribe(response => {this.valorId = response.length + 1;});
  }

  createUser()
  {
    // this.userForm.get('id')?.patchValue(this.users.length + 1);
    this.userForm.get('id')?.patchValue(this.valorId);
    this.userservice.postUser(this.userForm.value)
      .subscribe(result => {console.log(`Usuario ${result.nome} ${result.nome} cadastrado com sucesso`)});
  }

}
