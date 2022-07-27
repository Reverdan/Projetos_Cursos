import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
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
  userId: any = '';

  constructor(private fb: FormBuilder, 
    private userservice: UserService, 
    private actRoute: ActivatedRoute,
    private router: Router) 
  { 
    this.userForm = this.fb.group({id: 0, nome: '', sobrenome: '', idade: '', profissao: ''})
  }

  ngOnInit(): void 
  {
    this.actRoute.paramMap.subscribe(params => 
      {
        this.userId = params.get('id'); 
        console.log(this.userId);
        if (this.userId !== null)
        {
          this.userservice.getUser(this.userId).subscribe(result => 
            {
              this.userForm.patchValue(
                {
                  id: result[0].id,
                  nome: result[0].nome,
                  sobrenome: result[0].sobrenome,
                  idade: result[0].idade,
                  profissao: result[0].profissao
                })
            })
        }
        
      })
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
    this.userservice.postUser(this.userForm.value).subscribe(result => 
      {
        console.log(`Usuario ${result.nome} ${result.nome} cadastrado com sucesso`)
      },
      (err) =>
      {
      },
      () => {
        this.router.navigate(['/']);
      });
  }

  updateUser()
  {
    this.userservice.updateUser(this.userId, this.userForm.value).subscribe(result =>
      {
        console.log('Usuário atualizado', result);
      },
      (err) =>
      {

      },
      () => {
        this.router.navigate(['/']);
      })
  }

  actionButton()
  {
    if(this.userId !== null)
    {
      this.updateUser()
    }
    else
    {
      this.createUser();
    }
  }
}
