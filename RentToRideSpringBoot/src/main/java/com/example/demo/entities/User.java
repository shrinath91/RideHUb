package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;




@Entity
@Table(name = "users")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private int userId;
    
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="login_id")
    @JsonIgnoreProperties("users")
    private Login login;
    
    @Column(name = "fname")
    private String fname;

    @Column(name = "lname")
    private String lname;

    @Column(name = "contact")
    private String contact;

    @Column(name = "email")
    private String email;

    @Column(name = "address")
    private String address;

    @Column(name = "rating")
    private double rating;

    @Column(name = "emergency_contact")
    private String emergencyContact;

    
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="role_id")
    @JsonIgnoreProperties("users")
    private Role role;

    @Column(name = "status")
    private String status;

    
//    @Override
//    public String toString() {
//        return "User{" +
//                "userId=" + userId +
//                ", fname='" + fname + '\'' +
//                ", lname='" + lname + '\'' +
//                ", contact='" + contact + '\'' +
//                ", email='" + email + '\'' +
//                ", address='" + address + '\'' +
//                ", rating=" + rating +
//                ", emergencyContact='" + emergencyContact + '\'' +
//                ", role=" + role +
//                ", status='" + status + '\'' +
//                '}';
//    }
}

