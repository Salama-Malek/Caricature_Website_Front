import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { User } from 'src/app/features/Interfaces/user';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe(
      (users: User[]) => {
        this.users = users;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  updateUser(userId: any): void {
    this.userService.updateUser(userId).subscribe(
      (response: any) => {
        // Handle the response if needed
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  deleteUser(userId: any): void {
    this.userService.deleteUser(userId).subscribe(
      (response: any) => {
        // Handle the response if needed
        console.log(response);
        this.loadUsers(); // Refresh the user list after deletion
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}