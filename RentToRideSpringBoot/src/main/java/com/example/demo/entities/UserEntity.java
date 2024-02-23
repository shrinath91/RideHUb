package com.example.demo.entities;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class UserEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int user_id;
	@Column
	String username;
	@Column
	String password;
	@ManyToOne
	@JoinColumn(name = "role_id")
	RoleEntity role_id;
	
	@OneToMany(mappedBy="driver_user_id")
	List<DriverEntity> drivers;
	@Column
	private int status;
	public int getUser_id() {
		return user_id;
	}
	public String getUsername() {
		return username;
	}
	public String getPassword() {
		return password;
	}
	public RoleEntity getRole_id() {
		return role_id;
	}
	public int getStatus() {
		return status;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public void setRole_id(RoleEntity role_id) {
		this.role_id = role_id;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public UserEntity(String username, String password, RoleEntity role_id, int status) {
		super();
		this.username = username;
		this.password = password;
		this.role_id = role_id;
		this.status = status;
	}
	public UserEntity() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
