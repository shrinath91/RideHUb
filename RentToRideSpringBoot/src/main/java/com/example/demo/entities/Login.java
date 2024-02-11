package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "login")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Login {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int login_id;
	
	@Column
	private String username;
	
	@Column
	private  String password;
	
	@Column 
	private int role_id; 
	
	@JsonIgnoreProperties("login")
	@OneToOne(mappedBy = "login")
	private User user;

	
	
	public Login(String username, String password, int role_id) {
		super();
		this.username = username;
		this.password = password;
		this.role_id = role_id;
		
	}
	
	
	
	
}
