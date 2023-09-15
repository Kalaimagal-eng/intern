package com.example.internapp.Internapp.MODEL;

import javax.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name="intern_login")
public class LoginForm {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="userId",nullable=false)
    private Long id;

    @Column(name="username")
    private String Username;

    @Column(name="email")
    private String email;

    @Column(name="Password")
    private String Password;

    @Column(name="role" , length=30)
    private String role;


}
