package com.example.demo.entities;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Component
@NoArgsConstructor
@AllArgsConstructor
public class DummyUser {
	
	private int user_id;
	private String username;
	private String password;
	private String fname;
	private String lname;
	private String contact;
	private String email;
	private String address;
	private float decimal;
	private String emergency_contact;
	private String role_id;
	private String status;

}
