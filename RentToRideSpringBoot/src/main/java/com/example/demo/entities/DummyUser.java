package com.example.demo.entities;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Component
@NoArgsConstructor
@AllArgsConstructor
public class DummyUser {
	private int role;
	private String user_name;
	private String password;
	private String fname;
	private String lname;
	private String contact;
	private String email;
	private String address;
	private String emergency_contact;
}
