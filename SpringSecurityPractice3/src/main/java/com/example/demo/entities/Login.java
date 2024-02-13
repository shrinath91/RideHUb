package com.example.demo.entities;

import org.springframework.stereotype.Component;

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


@Getter
@Setter
@Component
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "login")
public class Login {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int login_id;
	
	@Column
	private String username;
	
	@Column
	private  String password;
	
	@JsonIgnoreProperties("login")
    @ManyToOne
    @JoinColumn(name="role_id")
    private Role role_id;
	
	@JsonIgnoreProperties("login")
	@OneToOne(mappedBy = "login")
	private User user;

	public Login(String username, String password, Role role_id) {
		super();
		this.username = username;
		this.password = password;
		this.role_id = role_id;
		
	}
	
	
	
	
}
