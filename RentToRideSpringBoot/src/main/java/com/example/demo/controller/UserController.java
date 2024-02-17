package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.DummyUserEntity;
import com.example.demo.entities.UserEntity;
import com.example.demo.services.RoleService;
import com.example.demo.services.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

	@Autowired
	UserService uservice;

	@Autowired
	RoleService rservice;
	
	@PostMapping("/saveUser")
	public UserEntity saveUser(@RequestBody UserEntity u) {
		return uservice.saveUser(u);
	}

	@GetMapping("/getAllUser")
	public List<UserEntity> getAllUser() {
		return uservice.getAllUser();
	}
	@PostMapping("/verifyLogin")
	public UserEntity checkLogin(@RequestBody DummyUserEntity dummy)
	{
		return uservice.getUserDetails(dummy.getUsername(),dummy.getPassword());
	}
}
