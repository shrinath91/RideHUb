package com.example.demo.entities;

import java.util.List;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Component
@Entity
@Table(name="roles")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Role {
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int role_id;
	@Column
	private String role_name;
	@OneToMany(mappedBy = "role",cascade = CascadeType.ALL)
	@JsonIgnoreProperties("role")
	List<User> users;
	public void setUsers(List<User> us) {
		for(User u : us) {
			u.setRole(this);
		}
		users = us;
	}
}
